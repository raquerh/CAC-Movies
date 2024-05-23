document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        if (!validarFormulario()) {
            e.preventDefault(); // Previene el envío del formulario si no es válido
        }
    });
});

const validarPasswordConfirmacion = () => {
    const contrasenia = document.querySelector('.password').value;
    const confirmacion = document.querySelector('.confirmacion').value;
    const errorMessage = 'Las contraseñas no coinciden';

    if (contrasenia !== confirmacion) {
        setErrorFor(document.querySelector('.confirmacion'), errorMessage);
        return false;
    } else {
        setSuccessFor(document.querySelector('.confirmacion'));
        return true;
    }
};

const validarFormulario = () => {
    let valido = true;

    valido = validarCampo('nombre', 'El nombre es obligatorio') && valido;
    valido = validarCampo('apellido', 'El apellido es obligatorio') && valido;
    valido = validarCampoEmail('email', 'El correo electrónico no es válido') && valido;
    valido = validarCampo('password', 'La contraseña es obligatoria') && valido;
    valido = validarCampo('confirmacion', 'La confirmación de contraseña es obligatoria') && valido;
    valido = validarPasswordConfirmacion() && valido;
    valido = validarCampo('fechaNacimiento', 'La fecha de nacimiento es obligatoria') && valido;
    valido = validarCampo('pais', 'El país es obligatorio') && valido;

    const terminos = document.querySelector('#terminos').checked;
    if (!terminos) {
        valido = false;
        setErrorFor(document.querySelector('#terminos'), 'Debes aceptar los términos y condiciones');
    } else {
        setSuccessFor(document.querySelector('#terminos'));
    }
    return valido;
};

const validarCampo = (fieldId, errorMessage) => {
    const campo = document.getElementById(fieldId);
    const valor = campo.value.trim();
    if (valor === '') {
        setErrorFor(campo, errorMessage);
        return false;
    } else {
        setSuccessFor(campo);
        return true;
    }
};

const validarCampoEmail = (fieldId, errorMessage) => {
    const campo = document.getElementById(fieldId);
    const email = campo.value.trim();
    if (email === '') {
        setErrorFor(campo, 'El correo electrónico es obligatorio');
        return false;
    } else if (!isEmail(email)) {
        setErrorFor(campo, errorMessage);
        return false;
    } else {
        setSuccessFor(campo);
        return true;
    }
};

const setErrorFor = (input, message) => {
    const formControl = input.closest('div');
    const errorText = formControl.querySelector('.errorCompletar');
    formControl.classList.add('error');
    errorText.innerText = message;
    input.focus();
};

const setSuccessFor = (input) => {
    const formControl = input.closest('div');
    formControl.classList.remove('error');
    const errorText = formControl.querySelector('.errorCompletar');
    errorText.innerText = '';
};

const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value.trim();
        if (value !== '') {
            setSuccessFor(input);
        }
    });
});

document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', () => {
        const value = select.value;
        if (value !== '') {
            setSuccessFor(select);
        }
    });
});
