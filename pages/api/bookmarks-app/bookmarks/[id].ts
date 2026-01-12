import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | unknown>,
) {
  const { id } = req.query;

  if (typeof id !== "string") {
    res.status(400).json({ error: "Invalid bookmark ID" });
    return;
  }

  if (req.method === "GET") {
    // BOOKMARKS_TODO_4: Implement GET to return a single bookmark with its tags.
    // - Use Prisma to find the bookmark by id.
    // - Include tags relation.
    // - Return 404 if not found, otherwise return the bookmark.
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  if (req.method === "PATCH") {
    // BOOKMARKS_TODO_5: Implement PATCH to update bookmark fields and tags.
    // - Extract from body: url, title, notes, tags (array of tag names).
    // - Update the bookmark fields.
    // - Handle tag updates:
    //   - Disconnect tags that are no longer in the list.
    //   - Connect/create tags that are new.
    // - Return the updated bookmark with its tags.
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  if (req.method === "DELETE") {
    // BOOKMARKS_TODO_6: Implement DELETE to remove a bookmark.
    // - Use Prisma to delete the bookmark by id.
    // - Prisma should handle cascade deletion of relations if configured.
    // - Return 404 if not found, otherwise return success.
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
  res.status(405).json({ error: `Method ${req.method} not allowed` });
}
