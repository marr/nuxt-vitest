export const useStore = definePiniaStore('test', () => {
  return {
    hello: ref('hi vitest')
  }
});