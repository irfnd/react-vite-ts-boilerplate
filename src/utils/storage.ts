import SecureLS from 'secure-ls';
import type { StateStorage } from 'zustand/middleware';

const ls = new SecureLS({ encodingType: 'aes', encryptionSecret: 'THISISSECRET123@' });

export const encryptedStorage: StateStorage = {
	getItem: (name) => (ls.get(name) ? JSON.stringify(ls.get(name)) : null),
	setItem: (name, value) => ls.set(name, JSON.parse(value)),
	removeItem: (name) => ls.remove(name),
};
