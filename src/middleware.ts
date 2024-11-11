import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const url = req.nextUrl
    const { pathname } = url

    // защита от внешних запросов
    if (pathname.startsWith(`/api/`)) {
        if (!req.headers.get("referer")?.includes(process.env.APP_URL as string)) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
}