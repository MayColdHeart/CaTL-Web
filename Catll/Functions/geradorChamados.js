function escolheTipoCham(){
    const switchCham = document.getElementById("tipoChamadoSelect").value


    let chamado = '';
    let resposta = '';


    switch (switchCham){

        case 'novoEquipamento':
            chamado = novoEquipamento()
            break;
        
        case 'instalacao':
            chamado = instalaEquip()
            resposta = instalaResp()
            break;
        
        case 'desinstala':
            chamado = desinstalaEquip()
            resposta = desinstalaResp()
            break;
        
        case 'remanejInt':
            chamado = remanInter()
            resposta = remanInterResp()
            break;
        
        case 'remanejExt':
            chamado = remanExtr()
            resposta = remanExtrResp()
            break;

        case 'attCadastral':
            chamado = attCadastral()
            break;

        case 'perifVideo':
            chamado = cabosVideo()
            resposta = cabosVideoResp()
            break;

        case 'perifTeclado':
            chamado = solictTecld()
            resposta = solictTecld()
            break;

        case 'perifMouse':
            chamado = solictMouse()
            resposta = MouseResp()
            break;

        case 'orgCabos':
            chamado = OrgCabos()
            resposta = OrgCabosResp()
            break;

        case 'habRede':
            chamado = habPontRede()
            break;

        case 'cabRede':
            chamado = caboRede()
            break;

        case 'mantenedor':
            chamado = mantenedores()
            break;
        
        case 'lab':
            chamado = laboratorio()
            break;

        case 'desloc':
            chamado = deslocamento()
            break;

        case 'outros':
            chamado = outros()
            break;
    }
    document.getElementById('chamado').innerText = chamado;
    document.getElementById('resposta').innerText = resposta;
}
