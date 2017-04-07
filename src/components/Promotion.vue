<template>
  <div class="promotion">
    <img src="./../assets/logo.png" alt="Playstore"/>
    <h3>
      <p class="lead">
        Mantén tu carro o moto en el mejor estado y controla todos tus gastos con Mobi.
      </p>
      <p class="lead">
        Con Mobi, además de administrar y llevar los gastos de tus vehículos de manera muy fácil, 
        podrás conocer de manera rápida las fechas próximas de tus revisiones para que puedas cumplir 
        con todo y tu vehículo siempre esté en perfecto estado.
      </p>
    </h3>
    <a href="https://play.google.com/store/apps/details?id=com.sapco.sapcoapp" target="_blank">
      <img class="play_store" src="./../assets/badge_playstore.png" alt="Playstore"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Promotion',
  };
</script>

<style scoped>
  .promotion {
    text-align: center;
  }
  h1 { margin-bottom: 50px; }
  p {
    text-align: justify;
  }
  img.play_store {
    width: 40%;
  }
</style>
