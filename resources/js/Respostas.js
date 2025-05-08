
function obterDados(){
    const nchamado = document.getElementById('nchamado').value;
    const itemConf = document.getElementById('itemConf').value;
    const localizacao = document.getElementById('localizacao').value;
    const solicitante = document.getElementById('solicitante').value;
    const ramal = document.getElementById('ramal').value;
    const aceite = document.getElementById('aceite').value;
    
    
    return {nchamado, itemConf, localizacao, solicitante, ramal, aceite};
}

function instalaResp() {
    const { localizacao, solicitante, ramal, aceite } = obterDados();


    return `✔️ O equipamento informado no item de configuração do chamado, foi instalado conforme solicitado.
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal: 2568`;
}

function desinstalaResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ O equipamento informado no item de configuração do chamado, foi desinstalado conforme solicitado.
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
             ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal: 2568`;
}

function remanInterResp(){
    const { itemConf, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Os equipamentos foram remanejados para os locais indicados pelo usuário conforme foi solicitado.

            1º -> ${itemConf}
            2º -> 
            3º ->
            4° -> 
            5° ->
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal: 2568`;
}

//Melhorar a implementação de remanejamento. Planejar melhor isso
function remanExtrResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Os equipamentos foram remanejados para o local indicado pelo usuário conforme foi solicitado.

            _____________________________________________
                
            📍 - Localização: ${localizacao}
                
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
                
            _____________________________________________
            Central de Atendimentos Prodasen
                
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;
}

function cabosVideoResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca do cabo de vídeo do monitor. 
    
            - O monitor e os equipamentos informados no item de configuração seguem funcionando normalmente.
            
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568

     -------------------------------------------------------------------------

            ✔️ Realizada a descarga de energia do monitor.

            - O monitor e os equipamentos informados no item de configuração seguem funcionando normalmente.

            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;

}

function MouseResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca de mouse da CPU. 
    
            - Os periféricos e equipamentos informados no item de configuração seguem funcionando normalmente.
            
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;
}

function TecldResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca de teclado da CPU.

            - Os periféricos e equipamentos informados no item de configuração seguem funcionando normalmente.
            
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;

}

function OrgCabosResp(){
    const { localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a organização de cabos dos equipamentos informados no item de configuração.
                
            _____________________________________________
                
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
                
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;
}

