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
): [T[], () => void] {
  const [currentCursor, setCurrentCursor] = React.useState<
    PromiseCursor<T> | undefined
  >(undefined);

  const [currentData, setCurrentData] = React.useState<T[]>([]);

  function consumeCursor(cursor: PromiseCursor<T>) {
    setCurrentCursor(cursor);

    if (options && options.additive) {
      setCurrentData(currentData.concat(cursor.data));
    } else {
      setCurrentData(cursor.data);
    }
  }

  useMount(() => cursorProvider().then(consumeCursor));

  return [
    currentData,
    () => currentCursor && currentCursor.next().then(consumeCursor)
  ];
}
