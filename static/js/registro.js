//var registro = ['usuario', 'contrasena');



document.getElementsByClassName(formulario).addEventListener('submit', function (event) {
    event.preventDefault;
    if (validar(this)) {
        this.submit();
    }

});

function limpiarError() {
    var errores = document.getElementsByClassName('error')
    for (let i = 0; i < errores; i++) {
        errores[i].innerHTML = '';

    }
}

function validar(formulario) {

    limpiarError();

    if (formulario.nombre.value.length == 0) {
        document.getElementById1('errorNombre').innerText('Campo Obligatorio');
        formulario.nombre.focus();
        return false;
    }

    var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (expReg.test(formulario.email.value)) {
        document.getElementById('errorEmail').innerText('debe ingresar un  e-mail valido')
        formulario.email.focus();
        return false;
    };

    if (formulario.contrasena.value.length.trim() == 0) {
        document.getElementById('errorPasword'.innerText = ('Campo Obligatorio'))
        formulario.contrasena.focus();
        return false;
    }

    if (formulario.confirmacion.value != formulario.contrasena.value) {
        document.getElementById('errorConfirmacion').innerText('Las contraseñas no coinciden');
        formulario.confirmacion.focus();
        return false;
    }
    if (formulario.pais.value == '') {
        formulario.getElementById('errorPais').innerText = 'Debe seleccionar un Pais'
        formulario.pais.focus();
        return false;
    }

    if (!formulario.terminos.checked) {
        document.getElementById('errorTerminos').innerText = 'Debe aceptar Terminos y Condiciones'
        return false;
    }

    alert("Formulario enviado correctamente")
    return true;
}