<template>
    <section class="container" id="productos">
      <h1 class="text-center">Nuestros Productos</h1>
      <div class="row">
        <div class="col-sm-4 col-12 px-5 mb-4" v-for="producto in productos" :key="producto.id">
          <div class="card">
            <img src="../assets/img/colaciones.jpg" alt="">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: {{ producto.precio }}</li>
              <li class="list-group-item">Cantidad disponible: {{ producto.cantidad }}</li>
            </ul>
            <div class="card-body">
              <router-link :to="{ name: 'Home' }" class="card-link">Volver al inicio</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          {
            id: 1,
            nombre: 'Producto 1',
            descripcion: 'Descripción del Producto 1',
            precio: 100,
            cantidad: 10
          },
        ]
      }
    }
  }
  </script>
  
  <style lang="">
    
  </style>
  