import { onMounted, reactive } from 'vue'
import { fromLonLat, Projection, toLonLat, transform } from 'ol/proj'
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Vector as VectorLayer } from 'ol/layer'
import { Select } from 'ol/interaction'
import { Icon, Style } from 'ol/style'
import { Feature } from 'ol'
import { Point } from 'ol/geom'

interface UseOpenLayersOpts {
  initialData?: [number, number][]
  onMarkerClick?: (coords: [number, number]) => void
  onMapClick?: (coords: [number, number]) => void
}

export const useOpenLayersMap = (opts?: UseOpenLayersOpts) => {
  const mapSettings = reactive({
    view: null,
    map: null,
    projection: null,
    vectorSource: null,
    vectorLayer: null,
    select: null,
    markerStyle: null,
  })

  onMounted(() => {
    const projection = new Projection({
      code: 'EPSG:3857',
      units: 'm',
    })
    const view = new View({
      center: fromLonLat([20.457273, 44.787197]),
      zoom: 12,
      projection,
    })
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view,
    })

    const vectorSource = new VectorSource()
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    })

    map.addLayer(vectorLayer)

    const select = new Select()
    map.addInteraction(select)

    select.on('select', (e) => {
      if (e.selected.length > 0) {
        const coords = toLonLat(e.selected[0].getGeometry().getCoordinates()).reverse()
        opts?.onMarkerClick(coords)
      }
    })

    map.on('click', (e) => {
      const transformedCoordinates = transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')
      opts?.onMapClick(transformedCoordinates.reverse())
    })

    mapSettings.map = map
    mapSettings.view = view
    mapSettings.projection = projection
    mapSettings.vectorLayer = vectorLayer
    mapSettings.vectorSource = vectorSource
  })

  const addMarker = (coords: [number, number]) => {
    const marker = new Feature({
      geometry: new Point(fromLonLat(coords)),
    })

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/public/map-marker-512.webp',
        scale: 0.1,
      }),
    })

    marker.setStyle(markerStyle)
    mapSettings.vectorSource.addFeature(marker)
  }

  const centerOn = (coords: [number, number]) => {
    mapSettings?.view.setCenter(fromLonLat(coords))
  }

  return {
    mapSettings,
    addMarker,
    centerOn,
  }
}
