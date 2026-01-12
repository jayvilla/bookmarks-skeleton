// BOOKMARKS_TODO_8: Define Bookmark and Tag TypeScript types (including tags on Bookmark).
// - Bookmark type should match the Prisma model:
//   - id: string
//   - url: string
//   - title: string
//   - notes: string | null
//   - createdAt: Date (or string if serialized)
//   - tags: Tag[] (for the many-to-many relation)
// - Tag type should match the Prisma model:
//   - id: string
//   - name: string
//   - Optional: bookmarkCount?: number (if you implement the count in the API)
