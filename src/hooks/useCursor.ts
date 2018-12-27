import * as React from "react";
import PromiseCursor, { PromiseCursorProvider } from "../cursor";
import useMount from "./useMount";

export interface CursorOptions {
  /**
   * Should data from additional requests
   * be appended to the current view,
   * rather than replacing the current view.
   *
   * False by default.
   */
  readonly additive?: boolean;
}

export default function useCursor<T>(
  cursorProvider: PromiseCursorProvider<T>,
  options?: CursorOptions
): [T[], () => void, boolean] {
  const [currentCursor, setCurrentCursor] = React.useState<
    PromiseCursor<T> | undefined
  >(undefined);

  const [currentData, setCurrentData] = React.useState<T[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const consumeCursor = (provider: PromiseCursorProvider<T>) => {
    console.log("Loading next");
    setLoading(true);

    provider().then(cursor => {
      console.log("loaded", provider);
      setLoading(false);
      setCurrentCursor(cursor);

      if (options && options.additive) {
        setCurrentData(currentData.concat(cursor.data));
      } else {
        setCurrentData(cursor.data);
      }
    });
  };

  const next = React.useCallback(
    () => currentCursor && consumeCursor(currentCursor.next),
    [currentCursor, currentData]
  );

  useMount(() => consumeCursor(cursorProvider));

  return [currentData, next, loading];
}
