export default async function Name({params}:{params: Promise<{name:string}>}) {
    const {name} = await params;
    return (
        <main>
            <h1 className="title">Name page</h1>
            <p className="msg">당신은 '{name}'님이군요.</p>
            <div>
                <a href="/">go back!!</a>
            </div>
        </main>
    );
}