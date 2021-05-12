import useSWR from "swr";

export function useSuperHeros() {
  const { data, error } = useSWR(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
  );

  return {
    heros: data,
    isLoading: !error && !data,
    isError: error,
  };
}
