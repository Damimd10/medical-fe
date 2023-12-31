import { QueryCache, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 3,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  }),
});

export default queryClient;
