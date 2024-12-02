<script setup lang="ts">
import type { Marker } from '@/entities/marker/types'
import { computed, ref } from 'vue'

const props = defineProps<{
  marker: Marker
  selectedMarker?: [number, number] | null
}>()

const block = ref<HTMLElement | null>()

const isSelected = computed(() => {
  if (!props.selectedMarker) return false

  return (
    props.marker.lat.toFixed(4) === props.selectedMarker[0].toFixed(4) ||
    props.marker.long.toFixed(4) === props.selectedMarker[1].toFixed(4)
  )
})
</script>

<template>
  <v-card
    ref="block"
    :title="marker.name"
    :color="isSelected ? 'red' : undefined"
    variant="elevated"
    >{{ marker.description }}</v-card
  >
</template>

<style scoped></style>
