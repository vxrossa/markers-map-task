<script setup lang="ts">
import type { Marker } from '@/entities/marker/types'

defineProps<{
  marker: Marker
}>()
</script>

<template>
  <v-card :title="marker.name" variant="elevated">{{ marker.description }}</v-card>
</template>

<style scoped></style>
