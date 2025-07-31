import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSleepCalculationSchema, insertSleepTipSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Sleep calculation routes
  app.post("/api/sleep-calculations", async (req, res) => {
    try {
      const calculation = insertSleepCalculationSchema.parse(req.body);
      const savedCalculation = await storage.saveSleepCalculation(calculation);
      res.json(savedCalculation);
    } catch (error) {
      console.error("Error saving sleep calculation:", error);
      res.status(400).json({ error: "Invalid calculation data" });
    }
  });

  app.get("/api/sleep-calculations/recent", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      const calculations = await storage.getRecentSleepCalculations(limit);
      res.json(calculations);
    } catch (error) {
      console.error("Error fetching recent calculations:", error);
      res.status(500).json({ error: "Failed to fetch calculations" });
    }
  });

  // Sleep tips routes
  app.get("/api/sleep-tips", async (req, res) => {
    try {
      const category = req.query.category as string;
      const tips = category 
        ? await storage.getSleepTipsByCategory(category)
        : await storage.getAllSleepTips();
      res.json(tips);
    } catch (error) {
      console.error("Error fetching sleep tips:", error);
      res.status(500).json({ error: "Failed to fetch sleep tips" });
    }
  });

  app.post("/api/sleep-tips", async (req, res) => {
    try {
      const tip = insertSleepTipSchema.parse(req.body);
      const savedTip = await storage.createSleepTip(tip);
      res.json(savedTip);
    } catch (error) {
      console.error("Error creating sleep tip:", error);
      res.status(400).json({ error: "Invalid tip data" });
    }
  });

  // Initialize default sleep tips if none exist
  app.post("/api/initialize-data", async (req, res) => {
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
  });

  const httpServer = createServer(app);

  return httpServer;
}
