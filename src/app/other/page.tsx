'use server';
import Link from 'next/link';
import {readData} from '../server-action'

export default async function Other() {
    const data = await readData();
    return (
        <main>
            <h1 className = "title">Other page</h1>
            <p className = "msg">메세지를 저장했습니다.</p>
            <pre className="m-5 p-2 border">{data}</pre>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    );
}