declare namespace ymaps {
  function ready(callback: () => void): void

  interface YMapProps {
    center: [number, number]
    zoom: number
    controls: string[]
  }

  interface MapEvent {
    get(type: 'coords'): [number, number]
  }

  interface MapEvents {
    add(event: string, event: (e: MapEvent) => void): void
  }

  class Map {
    constructor(element: HTMLElement | string, props: YMapProps)

    events: MapEvents
  }

  class Placemark {
    constructor(coords: [number, number])
  }
}
