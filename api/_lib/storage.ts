// Shared storage instance for API routes
import { InMemoryStorage } from "../../server/storage";

// Create a singleton storage instance
export const storage = new InMemoryStorage();