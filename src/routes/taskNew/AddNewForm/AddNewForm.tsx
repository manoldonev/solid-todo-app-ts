import type { Component } from 'solid-js';
import { Form } from 'solid-js-form';
import * as yup from 'yup';
import { Input } from './Input';
import { useCreateTodo } from './query';
import { TextArea } from './TextArea';

const validationSchema = yup.object().shape(
  {
    title: yup
      .string()
      .trim()
      .max(20, 'Must be 20 characters or less')
      .when('note', {
        is: (note?: string) => note == null || note.length === 0,
        then: yup.string().required('At least one of the fields is required'),
      }),
    note: yup
      .string()
      .trim()
      .max(20000, 'Must be 20000 characters or less')
      .when('title', {
        is: (title?: string) => title == null || title.length === 0,
        then: yup.string().required('At least one of the fields is required'),
      }),
  },
  [['title', 'note']],
);

const AddNewForm: Component<{
  class?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}> = (props) => {
  const { mutateAsync: createTodo } = useCreateTodo();

  const onSubmit = async (form: {
    readonly values: { readonly title: string; readonly note: string };
  }): Promise<void> => {
    // TODO: extend db schema with real 'title' field
    // TODO: user management (auth)
    await createTodo({ input: { task: form.values.note || form.values.title, done: false, user_id: '1' } });
    props.onSubmit?.();
  };

  return (
    <div class={`bg-background ${props.class ?? ''}`}>
      {/* TODO: better SolidJS form library needed -- currently "patch-packaging" solid-js-form because of broken yup validation support; also it does not support "dialog" forms and generally you cannot control the form.method attribute. */}
      <Form
        data-testid="add-new-form"
        initialValues={{ title: '', note: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Input class="mt-2" name="title" label="Title" placeholder="Title" />
        <TextArea class="my-10" name="note" label="Note" placeholder="Note" />

        <div class="flex justify-center">
          <button
            type="submit"
            class="mr-2 h-12 w-24 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium uppercase text-on-primary outline-none hover:bg-primary-variant focus:ring-4 focus:ring-primary/50"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => props.onCancel?.()}
            class="h-12 w-24 rounded-lg border border-primary bg-background/50 px-5 py-2.5 text-center text-sm font-medium uppercase text-primary outline-none hover:border-primary-variant hover:bg-primary-variant hover:text-on-primary focus:ring-4 focus:ring-primary/50"
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

export { AddNewForm };
