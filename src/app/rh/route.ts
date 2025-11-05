"use server";
import fs from 'fs';
import { NextResponse } from 'next/server';

const path = './data.txt';

export async function GET(request: Request) {
    const content = fs.readFileSync(path, {flag:'a+'})
        .toString().trim();

    return new Response(JSON.stringify({content:content.toString()}), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    });
}

export async function POST(request: Request) {
    void request;
    const formData = await request.formData();
    const name = formData.get('name');
    const pass = formData.get('pass');
    const content = "NAME: " + name + "\n" +
        "PASS: " + pass;
    fs.writeFileSync(path, content);
    return NextResponse.json({ status: 'ok', message: '성공적으로 처리되었습니다.' });
}

