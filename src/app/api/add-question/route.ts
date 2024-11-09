import {NextRequest, NextResponse} from "next/server";
import {cmsBearerAxios} from "@/configs/axios";

// To handle a POST request to /api
export async function POST(request: NextRequest) {
    const data = await request.json()
    try {
        const result = await cmsBearerAxios.post('/api/questions/', data)
        return NextResponse.json(result.data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}