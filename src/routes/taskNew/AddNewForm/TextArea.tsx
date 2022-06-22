// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { Component } from 'solid-js';
import { useField } from 'solid-js-form';

const TextArea: Component<{ name: string; label: string; placeholder: string; class?: string }> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const { field, form } = useField(props.name);
  const { formHandler } = form;

  return (
    <div class={`relative ${props.class ?? ''}`}>
      <textarea
        name={props.name}
        value={field.value()}
        use:formHandler
        placeholder={props.placeholder}
        rows={2}
        class="peer block min-h-[3.5rem] w-full resize-y rounded-md border border-outline/50 bg-primary-container p-3 text-lg text-on-primary-container placeholder-transparent outline-primary"
      />
      <label
        for={props.name}
        class="absolute left-0 -top-6 text-sm text-on-background transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-outline/60 peer-focus:first-line:-top-3.5"
      >
        {props.label}
      </label>
      <span class="text-sm text-error">{field.error()}</span>
    </div>
  );
};

export { TextArea };
