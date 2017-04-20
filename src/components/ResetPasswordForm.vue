<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title"><strong>Ingresa aquí una nueva para el acceso a tu aplicación</strong></h3>
    </div>
    <div class="panel-body">
      <form role="form" @submit.prevent="resetPassword()">
        <div class="form-group">
          <label for="Email1">Email</label>
          <input type="email" name="Email1" class="form-control" v-model.trim="user.email" placeholder="Enter email" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" v-model.trim="user.password" placeholder="Password" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Repetir Contraseña</label>
          <input type="password" class="form-control" v-model.trim="user.rePassword" placeholder="Password" required>
        </div>
        <div class="text-right">
          <br>
          <button type="submit" class="btn btn-sm btn-change">Cambiar contraseña</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import sweetalert from 'sweetalert';

  export default {
    name: 'resetPasswordForm',
    data() {
      return {
        user: {
          email: '',
          password: '',
          rePassword: '',
          token: '',
        },
      };
    },
    methods: {
      resetPassword() {
        this.user.token = this.$route.params.token;
        const user = this.user;
        axios.post('http://13.92.35.129:3030/api/users/reset-password', { user })
        .then((res) => {
          if (res.data.email) {
            const self = this;
            sweetalert({
              title: 'Contraseña restablecida',
              text: 'Ya puedes disfrutar nuevamente de Mobi App',
              type: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#d47729',
            }, () => {
              self.$router.push({ path: '/' });
            });
          }
        })
        .catch(() => {
          sweetalert({
            title: 'Oops...',
            text: 'Algo salio mal y no pudimos cambiar tu contraseña-',
            type: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#d47729',
          });
        });
      },
    },
  };

</script>

<style scoped>
 @import "./../../node_modules/sweetalert/dist/sweetalert.css";

  .panel-default{
    margin-top: 30px;
  }
  label{ text-align: left; }
  .btn-change {
    color: #fff;
    background-color: #d47729;
    border-color: #d47729;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
</style>
