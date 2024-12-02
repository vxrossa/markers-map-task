<script setup lang="ts">
import { useQueryData } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'
import MarkerCard from '@/entities/marker/MarkerCard.vue'
import { useTranslation } from '@/shared/lib/i18n'

const emit = defineEmits<{
  (e: 'markerSelect', data: Marker): void
}>()

defineProps<{
  selectedMarker: Marker | null
}>()

const { data: markerData } = useQueryData<Marker[]>({
  queryFn: () => markerApi.getMarkers(),
  key: 'markers',
})

const t = useTranslation()
</script>

<template>
  <v-list v-if="markerData && markerData.length > 0" class="w-100 h-100">
    <v-list-item :key="marker.name" v-for="marker in markerData">
      <marker-card
        :selected-marker="selectedMarker"
        @click="emit('markerSelect', marker)"
        :marker="marker"
      />
    </v-list-item>
  </v-list>
  <p class="text-md mt-10 text-center" v-else>{{ t('noData') }}</p>
</template>

<style scoped></style>
