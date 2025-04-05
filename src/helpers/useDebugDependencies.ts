import { useEffect, useRef } from "react";

function useDebugDependencies(depsObject: Record<string, unknown>) {
  const depsArray = Object.values(depsObject);
  const lastDeps = useRef<Record<string, unknown>>({});

  useEffect(() => {
    const depsInfo: Record<string, { "Old value": unknown; "New value": unknown }> = {};

    Object.entries(depsObject).forEach(([key, value]) => {
      const oldValue = lastDeps.current[key];
      const hasChanged = oldValue !== value;

      depsInfo[`${key} ${hasChanged ? "🔥" : "☕"}`] = {
        "Old value": oldValue,
        "New value": value,
      };
    });

    console.table(depsInfo);

    lastDeps.current = depsObject;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depsArray);
}

export default useDebugDependencies;
