import { z } from "zod";
import { api } from "~/config";

const templateSchema = z.object({
  id: z.number(),
  name: z.string(),
  template_type: z.string(),
  alternative_name: z.array(z.string()),
  specialization_id: z.number(),
});

export type Template = z.infer<typeof templateSchema>;

export const getTemplates = async (): Promise<Template[]> => {
  const response = await api.get("/templates");

  return response.data.map((template: Template) =>
    templateSchema.parse(template)
  );
};
