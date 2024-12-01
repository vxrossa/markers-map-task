import { onMounted, ref } from 'vue'

export const useYMaps = (id: string, props: ymaps.YMapProps, onInit?: () => void) => {
  const mapRef = ref<ymaps.YMap>(null)

  const initializeMap = async () => {
    const map = new ymaps.Map(document.getElementById(id), props)

    map.events.add('click', (e) => {
      console.log(e)
    })

    mapRef.value = map

    onInit?.()
  }

  const addClickEvent = (cb: (coordinates: [number, number]) => void) => {
    mapRef.value.events.add('click', (e) => {
      const coords = e.get('coords')

      cb(coords)
    })
  }

  onMounted(() => {
    setTimeout(() => {
      ymaps.ready(initializeMap)
    }, 2000)
  })

  return {
    mapRef,
    addClickEvent,
  }
}
