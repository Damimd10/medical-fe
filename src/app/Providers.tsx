import { PropsWithChildren } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/config";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { Providers };
