import { onMounted, ref } from 'vue'

export const useYMaps = (id: string, props: ymaps.YMapProps) => {
  const mapRef = ref<ymaps.YMap>(null)

  const initializeMap = async () => {
    const map = new ymaps.Map(document.getElementById(id), props)
    mapRef.value = map
  }

  onMounted(() => {
    ymaps.ready(initializeMap)
  })

  return {
    mapRef,
  }
}
