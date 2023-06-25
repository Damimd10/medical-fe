import { RegisterOptions } from "react-hook-form";

import {
  Appointment,
  Doctor,
  Field,
  Patient,
  SocialInsurance,
  Speciality,
  appointmentSchema,
  doctorSchema,
  fieldSchema,
  patientSchema,
  socialInsuranceSchema,
  specialitySchema,
} from "./schemas";

type ConditionFunction = (args: unknown) => boolean;

export type ControlType =
  | "text"
  | "select"
  | "numeric"
  | "checkbox"
  | "textarea";

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  id: number;
  fieldName: string;
  inputType: string;
  defaultValue: string;
  fields?: DynamicFieldData[];
  label: string;
  options?: SelectOption[];
  config?: RegisterOptions;
  condition?: ConditionFunction;
}

export {
  appointmentSchema,
  doctorSchema,
  fieldSchema,
  patientSchema,
  socialInsuranceSchema,
  specialitySchema,
};

export type {
  Appointment,
  Doctor,
  Field,
  Patient,
  SocialInsurance,
  Speciality,
};
