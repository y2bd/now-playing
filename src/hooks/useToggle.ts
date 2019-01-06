import * as React from 'react';

export default function useToggle(defaultValue?: boolean): [boolean, () => void] {
    const [state, setState] = React.useState(!!defaultValue);

    const toggleState = React.useCallback(() => {
        setState(!state);
    }, [state, setState]);

    return [state, toggleState];
}