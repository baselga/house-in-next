import * as React from "react";
import { useCallback } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * Alternative to useCallback that doesn't update the callback when dependencies change
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
function useEvent<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
  isRenderSafe = false
) {
  const ref = React.useRef<(...args: Args) => Return>(
    isRenderSafe
      ? fn
      : () => {
          throw new Error(
            "Cannot call an event handler while rendering. " + fn.toString()
          );
        }
  );

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args: Args) => ref.current(...args), []);
}

export default useEvent;
