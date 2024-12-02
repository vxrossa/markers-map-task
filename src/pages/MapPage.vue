<script setup lang="ts">
import MapWidget from '@/widgets/MapWidget.vue'
import MarkerList from '@/widgets/MarkerList.vue'
import { useQueryData, useQueryMutation } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'
import { useOpenLayersMap } from '@/shared/lib/ol/useOpenLayersMap'
import { geocodeLocation } from '@/shared/lib/ymaps'
import { ref, watch } from 'vue'

const isEditMode = ref(false)
const markersInitialized = ref(false)

const { data: markerData } = useQueryData<Marker[]>({
  key: 'markers',
  queryFn: () => markerApi.getMarkers(),
})

const { mutate: createNewMarker } = useQueryMutation<Marker[], Marker>({
  key: 'markers',
  mutationFn: (data) => markerApi.createMarker(data),
})

const { addMarker, centerOn } = useOpenLayersMap({
  onMapClick: (coords) => {
    if (isEditMode.value) {
      geocodeLocation(coords).then((d) => {
        createNewMarker({
          lat: coords[0],
          long: coords[1],
          name: d.response.GeoObjectCollection.featureMember[0].GeoObject.name,
          description: d.response.GeoObjectCollection.featureMember[1].GeoObject.description,
        })
        addMarker([coords[1], coords[0]])
        isEditMode.value = false
      })
    }
  },
})

const onMarkerSelect = (data: Marker) => {
  centerOn([data.long, data.lat])
}

watch(markerData, () => {
  if (markersInitialized.value) return

  if (markerData.value?.length) {
    markerData.value.forEach((marker) => {
      addMarker([marker.long, marker.lat])
    })
    markersInitialized.value = true
  }
})
</script>

<template>
  <div class="w-100 d-flex h-auto">
    <div class="w-25 h-100">
      <marker-list @marker-select="onMarkerSelect" />
    </div>
    <div class="w-75 h-100">
      <map-widget @toggle-edit="isEditMode = !isEditMode" :is-edit-mode="isEditMode" />
    </div>
  </div>
</template>
