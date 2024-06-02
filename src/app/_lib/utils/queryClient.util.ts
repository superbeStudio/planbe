import { DefaultOptions, QueryCache } from "@tanstack/react-query";

export const queryCache = new QueryCache();

export const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};
