# 🌤 App del Clima

Aplicación web desarrollada con **Vue 3 + Vite**, utilizando **Bootstrap** para el diseño responsivo y **Pinia** para la gestión de estado global.  
Este proyecto forma parte del módulo de Front-End Trainee y tiene como objetivo practicar **SPA con rutas protegidas, componentes dinámicos y manejo de estado**.

---

## 🚀 Características

- Vista **Home** con listado de lugares (10 ciudades de Chile).
- **Búsqueda dinámica** de lugares por nombre.
- **Selector de unidad de temperatura** (°C / °F) compartido entre todas las vistas gracias a Pinia.
- Vista **Detalle** con información ampliada de cada ciudad y pronóstico semanal.
- Diseño **moderno y responsivo** con Bootstrap.
- Rutas gestionadas con **Vue Router**.

---

## 📂 Estructura del proyecto

```
clima-app/
├── src/
│   ├── assets/
│   │   └── data.json        # Datos de ciudades y clima
│   ├── components/          # Componentes reutilizables
│   ├── views/
│   │   ├── Home.vue         # Vista principal con búsqueda y selector
│   │   └── Detalle.vue      # Vista detalle con pronóstico
│   ├── store/
│   │   └── unidad.js        # Store Pinia para unidad de temperatura
│   ├── router/
│   │   └── index.js         # Configuración de rutas
│   ├── App.vue              # Layout principal con <router-view/>
│   └── main.js              # Punto de entrada, configuración de Bootstrap y Pinia
└── package.json
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/qwrwetwryr3/App-del-clima.git
   cd clima-app
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---

## 📸 Funcionalidades principales

- **Home**: muestra todas las ciudades en tarjetas responsivas.  
- **Búsqueda**: filtra ciudades en tiempo real.  
- **Selector °C/°F**: convierte temperaturas dinámicamente en todas las vistas.  
- **Detalle**: muestra información ampliada y pronóstico semanal.  

---

## 🛠 Tecnologías utilizadas

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

---

## 📌 Autor

Desarrollado por **Daniel Martínez Curilén** como parte del programa **Talento Digital - Front-End Trainee**.

```

---
