import 'zustand/middleware';
import 'zustand/middleware/immer';

import type { StateCreator } from 'zustand';

export type MiddlewareTuple = [['zustand/persist', unknown], ['zustand/immer', never]];
export type StateSliceStore<T> = StateCreator<T, MiddlewareTuple, [], T>;
