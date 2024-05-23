document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        if (!validarFormulario()) {
            e.preventDefault(); // Previene el envío del formulario si no es válido
        }
    });
});

const validarFormulario = () => {
    let valido = true;

    valido = validarCampoEmail('email', 'El correo electrónico no es válido') && valido;
    valido = validarCampo('password', 'La contraseña es obligatoria') && valido;

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
