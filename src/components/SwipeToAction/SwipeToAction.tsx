import type { ParentComponent, JSXElement } from 'solid-js';
import { onCleanup, onMount, createSignal } from 'solid-js';
import TinyGesture from 'tinygesture';
import type { ClassProps } from '../../types';
import { BackgroundLayer } from './BackgroundLayer';
import { ForegroundLayer } from './ForegroundLayer';
import type { SwipeDirection } from './SwipeDirection';
import { LEFT, RIGHT } from './SwipeDirection';

export interface SwipeToActionProps extends ClassProps {
  leftChildrenClass?: string;
  rightChildrenClass?: string;
  leftChildren?: JSXElement;
  rightChildren?: JSXElement;
  onSwipedLeft?: (eventData: TouchEvent) => void;
  onSwipedRight?: (eventData: TouchEvent) => void;
  onTap?: (eventData: TouchEvent) => void;
  threshold?: number;
}

const SwipeToAction: ParentComponent<SwipeToActionProps> = (props) => {
  let backgroundRef: HTMLDivElement;
  let foregroundRef: HTMLDivElement;
  let gesture: TinyGesture;

  const [swipeDirection, setSwipeDirection] = createSignal<SwipeDirection>(LEFT);

  const onTap = (eventData: MouseEvent | TouchEvent): void => {
    props.onTap?.(eventData as TouchEvent);
  };

  const onPanStart = (): void => {
    foregroundRef.style.transition = '';
    foregroundRef.style.transform = '';
  };

  const onPanMove = (): void => {
    if (gesture.swipingDirection !== 'horizontal' && gesture.swipingDirection !== 'pre-horizontal') {
      return;
    }

    const isLeftPan = gesture.touchMoveX! < 0;
    setSwipeDirection(isLeftPan ? LEFT : RIGHT);

    const transform = `translateX(${gesture.touchMoveX!}px)`;
    foregroundRef.style.transform = transform;

    const opacity = Math.min(Math.abs(gesture.touchMoveX!) / 100, 1);
    backgroundRef.style.opacity = opacity.toFixed(2);
  };

  const onPanEnd = (eventData: MouseEvent | TouchEvent): void => {
    if (gesture.touchMoveX == null) {
      return;
    }

    let left = gesture.touchMoveX;
    // consider "swipe" only if gesture was predominantly horizontal
    if (gesture.swipingDirection === 'horizontal' || gesture.swipingDirection === 'pre-horizontal') {
      const { offsetWidth } = foregroundRef;
      const isLeftPan = gesture.touchMoveX < 0;
      if (Math.abs(left) >= offsetWidth * (props.threshold ?? 0.3)) {
        left = isLeftPan ? -offsetWidth * 2 : offsetWidth;

        if (isLeftPan) {
          props.onSwipedLeft?.(eventData as TouchEvent);
        } else {
          props.onSwipedRight?.(eventData as TouchEvent);
        }
      } else {
        left = 0;
      }
    } else {
      /* clean up any "residual" horizontal movement */
      left = 0;
    }

    foregroundRef.style.transition = 'transform 0.5s ease-out';
    foregroundRef.style.transform = `translateX(${left}px)`;
  };

  onMount(() => {
    gesture = new TinyGesture(foregroundRef, { mouseSupport: false });
    gesture.on('tap', onTap);
    gesture.on('panstart', onPanStart);
    gesture.on('panmove', onPanMove);
    gesture.on('panend', onPanEnd);

    onCleanup(() => gesture.destroy());
  });

  return (
    <div class="relative w-full overflow-hidden">
      <BackgroundLayer
        ref={backgroundRef!}
        class={swipeDirection() === LEFT ? props.rightChildrenClass : props.leftChildrenClass}
        swipeDirection={swipeDirection()}
      >
        {swipeDirection() === LEFT ? props.rightChildren : props.leftChildren}
      </BackgroundLayer>
      <ForegroundLayer ref={foregroundRef!} class={props.class}>
        {props.children}
      </ForegroundLayer>
    </div>
  );
};

export { SwipeToAction };
