import CountProvider from '../../components/CountProvider';
import Counter from './Counter'; 
import { redirect } from 'next/navigation';
export default async function CountPage({ params }: { params: Promise<{ count: string }>}) {
    const actualParams = await params;
    const initialCount = Number.isNaN(Number(actualParams.count)) ? redirect('/count') :  Number(actualParams.count);

    return (
        <CountProvider count={initialCount}>
            <Counter />
        </CountProvider>
    );
}
