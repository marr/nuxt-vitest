<template>
  <LazySomeComponent />
  <GlobalComponent />
  <NuxtPage />
  <NuxtLink to="/test">
    Test link
  </NuxtLink>
  <p class="pinia">{{ store.hello }}</p>
</template>

<script setup>
const store = useStore();
await new Promise(resolve => setTimeout(resolve, 1))
useHead({
  title: 'My App'
})
</script>
