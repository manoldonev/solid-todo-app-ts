import Hammer from 'hammerjs';
import type { ParentComponent, JSXElement } from 'solid-js';
import { onCleanup, onMount, createSignal } from 'solid-js';
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
  onSwipedLeft?: (eventData: HammerInput) => void;
  onSwipedRight?: (eventData: HammerInput) => void;
  onTap?: (eventData: HammerInput) => void;
  threshold?: number;
}

const SwipeToAction: ParentComponent<SwipeToActionProps> = (props) => {
  let backgroundRef: HTMLDivElement;
  let foregroundRef: HTMLDivElement;

  const [swipeDirection, setSwipeDirection] = createSignal<SwipeDirection>(LEFT);

  const onPanStart = (): void => {
    foregroundRef.style.transition = '';
    foregroundRef.style.transform = '';
  };

  const onPanning = (eventData: HammerInput): void => {
    const isLeftPan = eventData.offsetDirection === Hammer.DIRECTION_LEFT;
    setSwipeDirection(isLeftPan ? LEFT : RIGHT);

    const transform = `translateX(${eventData.deltaX}px)`;
    foregroundRef.style.transform = transform;

    const opacity = Math.min(Math.abs(eventData.deltaX) / 100, 1);
    backgroundRef.style.opacity = opacity.toFixed(2);
  };

  const onPanned = (eventData: HammerInput): void => {
    let left = eventData.deltaX;
    const { offsetWidth } = foregroundRef;
    const isLeftPan = eventData.offsetDirection === Hammer.DIRECTION_LEFT;
    if (Math.abs(left) >= offsetWidth * (props.threshold ?? 0.3)) {
      left = isLeftPan ? -offsetWidth * 2 : offsetWidth;

      if (isLeftPan) {
        props.onSwipedLeft?.(eventData);
      } else {
        props.onSwipedRight?.(eventData);
      }
    } else {
      left = 0;
    }

    foregroundRef.style.transition = 'transform 0.5s ease-out';
    foregroundRef.style.transform = `translateX(${left}px)`;
  };

  onMount(() => {
    // TODO: hammerjs recognizers should not trigger if standard vertical scroll is in progress
    const hammer = new Hammer(foregroundRef, { touchAction: 'pan-y', inputClass: Hammer.TouchInput });
    hammer.on('tap', (eventData) => props.onTap?.(eventData));
    hammer.on('pan', (eventData) => {
      if (eventData.isFirst) {
        onPanStart();
        return;
      }

      if (eventData.isFinal) {
        onPanned(eventData);
        return;
      }

      onPanning(eventData);
    });

    onCleanup(() => hammer.destroy());
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
