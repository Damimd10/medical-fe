import { z } from "zod";
import { api } from "~/config";

const templateSchema = z.object({
  id: z.number(),
  name: z.string(),
  template_type: z.string(),
  alternative_name: z.array(z.string()),
  specialization_id: z.number(),
  fields_on_templates: z.array(
    z.object({
      template_id: z.number(),
      field_id: z.number(),
      field: z.object({
        id: z.number(),
        field_id: z.string(),
        input_type: z.string(),
        label: z.string(),
        default_value: z.string().nullable(),
        alternative_name: z.array(z.string()),
        full_name: z.string(),
        right_label: z.string().nullable(),
      }),
    })
  ),
});

export type Template = z.infer<typeof templateSchema>;

export const getTemplates = async (): Promise<Template[]> => {
  const response = await api.get("/templates");

  return response.data.map((template: Template) =>
    templateSchema.parse(template)
  );
};
