<script setup lang="ts">
import { useYMaps } from '@/shared/lib/useYMaps'

useYMaps('map', {
  center: [44.787197, 20.457273],
  zoom: 12,
  mode: 'vector',
  controls: [],
})
</script>

<template>
  <div id="map" class="w-screen h-screen"></div>
</template>

<style scoped></style>
