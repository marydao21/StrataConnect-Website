import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
    try {
        const { db } = await connectToDatabase();
        const owners = await db.collection('owners').find().toArray();

        // Assuming you calculate the levy based on unit entitlement
        const levyNotices = owners.map((owner) => {
            const levyAmount = owner.unitEntitlement * 100; // Example calculation
            return {
                ownerName: owner.name,
                unit: owner.unit,
                levyAmount,
                dueDate: new Date(),
            };
        });

        res.status(200).json({ levyNotices });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate levy notices' });
    }
}
