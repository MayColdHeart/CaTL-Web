function clearAllInputs(){

    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');

    inputs.forEach(input => input.value = '') 
        
}

