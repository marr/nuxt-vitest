import { setActivePinia, createPinia } from 'pinia';
import { describe, it, beforeEach, expect } from 'vitest'
import { useStore } from '~/stores/index';

describe('pinia stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('patches changes', () => {
    const store = useStore();
    expect(store.hello).toBe('hi vitest');
    store.$patch({ hello: 'hi nuxt' })
    expect(store.hello).toBe('hi nuxt');
  })
})