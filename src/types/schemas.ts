import { z } from "zod";

export const doctorSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
});

export const specialitySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const fieldSchema = z.object({
  id: z.number(),
  field_id: z.string().nullable(),
  input_type: z.string().nullable(),
  label: z.string().nullable(),
  default_value: z.string().nullable(),
  alternative_name: z.array(z.string()),
  full_name: z.string().nullable(),
  right_label: z.string().nullable(),
});

export const appointmentSchema = z.object({
  id: z.number(),
  date: z.string(),
  doctor: z.optional(doctorSchema),
  speciality: z.optional(specialitySchema),
  appointment_fields: z.optional(
    z.array(z.object({ field: fieldSchema, value: z.string() }))
  ),
});

export const socialInsuranceSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const patientSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
  social_insurance_number: z.string().nullable(),
  birth_date: z.string().nullable(),
  phone_number: z.string().nullable(),
  is_alive: z.boolean(),
  email: z.string().nullable(),
  country: z.string().nullable(),
  city: z.string().nullable(),
  street: z.string().nullable(),
  created_by_id: z.number(),
  social_insurance_id: z.number().nullable(),
  social_insurance: z.optional(socialInsuranceSchema),
  appointments: z.optional(z.array(appointmentSchema)),
});

export type Appointment = z.infer<typeof appointmentSchema>;
export type Doctor = z.infer<typeof doctorSchema>;
export type Field = z.infer<typeof fieldSchema>;
export type Patient = z.infer<typeof patientSchema>;
export type SocialInsurance = z.infer<typeof socialInsuranceSchema>;
export type Speciality = z.infer<typeof specialitySchema>;
