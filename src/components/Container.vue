<template>
  <div class="hello">
    <div class="logo">
      <img src="./../assets/logo.png" alt="Playstore"/>
    </div>

    <div class="form--container">
      <h3 v-if="validate">¿Has olvidado tu contraseña?</h3>
      <ResetPasswordForm v-if="validate"></ResetPasswordForm>
      <div v-else="validate">
        <p class="lead">
          El tiempo establecido para cambiar la contrase ha experido.
          Por favor vuelve a solicitar el cambio de contraseña dentro de la app Mobi.
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  
  import ResetPasswordForm from './ResetPasswordForm';

  export default {
    name: 'container',
    components: {
      ResetPasswordForm,
    },
    data() {
      return {
        validate: true,
      };
    },
    methods: {
      validateToken(token) {
        const self = this;
        axios
          .get(`http://localhost:3030/api/users/reset/${token}`)
          .then((res) => { self.validate = res.data.validate; })
          .catch(() => { self.validate = false; });
      },
    },
    mounted() {
      const token = this.$route.params.token;
      this.validateToken(token);
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2, h3 {
    font-weight: normal;
    text-align: center;
  }
  .logo{
    text-align: center;
  }
  .lead{
    margin-top: 30px;
    text-align: justify;
  }
</style>
