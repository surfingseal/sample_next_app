"use server"

const paths = [
    {name: 'kim'},
    {name: 'lee'},
    {name: 'park'}
];

export async function generateStaticParams() {
    return paths;
}

export default async function Name({params}:{params: Promise<{name:string}>}) {
    const actualParams = await params;

    const result = paths.some(path=>path.name===actualParams.name);

    return (
        <main>
            {result ?
            <>
                <h1 className="title">Name = &quot;{actualParams.name}&quot;</h1>
                <p className="msg">{actualParams.name}님, 안녕하세요!</p>
            </>
            :
            <>
                <h1 className="title">&quot;{actualParams.name}&quot;</h1>
                <p className="msg">&quot;{actualParams.name}&quot;은 사용할 수 없습니다.</p>
            </>
            }

            <div>
                <a href='/'>go back!!</a>
            </div>
        </main>
    );
}