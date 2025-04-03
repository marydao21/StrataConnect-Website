import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log("Cron job executed at", new Date().toISOString());

    // Perform your scheduled task here
    // Example: Send an email, clean the database, etc.

    return NextResponse.json({ message: "Cron job executed successfully!" });
}
