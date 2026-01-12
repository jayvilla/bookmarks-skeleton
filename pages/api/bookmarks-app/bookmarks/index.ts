import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | unknown>,
) {
  if (req.method === "GET") {
    // BOOKMARKS_TODO_2: Implement GET to list bookmarks, supporting ?q= text search and ?tag= filtering.
    // - Extract query params: q (text search) and tag (filter by tag name).
    // - Use Prisma to query bookmarks with:
    //   - Text search on title/notes/url if q is provided.
    //   - Filter by tag if tag is provided.
    //   - Include tags relation.
    // - Return array of bookmarks with their tags.
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  if (req.method === "POST") {
    // BOOKMARKS_TODO_3: Implement POST to create a new bookmark and connect/create tags.
    // - Extract from body: url, title, notes (optional), tags (array of tag names or IDs).
    // - Create the bookmark.
    // - For each tag name:
    //   - Find existing tag by name, or create if it doesn't exist.
    //   - Connect the bookmark to the tag.
    // - Return the created bookmark with its tags.
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: `Method ${req.method} not allowed` });
}
