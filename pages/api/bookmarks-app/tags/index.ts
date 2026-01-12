import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | unknown>,
) {
  if (req.method === "GET") {
    // BOOKMARKS_TODO_7: Implement GET to return all tags ordered by name, along with a count of bookmarks per tag if you want an extra challenge.
    // - Use Prisma to query all tags, ordered by name.
    // - Optional challenge: Include a count of bookmarks per tag (using _count or aggregation).
    // - Return array of tags (with optional bookmarkCount field).
    res.status(501).json({ error: "Not implemented" });
    return;
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).json({ error: `Method ${req.method} not allowed` });
}
