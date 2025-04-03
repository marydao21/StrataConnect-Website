import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // Secure the cron job with an Authorization header
    const authHeader = req.headers.get("Authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Cron job executed at", new Date().toISOString());

    // Perform the scheduled task here
    
    return NextResponse.json({ message: "Cron job executed successfully!" });
}
