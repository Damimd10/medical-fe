import { useQuery } from "@tanstack/react-query";
import { getTemplates } from "~/api/templates";

const useTemplates = () => {
  const query = useQuery({
    queryFn: getTemplates,
    queryKey: ["templates"],
  });

  return query;
};

export default useTemplates;
