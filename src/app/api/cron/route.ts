import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // Get the Authorization header
    const authHeader = req.headers.get("Authorization");

    // Check if it matches the secret stored in environment variables
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Cron job executed at", new Date().toISOString());

    // Your scheduled task logic here
    return NextResponse.json({ message: "Cron job executed successfully!" });
}
