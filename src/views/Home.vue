<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">🌤 App del Clima</h1>

    <!-- Barra de búsqueda y selector -->
    <div class="row mb-4">
      <div class="col-md-6">
        <input v-model="busqueda" type="text" class="form-control" placeholder="Buscar ciudad..." />
      </div>
      <div class="col-md-6">
        <select v-model="unidadStore.unidad" class="form-select">
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      </div>
    </div>

    <!-- Tarjetas -->
    <div class="row">
      <div v-for="lugar in lugaresFiltrados" :key="lugar.id" class="col-md-4 mb-4">
        <div class="card shadow h-100">
          <div class="card-body text-center">
            <h5 class="card-title">{{ lugar.name }}</h5>
            <p class="card-text">🌡 {{ unidadStore.convertirTemp(lugar.temp) }} °{{ unidadStore.unidad }}</p>
            <p class="card-text text-muted">{{ lugar.description }}</p>
            <img :src="`http://openweathermap.org/img/wn/${lugar.icon}@2x.png`" class="img-fluid my-3" />
            <router-link :to="`/lugar/${lugar.id}`" class="btn btn-primary">
              Ver detalle
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lugares from "../assets/data.json"
import { useUnidadStore } from "../store/unidad"

export default {
  setup() {
    const unidadStore = useUnidadStore()
    return { unidadStore }
  },
  data() {
    return {
      lugares,
      busqueda: ""
    }
  },
  computed: {
    lugaresFiltrados() {
      return this.lugares.filter(l =>
        l.name.toLowerCase().includes(this.busqueda.toLowerCase())
      )
    }
  }
}
</script>