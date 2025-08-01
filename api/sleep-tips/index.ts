import { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../_lib/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const tips = await storage.getAllSleepTips();
      res.json(tips);
    } catch (error) {
      console.error("Error fetching sleep tips:", error);
      res.status(500).json({ error: "Failed to fetch sleep tips" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}