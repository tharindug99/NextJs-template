import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/data';

export async function GET(req: NextRequest) {
    try {
        const posts = getPosts();
        return NextResponse.json({ message: "GET request received", posts},{status:200});
    } catch (error) {
        console.error("Error handling GET request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        console.log("POST request to /api/blogs");
        return NextResponse.json({ message: "POST request received" });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
