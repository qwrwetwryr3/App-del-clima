<template>
  <div class="container my-5">
    <router-link to="/" class="btn btn-link mb-3">← Volver al Home</router-link>

    <div v-if="lugar" class="card shadow mx-auto" style="max-width: 500px;">
      <div class="card-body text-center">
        <h2 class="card-title">{{ lugar.name }}</h2>
        <p class="card-text">🌡 Temperatura: {{ unidadStore.convertirTemp(lugar.temp) }} °{{ unidadStore.unidad }}</p>
        <p class="card-text">{{ lugar.description }}</p>
        <img :src="`http://openweathermap.org/img/wn/${lugar.icon}@2x.png`" class="img-fluid my-3" />
        <h5 class="mt-4">📈 Pronóstico semanal</h5>
        <ul class="list-group list-group-flush">
          <li v-for="dia in pronostico" :key="dia.dia" class="list-group-item">
            {{ dia.dia }}: {{ unidadStore.convertirTemp(dia.temp) }} °{{ unidadStore.unidad }}
          </li>
        </ul>
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
      lugar: null,
      pronostico: [
        { dia: "Lunes", temp: 20 },
        { dia: "Martes", temp: 22 },
        { dia: "Miércoles", temp: 18 },
        { dia: "Jueves", temp: 21 },
        { dia: "Viernes", temp: 19 }
      ]
    }
  },
  created() {
    const id = this.$route.params.id
    this.lugar = lugares.find(l => l.id == id)
  }
}
</script>