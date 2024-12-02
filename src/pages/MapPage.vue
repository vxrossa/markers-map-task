<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkerList from '@/widgets/MarkerList.vue'
import { useQueryData, useQueryMutation } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'
import { useOpenLayersMap } from '@/shared/lib/ol'
import { geocodeLocation } from '@/shared/lib/ymaps'
import { useTranslation } from '@/shared/lib/i18n'
import ToggleEditButton from '@/features/toggle-edit/ToggleEditButton.vue'

const isEditMode = ref(false)
const markersInitialized = ref(false)
const selectedMarker = ref<Marker | null>(null)
const t = useTranslation()
const router = useRouter()
const route = useRoute()

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
          description:
            d.response.GeoObjectCollection.featureMember[1].GeoObject.metaDataProperty
              .GeocoderMetaData.text,
        })
        addMarker([coords[1], coords[0]])
        isEditMode.value = false
      })
    }
  },
  onMarkerClick: (coords) => {
    if (coords) {
      const currentMarker = markerData.value.find((m) => {
        return (
          m.lat.toFixed(4) === coords[0].toFixed(4) || m.long.toFixed(4) === coords[0].toFixed(4)
        )
      })

      selectedMarker.value = currentMarker
    } else {
      selectedMarker.value = null
    }
  },
})

const onMarkerSelect = (data: Marker) => {
  centerOn([data.long, data.lat])
  selectedMarkerId.value = data.id
}

watch(markerData, () => {
  if (markersInitialized.value) return

  if (markerData.value?.length) {
    markerData.value.forEach((marker) => {
      addMarker([marker.long, marker.lat])
    })
    if (route.query.markerId) {
      selectedMarker.value = markerData.value.find((m) => m.id === route.query.markerId)
    }
    markersInitialized.value = true
  }
})

watch(selectedMarker, () => {
  router.push({
    path: '/map',
    query: { markerId: selectedMarker?.value ? selectedMarker.value.id : '' },
  })
})
</script>

<template>
  <div class="w-100 d-flex h-auto">
    <div class="markers-list w-25">
      <marker-list :selected-marker="selectedMarker" @marker-select="onMarkerSelect" />
    </div>
    <div class="w-75 h-100">
      <div class="w-100 h-100">
        <div
          v-if="isEditMode"
          class="select-notification position-absolute p-2 w-100 h-5 bg-red z-10"
        >
          <p class="text-center w-75">
            {{ t('selectMode') }}
          </p>
        </div>
        <div id="map"></div>
        <toggle-edit-button :is-edit-mode="isEditMode" @toggle-edit="isEditMode = !isEditMode" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.markers-list {
  height: 95vh;
  overflow: scroll;
}

#map {
  height: 95vh;
  width: 100%;
}

.select-notification {
  z-index: 10;
}
</style>
