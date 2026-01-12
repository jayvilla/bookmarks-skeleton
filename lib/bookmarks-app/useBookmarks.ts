import useSWR from "swr";

type UseBookmarksParams = {
  q?: string;
  tag?: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBookmarks(params?: UseBookmarksParams) {
  const searchParams = new URLSearchParams();
  if (params?.q) {
    searchParams.set("q", params.q);
  }
  if (params?.tag) {
    searchParams.set("tag", params.tag);
  }

  const queryString = searchParams.toString();
  const url = `/api/bookmarks-app/bookmarks${queryString ? `?${queryString}` : ""}`;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  // BOOKMARKS_TODO_9: Strongly type the SWR data result using the Bookmark type once it's defined.
  // - Import the Bookmark type from types.ts.
  // - Type the data as Bookmark[] | undefined.
  // - Consider creating a response type that wraps the array if your API returns { bookmarks: Bookmark[] }.

  return {
    // data: data as Bookmark[] | undefined,
    data,
    error,
    isLoading,
    mutate,
  };
}
