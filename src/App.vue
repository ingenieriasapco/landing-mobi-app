<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-1 text-center mt-100 mb-100">
            <div class="phone">
              <img class="img-responsive img-rounded" src="./assets/mobi_device.png">
            </div>
          </div>
          <div class="col-md-5 col-md-offset-1">
            <div class="content">
              <div class="pull-middle">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="content">
              <div class="pull-middle">
                <h4><strong>Sapco 2017</strong></h4>
                <small>Phasellus feugiat at lorem a tincidunt. Nam hendrerit leo vitae orci pellentesque, nec euismod dolor condimentum.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .pull-middle{
    margin-top:20px;
  }

  .bg--image {
    will-change: transform, top;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover !important;
    background-position: 50% 50% !important;
    z-index: 0;
    transition: 0.3s linear;
    -webkit-transition: 0.3s linear;
    -moz-transition: 0.3s linear;
    opacity: 0;
    background: #252525;
  }

</style>
