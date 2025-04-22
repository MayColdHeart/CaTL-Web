
function obterDados(){
    const nchamado = document.getElementById('nchamado').value;
    const computador = document.getElementById('computador').value;
    const localizacao = document.getElementById('localizacao').value;
    const solicitante = document.getElementById('solicitante').value;
    const ramal = document.getElementById('ramal').value;
    const aceite = document.getElementById('aceite').value;
    
    return {nchamado, computador, localizacao, solicitante, ramal, aceite};
}

function instalaEquipamentoResp() {
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();


    return `✔️ O equipamento informado no item de configuração do chamado, foi instalado conforme solicitado.
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

function desinstalaEquipamentoResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ O equipamento informado no item de configuração do chamado, foi desinstalado conforme solicitado.
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

function remanejamentoInterResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Os equipamentos foram remanejados para os locais indicados pelo usuário conforme foi solicitado.
            
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

function remanejamentoExtResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

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
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca do cabo de vídeo do monitor. O monitor e os equipamentos informados no item de configuração estão operacionais.
            
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

    ✔️ Realizado a descarga de energia do monitor. O monitor e os equipamentos informados no item de configuração estão operacionais. 

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

function solictMouseResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca de mouse da CPU. Os periféricos e equipamentos informados no item de configuração seguem operacionais.
            
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

function solictTecldResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a troca de teclado da CPU. Os periféricos e equipamentos informados no item de configuração seguem operacionais.
            
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

function solicitOrgCabosResp(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `✔️ Realizado a organização de cabos dos equipamentos informados no item de configuração do chamado.
                
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