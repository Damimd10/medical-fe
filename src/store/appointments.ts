import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppointmentState {
  prefilledTemplates: number[];
  resetPrefilledTemplates: () => void;
  resetSelectedTemplates: () => void;
  selectedTemplates: number[];
  updatePrefilledTemplates: (id: number) => void;
  updateSelectedTemplates: (id: number) => void;
}

const useAppointmentStore = create<AppointmentState>()(
  devtools((set, get) => ({
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
);

export default useAppointmentStore;
