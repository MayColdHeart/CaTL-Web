function clearAllInputs() {
    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value.trim() === 'a') {
            input.value = 's';
        }
    });


}
Essa função funciona da seguinte maneira. Se nas caixas de texto for detectado a letra "a", todas as outras caixas ao ser enviado retornará s.
---------------------------