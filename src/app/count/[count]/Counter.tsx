'use client';

import {useContext} from 'react';
import {CountContext} from '../../context/CountContext';
import {useEffect} from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';

let DB: number = 0;

export default function Counter() {
    const initialCount = useContext(CountContext);
 
    useEffect(() => {
        DB = initialCount;
    } , [initialCount]);

    const queryClient = useQueryClient();
    const queryKey: string[] = ['num']

    const {data = DB} = useQuery({
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

    const doMinus = () => {
        mutate(data - 1)
    }

    return (
        <main>
            <h1 className="number">{data}</h1>


            <div class="flex-center mt-10">
                <button className="btn" onClick={doPlus}>+</button>
                <button className="btn" onClick={doMinus}>-</button>
            </div>
        </main>
    );
}