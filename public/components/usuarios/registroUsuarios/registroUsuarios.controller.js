(() => {
    'use stric'
    angular
        .module('evalu')
        .controller('controladorRegistroUsuarios', controladorRegistroUsuarios);

        controladorRegistroUsuarios.$inject['$http', '$state', '$stateProvider', '$location', 'servicioUsuarios'];

    vm.registroUsuario = (pNuevoUsuario) => {
        let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.edad, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.contrasenna);

        let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

    if(registro == true) {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if (sesion == null) {

          swal("Registro exitoso", "success", {
            button: "Aceptar",
          });
          $location.path('/logIn');
        }
        else {
          swal("Registro exitoso", "success", {
            button: "Aceptar",
          });
          $location.path('/');
        }

      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }

})();
