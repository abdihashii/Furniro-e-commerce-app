import { atomWithStorage } from 'jotai/utils';
import type { IProduct } from '@/types';

// Create a cart atom
export const cartAtom = atomWithStorage<IProduct[]>('cart', []);
