'use client';

import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';

let DB: number = 0;

export default function Counter({initialCount}: {initialCount: number}) {
    DB = initialCount;

    const queryClient = useQueryClient();
    const queryKey: string[] = ['num']

    const {data} = useQuery({
        queryKey: queryKey,
        queryFn: async () => DB,
    });

    const {mutate} = useMutation({
        mutationFn: async (newValue: number) => {
            DB = newValue;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKey});
        }
    })

    

    const doPlus = () => {
        mutate(data + 1)
    }

    return (
        <main>
            <h1>{data}</h1>
            <button onClick={doPlus}>+</button>
        </main>
    );
}