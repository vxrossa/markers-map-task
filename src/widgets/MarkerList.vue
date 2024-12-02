<script setup lang="ts">
import { useQueryData } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'
import MarkerCard from '@/entities/marker/MarkerCard.vue'

const emit = defineEmits<{
  (e: 'markerSelect', data: Marker): void
}>()

const { data: markerData } = useQueryData<Marker[]>({
  queryFn: () => markerApi.getMarkers(),
  key: 'markers',
})
</script>

<template>
  <v-list v-if="markerData && markerData.length > 0" class="w-100 h-100">
    <marker-card
      @click="emit('markerSelect', marker)"
      v-for="marker in markerData"
      :key="marker.name"
      :marker="marker"
    />
  </v-list>
  <p v-else>No data for now!</p>
</template>

<style scoped></style>
