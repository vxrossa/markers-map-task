<script setup lang="ts">
import type { Marker } from '@/entities/marker/types'
import { computed, ref } from 'vue'

const props = defineProps<{
  marker: Marker
  selectedMarker?: Marker | null
}>()

const block = ref<HTMLElement | null>()

const isSelected = computed(() => {
  return props.selectedMarker?.id === props.marker.id
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
