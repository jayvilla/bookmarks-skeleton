/**
 * Bookmarks / Reading List Mini-App
 *
 * Practice Areas:
 * - Many-to-many modeling: Bookmark ↔ Tag relationships in Prisma
 * - Search/filter: Text search (q) and tag-based filtering
 * - SWR with query params: Dynamic API calls based on search/filter state
 * - Debouncing: Optimize search input to avoid excessive API calls
 *
 * This skeleton provides the structure; implement the TODOs to complete the app.
 */

import { useState } from "react";
import { useBookmarks } from "@/lib/bookmarks-app/useBookmarks";
import { useTags } from "@/lib/bookmarks-app/useTags";

export default function BookmarksApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>();
  const [newBookmarkUrl, setNewBookmarkUrl] = useState("");
  const [newBookmarkTitle, setNewBookmarkTitle] = useState("");
  const [newBookmarkTags, setNewBookmarkTags] = useState("");

  // BOOKMARKS_TODO_10: Wire the search input to update SWR query params with debouncing.
  // - Use a debounce hook (e.g., use-debounce library or custom hook) to delay the search query update.
  // - Pass the debounced searchQuery to useBookmarks instead of using it directly.
  // - This prevents making an API call on every keystroke.

  const { data: bookmarks, error: bookmarksError, isLoading: bookmarksLoading } =
    useBookmarks({
      q: searchQuery || undefined,
      tag: selectedTag,
    });

  const { data: tags, error: tagsError, isLoading: tagsLoading } = useTags();

  const handleSubmitNewBookmark = async (e: React.FormEvent) => {
    e.preventDefault();
    // BOOKMARKS_TODO_12: Implement the "New Bookmark" form submission to call POST /bookmarks and revalidate the list.
    // - Parse newBookmarkTags (comma-separated string) into an array of tag names.
    // - POST to /api/bookmarks-app/bookmarks with { url, title, notes: "", tags: [...] }.
    // - On success, call mutate() from useBookmarks to revalidate the list.
    // - Reset the form fields.
    // - Handle errors (show a message or toast).
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
          Bookmarks / Reading List
        </h1>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50"
          />
        </div>

        {/* Tag Filters */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2 text-black dark:text-zinc-50">
            Filter by Tag
          </h2>
          {/* BOOKMARKS_TODO_11: Render clickable tag pills that filter bookmarks when selected.
              - Map over tags data to render tag pills.
              - Highlight the selected tag (selectedTag state).
              - On click, set selectedTag to the tag name (or undefined to clear).
              - Show a "Clear filter" option when a tag is selected.
              - Handle loading and error states for tags. */}
          <div className="flex flex-wrap gap-2">
            {tagsLoading && <p className="text-zinc-600 dark:text-zinc-400">Loading tags...</p>}
            {tagsError && (
              <p className="text-red-600 dark:text-red-400">Error loading tags</p>
            )}
            {/* TODO: Render tags here */}
          </div>
        </div>

        {/* Bookmarks List */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 text-black dark:text-zinc-50">
            Bookmarks
          </h2>
          {/* BOOKMARKS_TODO_13: Add a basic empty state when no bookmarks match the current filters.
              - Check if bookmarks is an empty array (and not loading/error).
              - Show a message like "No bookmarks found" or "No bookmarks match your filters". */}
          {/* BOOKMARKS_TODO_14: Add basic error + loading states for bookmarks and tags.
              - Show loading spinner/message when bookmarksLoading is true.
              - Show error message when bookmarksError exists.
              - Only render the bookmarks list when data is available and not loading. */}
          {bookmarksLoading && (
            <p className="text-zinc-600 dark:text-zinc-400">Loading bookmarks...</p>
          )}
          {bookmarksError && (
            <p className="text-red-600 dark:text-red-400">Error loading bookmarks</p>
          )}
          {bookmarks && Array.isArray(bookmarks) && bookmarks.length > 0 && (
            <div className="space-y-4">
              {bookmarks.map((bookmark: any) => (
                <div
                  key={bookmark.id}
                  className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900"
                >
                  <h3 className="font-semibold text-black dark:text-zinc-50">
                    {bookmark.title || "Untitled"}
                  </h3>
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {bookmark.url}
                  </a>
                  {bookmark.notes && (
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                      {bookmark.notes}
                    </p>
                  )}
                  {bookmark.tags && Array.isArray(bookmark.tags) && bookmark.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {bookmark.tags.map((tag: any) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* New Bookmark Form */}
        <div className="border-t border-zinc-300 dark:border-zinc-700 pt-6">
          <h2 className="text-lg font-medium mb-4 text-black dark:text-zinc-50">
            Add New Bookmark
          </h2>
          <form onSubmit={handleSubmitNewBookmark} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black dark:text-zinc-50">
                URL
              </label>
              <input
                type="url"
                value={newBookmarkUrl}
                onChange={(e) => setNewBookmarkUrl(e.target.value)}
                required
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black dark:text-zinc-50">
                Title
              </label>
              <input
                type="text"
                value={newBookmarkTitle}
                onChange={(e) => setNewBookmarkTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black dark:text-zinc-50">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={newBookmarkTags}
                onChange={(e) => setNewBookmarkTags(e.target.value)}
                placeholder="e.g., react, nextjs, tutorial"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Add Bookmark
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
