import * as React from 'react';

export default function usePromise<T>(
    promiseFn: () => Promise<T>, 
    defaultValue: T, 
    inputs?: ReadonlyArray<any>
): [T, boolean] {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<T>(defaultValue);

    React.useEffect(() => {
        setLoading(true);
        promiseFn().then(result => {
            setLoading(false);
            setValue(result);
        }, () => setLoading(false));
    }, inputs);

    return [value, loading];
}