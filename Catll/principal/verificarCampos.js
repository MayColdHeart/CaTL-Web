function verificarCampos() {
    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.value = 'Não informado';
        }
    });

    // Aqui você pode enviar o formulário ou realizar outras ações
    // formulario.submit();
}


  