import * as React from 'react';

const useLocalStorageState = <T>(key: string, defaultValue: T): [
    T,
    (newValue: T) => void
] => {
    const [hadRevivedValue, setHadRevivedValue] = React.useState<boolean>(false);

    if (!hadRevivedValue) {
        try {
            const storedSerializedValue = window.localStorage.getItem(key);
            const storedValue: T | null = 
                storedSerializedValue && JSON.parse(storedSerializedValue);

            if (storedValue !== null) {
                defaultValue = storedValue as NonNullable<T>;
            }
        } finally {
            setHadRevivedValue(true);
        }
    }

    const [state, setState] = React.useState<T>(defaultValue);
    const setStorageState = React.useCallback((newValue: NonNullable<T>) => {
        setState(newValue);

        try {
            // tslint:disable-next-line:triple-equals
            if (newValue == undefined) {
                window.localStorage.removeItem(key);
            } else {
                const toStore = JSON.stringify(newValue);
                window.localStorage.setItem(key, toStore);
            }
        } catch {
            return;
        }
    }, [key, setState]);

    return [
        state,
        setStorageState
    ]
};

export default useLocalStorageState;