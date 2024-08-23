import { create } from 'zustand';
import { ListUpdate } from './interfaces';

const useListUpdateStore = create<ListUpdate>((set) => ({
    triggerUpdate: () => { },
    setTriggerUpdate: (callback: (id: number) => void) => set({ triggerUpdate: callback }),
}));

export default useListUpdateStore;