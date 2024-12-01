<script setup lang="ts">
import { useQueryData } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'

const { data: markerData } = useQueryData<Marker[]>({
  queryFn: () => markerApi.getMarkers(),
  key: 'markers',
})
</script>

<template>
  <v-list class="w-100 h-100" v-for="marker in markerData" :key="marker.id">
    <v-list-item>{{ marker.name }}</v-list-item>
  </v-list>
</template>

<style scoped></style>
