


function gerarChamado(opcao) {

    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.value = 'Não informado';
        }
    });


    let chamado = '';
    let resposta = '';
    
    switch (opcao) {
        
        case 1:
            chamado = novoEquipamento()
        break;
        
        case 2:
            chamado = instalaEquipamento()
            resposta = instalaEquipamentoResp()
            break;
            
        case 3:
            chamado = desinstalaEquipamento()
            resposta = desinstalaEquipamentoResp()
        break;
        
        case 4:
            chamado = remanejamentoIntern()
            resposta = remanejamentoInterResp()
        break;

        case 5:
            chamado = remanejamentoExtern()
            resposta = remanejamentoExtResp()
        break;

        case 6:
            chamado = attCadastral()
        break;

        case 7:
            chamado = cabosVideo()
            resposta = cabosVideoResp()
        break;

        case 8:
            chamado = solictMouse()
            resposta = solictMouseResp()
        break;

        case 9:
            chamado = solictTecld()
            resposta = solictTecldResp()
        break;

        case 10:
            chamado = solicitOrgCabos()
            resposta = solicitOrgCabosResp()
        break;

        case 11:
            chamado = habPontRede()
        break;

        case 12:
            chamado = caboRede()
        break;

        case 13:
            chamado = mantenedores()
        break;

        case 14:
            chamado = laboratorio()
        break;

        case 15:
            chamado = deslocamento()
        break;

        case 16:
            chamado = outros()
        break;
                    

        default:
            chamado = `Opção inválida`;
            resposta = `Por favor, selecione uma opção válida.`;
    }

    document.getElementById('chamado').innerText = chamado;
    document.getElementById('resposta').innerText = resposta;
    
}