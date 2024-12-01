import { Backend } from '@/shared/api'
import type { Marker } from '@/entities/marker/types'

export class MarkerApi extends Backend {
  constructor() {
    super()
  }

  async getMarkers() {
    try {
      const data = await this.get('/markers')

      if (!data) return []

      return data
    } catch (err) {
      throw new Error(`Error fetching markers data: ${err}`)
    }
  }

  async createMarker(newMarker: Marker) {
    try {
      const data = await this.post('/markers', newMarker)

      return data
    } catch (err) {
      throw new Error(`Error while creating a new marker, ${err}`)
    }
  }
}

export const markerApi = new MarkerApi()
