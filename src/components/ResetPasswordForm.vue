<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title"><strong>Ingresa aquí una nueva para el acceso a tu aplicación</strong></h3>
    </div>
    <div class="panel-body">
      <form role="form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="email1" placeholder="Enter email" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="password1" placeholder="Password" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Repetir Contraseña</label>
          <input type="password" class="form-control" id="password2" placeholder="Password" required>
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
  export default {
    name: 'resetPasswordForm',
    data() {
      return {
        msg: 'Mobi App',
      };
    },
  };

</script>

<style scoped>
  .form--container{
    margin-top: 30px;
  }
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
