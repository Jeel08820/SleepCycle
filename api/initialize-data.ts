import { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "./_lib/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const existingTips = await storage.getAllSleepTips();
      if (existingTips.length === 0) {
        const defaultTips = [
          {
            title: "Optimal Sleep Duration",
            description: "Most adults need 5-6 complete cycles (7.5-9 hours) for optimal rest and recovery.",
            category: "duration"
          },
          {
            title: "Consistent Sleep Schedule",
            description: "Going to bed and waking up at the same time daily helps regulate your natural sleep-wake cycle.",
            category: "schedule"
          },
          {
            title: "Cool Sleep Environment",
            description: "Keep your bedroom between 60-67°F (15-19°C) for optimal sleep quality.",
            category: "environment"
          },
          {
            title: "Dark Room",
            description: "Use blackout curtains or an eye mask to block out light, which can interfere with melatonin production.",
            category: "environment"
          },
          {
            title: "Avoid Screens Before Bed",
            description: "Blue light from devices can suppress melatonin. Avoid screens 1-2 hours before bedtime.",
            category: "habits"
          },
          {
            title: "Morning Light Exposure",
            description: "Get natural sunlight within 30 minutes of waking to help regulate your circadian rhythm.",
            category: "habits"
          }
        ];

        for (const tip of defaultTips) {
          await storage.createSleepTip({ ...tip, isActive: true });
        }
        
        res.json({ message: "Default sleep tips initialized", count: defaultTips.length });
      } else {
        res.json({ message: "Sleep tips already exist", count: existingTips.length });
      }
    } catch (error) {
      console.error("Error initializing data:", error);
      res.status(500).json({ error: "Failed to initialize data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}