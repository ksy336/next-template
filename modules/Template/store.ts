import {create} from "zustand";

export interface Store {
    item: {
        title: string
        text: string
    }
}

export const useTemplateStore = create<Store>((set) => ({
    item: {
        title: 'hello',
        text: 'world'
    }
}));