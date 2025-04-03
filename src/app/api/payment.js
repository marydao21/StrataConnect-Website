export default function handler(req) {
    const today = new Date();
    const nextPayment = new Date();
    nextPayment.setMonth(today.getMonth() + 1);
    nextPayment.setDate(1);

    return new Response(`Your next levy payment is due on ${nextPayment.toDateString()}.`, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
    });
}

export const config = {
    runtime: 'edge',
};
