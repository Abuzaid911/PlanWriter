import { create } from 'zustand'

export interface Form {
    question: string;
}

interface State {
    questionForm: Form|null;
    setForm: (question: Form) => void;
}

export const useStore = create<State>((set) => ({
    questionForm: null,
    setForm: (updatedForm) => set((state) => ({ questionForm: {...state.questionForm,...updatedForm}})),
  }))

   
