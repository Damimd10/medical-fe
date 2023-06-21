import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient, router } from "~/config";

const Providers = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export { Providers };
