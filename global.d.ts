declare namespace ymaps {
  function ready(callback: () => void): void

  interface YMapProps {
    center: [number, number]
    zoom: number
    controls: string[]
  }

  class Map {
    constructor(element: HTMLElement | string, props: YMapProps)
  }

  class Placemark {
    constructor(coords: [number, number])
  }
}
