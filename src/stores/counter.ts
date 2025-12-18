import type { StateSliceStore } from '@/types/zustand';

export interface CounterSlice {
	counter: {
		counter: number;
		increase: () => void;
		decrease: () => void;
		setCounter: (counter: number) => void;
	};
}

export const counterSlice: StateSliceStore<CounterSlice> = (set) => ({
	counter: {
		counter: 0,
		increase: () =>
			set((state) => {
				state.counter.counter += 1;
			}),
		decrease: () =>
			set((state) => {
				state.counter.counter -= 1;
			}),
		setCounter: (counter: number) =>
			set((state) => {
				state.counter.counter = counter;
			}),
	},
});
