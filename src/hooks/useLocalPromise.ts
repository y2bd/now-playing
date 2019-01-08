import * as React from 'react';
import useLocalStorageState from './useLocalStorage';

export default function useLocalPromise<T>(
    key: string,
    promiseFn: () => Promise<T>,
    defaultValue: T,
    inputs?: ReadonlyArray<T>
): [T, boolean, Error | undefined] {
    const [value, setValue] = useLocalStorageState(key, defaultValue);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>(undefined);

    React.useEffect(() => {
        setLoading(true);
        promiseFn().then(result => {
            setLoading(false);
            setValue(result);
        }).catch(err => {
            setLoading(false);
            setError(err);
        });
    }, inputs);

    return [value, loading, error];
}