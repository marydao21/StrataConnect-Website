export default function handler(req) {
    const requests = [
        { id: 1, issue: "Leaking roof", status: "Pending" },
        { id: 2, issue: "Broken elevator", status: "In Progress" },
        { id: 3, issue: "Parking gate malfunction", status: "Resolved" },
    ];

    return new Response(JSON.stringify(requests), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}

export const config = {
    runtime: 'edge',
};
