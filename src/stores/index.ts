import type { MiddlewareTuple } from '@/types/zustand';
import { encryptedStorage } from '@/utils/storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { counterSlice, type CounterSlice } from './counter';

type SliceStates = CounterSlice;

export const store = create<SliceStates, MiddlewareTuple>(
	persist(
		immer((...args) => ({
			...counterSlice(...args),
		})),
		{
			name: 'app-store',
			storage: createJSONStorage(() => encryptedStorage),
			partialize: () => ({}),
		},
	),
);
