import { create } from "zustand";

interface State {
  activeId: number;
  setActiveId: (activeId: number) => void;
  isManualScroll: boolean;
  setIsManualScroll: (value: boolean) => void;
}

export const useCategoryStore = create<State>((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
  isManualScroll: false,
  setIsManualScroll: (value) => set({ isManualScroll: value }),
}));
