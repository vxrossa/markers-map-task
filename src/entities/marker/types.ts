export interface Marker {
  name: string
  description: string
  lat: number
  long: number
}

export type MarkerQueryKey = 'markers'

export type MarkerQueryData = {
  markers: Marker[]
}
