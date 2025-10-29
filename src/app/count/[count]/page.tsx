import Counter from './Counter'; 

export default async function CountPage({ params }: { params: Promise<{ count: string }> | { count: string } }) {
    const actualParams = await params;
    const initialCount = Number(actualParams.count);

    return (
       <Counter initialCount={initialCount} />
    );
}