import { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../_lib/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      const calculations = await storage.getRecentSleepCalculations(limit);
      res.json(calculations);
    } catch (error) {
      console.error("Error fetching recent calculations:", error);
      res.status(500).json({ error: "Failed to fetch calculations" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}