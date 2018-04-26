class Usuario {

    /* @ngInject */
    constructor(pCedula, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEdad, pCorreo, pTelefono, pContrasenna) {
        this._id = 0;
        this.cedula = pCedula;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.edad = pEdad;
        this.correo = pCorreo;
        this.telefono = pTelefono;
        this.contrasenna = pContrasenna;
    }
}

class Hotel {
    constructor()
}
