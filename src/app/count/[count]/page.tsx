import CountProvider from '../../components/CountProvider';
import Counter from './Counter'; 

export default async function CountPage({ params }: { params: Promise<{ count: string }>}) {
    const actualParams = await params;
    const initialCount = Number(actualParams.count);

    return (
        <CountProvider count={initialCount}>
            <Counter />
        </CountProvider>
    );
}
