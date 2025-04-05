
import { useEffect, useLayoutEffect } from "react";
import { canUseDOM } from "./canUseDOM";

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
