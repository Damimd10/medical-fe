import type { TemporalState } from "zundo";
import { temporal } from "zundo";
import { create, useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { Field } from "~/types";

interface AppointmentState {
  customFields: Field[];
  removedFields: number[];
  setRemovedFields: (fields: number) => void;
  prefilledTemplates: number[];
  resetPrefilledTemplates: () => void;
  resetSelectedTemplates: () => void;
  selectedTemplates: number[];
  updatePrefilledTemplates: (id: number) => void;
  updateSelectedTemplates: (id: number) => void;
}

const useAppointmentStore = create<AppointmentState>()(
  devtools(
    temporal((set, get) => ({
      customFields: [],
      setCustomFields: (fields: Field[]) => set({ customFields: fields }),
      removedFields: [],
      setRemovedFields: (fieldId) =>
        set({ removedFields: [...get().removedFields, fieldId] }),
      prefilledTemplates: [],
      resetSelectedTemplates: () => set({ selectedTemplates: [] }),
      resetPrefilledTemplates: () => set({ prefilledTemplates: [] }),
      selectedTemplates: [],
      updatePrefilledTemplates: (id) => {
        const templates = get().prefilledTemplates;

        if (templates.includes(id)) {
          return set({
            prefilledTemplates: templates.filter((template) => template !== id),
          });
        }

        return set({
          prefilledTemplates: [...templates, id],
        });
      },
      updateSelectedTemplates: (id) => {
        const templates = get().selectedTemplates;

        if (templates.includes(id)) {
          return set({
            selectedTemplates: templates.filter((template) => template !== id),
          });
        }

        return set({
          selectedTemplates: [...templates, id],
        });
      },
    }))
  )
);

export const useTemporalStore = <T>(
  selector: (state: TemporalState<AppointmentState>) => T,
  equality?: (a: T, b: T) => boolean
) => useStore(useAppointmentStore.temporal, selector, equality);

export default useAppointmentStore;
