<script setup lang="ts">
import { useQueryData, useQueryMutation } from '@/shared/lib/useQueryData'
import { markerApi } from '@/entities/marker/api'

const { data } = useQueryData({
  queryFn: () => markerApi.getMarkers(),
  key: 'markers',
})

const { mutate } = useQueryMutation({
  mutationFn: () => markerApi.createMarker({ name: 'test', description: '', lat: 0, long: 0 }),
  key: 'markers',
})

console.log(data)
</script>

<template>
  <button @click="mutate">create</button>
</template>

<style scoped></style>
