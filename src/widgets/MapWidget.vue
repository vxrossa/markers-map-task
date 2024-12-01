<script setup lang="ts">
import { useYMaps } from '@/shared/lib/ymaps'
import { ref } from 'vue'
import { geocodeLocation } from '@/shared/lib/ymaps/geocode'
import { useQueryMutation } from '@/shared/lib/useQueryData'
import { type Marker, markerApi } from '@/entities/marker'
import { useTranslation } from '@/shared/lib/i18n'
import PlusIcon from '@/shared/icons/PlusIcon.vue'

const t = useTranslation()
const { mutate: createNewMarker } = useQueryMutation<Marker[], Marker>({
  key: 'markers',
  mutationFn: (data) => markerApi.createMarker(data),
})

const ymaps = useYMaps(
  'map',
  {
    center: [44.787197, 20.457273],
    zoom: 12,
    mode: 'vector',
    controls: [],
  },
  () => {
    ymaps.addClickEvent((coords) => {
      geocodeLocation(coords).then((d) => {
        createNewMarker({
          name: d.response.GeoObjectCollection.featureMember[0].GeoObject.name,
          description: d.response.GeoObjectCollection.featureMember[0].GeoObject.description,
          lat: coords[0],
          long: coords[1],
        })
      })
    })
  },
)

const isEditMode = ref(false)
</script>

<template>
  <div class="w-100 h-100">
    <div v-if="isEditMode" class="select-notification position-absolute w-100 h-5 bg-red z-10">
      {{ t('selectMode') }}
    </div>
    <div id="map"></div>
    <v-btn
      @click="isEditMode = true"
      color="red"
      class="position-absolute bottom-0 right-0 mr-10 mb-10"
      size="50"
      variant="elevated"
      ><plus-icon
    /></v-btn>
  </div>
</template>

<style scoped>
#map {
  height: 95vh;
  width: 100%;
}

.select-notification {
  z-index: 10;
}
</style>
