import { defineStore } from 'pinia'

export const useUnidadStore = defineStore('unidad', {
  state: () => ({
    unidad: 'C'
  }),
  actions: {
    setUnidad(nueva) {
      this.unidad = nueva
    },
    convertirTemp(tempC) {
      if (this.unidad === 'F') {
        return Math.round((tempC * 9/5) + 32)
      }
      return tempC
    }
  }
})