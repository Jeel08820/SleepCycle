import { VercelRequest, VercelResponse } from "@vercel/node";
import { insertSleepCalculationSchema } from "../../shared/schema";
import { storage } from "../_lib/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const calculation = insertSleepCalculationSchema.parse(req.body);
      const savedCalculation = await storage.saveSleepCalculation(calculation);
      res.json(savedCalculation);
    } catch (error) {
      console.error("Error saving sleep calculation:", error);
      res.status(400).json({ error: "Invalid calculation data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}