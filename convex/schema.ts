import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  guestbook: defineTable({
    userId: v.string(),
    username: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
});
