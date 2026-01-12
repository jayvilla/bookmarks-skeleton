import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTags() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/bookmarks-app/tags",
    fetcher,
  );

  // BOOKMARKS_TODO_9b: Strongly type the SWR data result using the Tag type once it's defined.
  // - Import the Tag type from types.ts.
  // - Type the data as Tag[] | undefined.
  // - Consider creating a response type if your API returns { tags: Tag[] }.

  return {
    // data: data as Tag[] | undefined,
    data,
    error,
    isLoading,
    mutate,
  };
}
