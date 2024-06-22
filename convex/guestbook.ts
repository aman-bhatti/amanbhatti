import { mutation, query } from "../convex/_generated/server";
import { v } from "convex/values";

// Define the mutation to add a message to the guestbook
export const addMessage = mutation({
  args: {
    userId: v.string(), // Add userId to the arguments
    username: v.string(),
    message: v.string(),
  },
  handler: async ({ db }, { userId, username, message }) => {
    const createdAt = Date.now();
    await db.insert("guestbook", {
      userId,
      username,
      message,
      createdAt,
    });
  },
});

export const getMessages = query(async ({ db }) => {
  return await db.query("guestbook").order("desc").collect(); // Ensure messages are ordered by creation time
});
