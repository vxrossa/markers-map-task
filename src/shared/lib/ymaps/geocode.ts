export const GEOCODE_BASE_URL = 'https://geocode-maps.yandex.ru/1.x/'

interface GeocodeLocation {
  GeoObject: {
    name: string
    description: string
  }
}

export interface GeocodeResponse {
  response: {
    GeoObjectCollection: {
      featureMember: GeocodeLocation[]
    }
  }
}

export const geocodeLocation = async (latLng: [number, number]): Promise<GeocodeResponse> => {
  const requestParams = new URLSearchParams()
  requestParams.set('apikey', import.meta.env.VITE_YMAPS_API_KEY)
  requestParams.set('geocode', `${latLng[1]},${latLng[0]}`)
  requestParams.set('format', 'json')

  try {
    const res = await fetch(GEOCODE_BASE_URL + `?${requestParams.toString()}`)

    if (!res.ok) {
      console.warn(`Error geocoding the location: ${res.status}`)
    } else {
      const data = await res.json()

      return data
    }
  } catch (err) {
    console.warn(`Error geocoding the location at ${latLng[0]},${latLng[1]}: ${err}`)
  }
}
