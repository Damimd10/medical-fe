import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppointmentState {
  selectedTemplates: number[];
  updateSelectedTemplates: (id: number) => void;
}

const useAppointmentStore = create<AppointmentState>()(
  devtools(
    persist(
      (set, get) => ({
        selectedTemplates: [],
        updateSelectedTemplates: (id) => {
          const templates = get().selectedTemplates;

          if (templates.includes(id)) {
            return set({
              selectedTemplates: templates.filter(
                (template) => template !== id
              ),
            });
          }

          return set({
            selectedTemplates: [...templates, id],
          });
        },
      }),
      {
        name: "appointment-storage",
      }
    )
  )
);

export default useAppointmentStore;
