
function obterDados(){
    const nchamado = document.getElementById('nchamado').value;
    const computador = document.getElementById('computador').value;
    const monitor = document.getElementById('monitor').value;
    const localizacao = document.getElementById('localizacao').value;
    const solicitante = document.getElementById('solicitante').value;
    const ramal = document.getElementById('ramal').value;
    
    return {nchamado, computador, monitor, localizacao, solicitante, ramal};
}

function novoEquipamento() {
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um novo equipamento para dar continuidade ao atendimento.
            
            💻 - Modelo do equipamento: ${computador}
            _____________________________________________
        
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;
}

function instalaEquipamento() {
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();


    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a instalação de equipamentos.
            
            💻 - Equipamento(s): ${computador}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function desinstalaEquipamento(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a desinstalação de equipamentos.
            
            💻 - Equipamento(s): ${computador}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function remanejamentoIntern(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito o remanejamento interno de equipamentos.
            
            💻 - Equipamento(s): ${computador}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`; 
}

function remanejamentoExtern(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito o remanejamento externo de equipamentos.
                
            💻 - Equipamento(s): ${computador}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
                
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function attCadastral(){
    const { nchamado, computador, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}

            🔄 Solicito atualização cadastral de equipamentos.

            💻 Equipamento: ${computador}

            ⬅️ Órgão de Origem: 
            • Unidade administrativa: 
            • Localização de origem do equipamento: 

            ➡️ Órgão de Destino: 
            • Unidade administrativa: 
            • Localização de destino do equipamento: 

            _____________________________________________

            💬 Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}
            📞 Ramal: ${ramal}

            _____________________________________________
            Central de Atendimentos Prodasen

            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568


            ---

            ⬅️ Órgão de Origem: SF - OSE - DGER - PRDSTI - COATEN - SAEQUI - SEAEQ
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de origem do equipamento: BLOCO 16 - GALPÃO I

            ➡️ Órgão de Destino: SF - OSE - DGER - PRDSTI - COATEN - SAEQUI - SEAEQ
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de destino do equipamento: BLOCO 16 - GALPÃO I`;
}

function cabosVideo(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um Kit de cabos de vídeo para dar continuidade ao atendimento
            
            💻 - Equipamento(s): ${computador}
            ____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function solictMouse(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um mouse para dar continuidade ao atendimento
            
            💻 - Equipamento(s): ${computador}
            ____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function solictTecld(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um teclado para dar continuidade ao atendimento
            
            💻 - Equipamento(s): ${computador}
            ____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function solicitOrgCabos(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito um organizador de cabos para dar continuidade ao atendimento
        
            💻 - Equipamento(s): ${computador}
            ____________________________________________
        
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
        
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function habPontRede(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito a habilitação do ponto de rede no local para o seguinte equipamento.
                    
            💻 - Equipamento: ${computador}
            ____________________________________________
                    
            📍 - Localização: ${localizacao}
                    
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
                    
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function caboRede(){
    const { nchamado, computador, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito um cabo de rede de " " no local para o seguinte equipamento.
                    
            💻 - Equipamento: ${computador}
            ____________________________________________
                    
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
                    
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function mantenedores(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                        
            💬 O cabo DVI/HDMI está danificado. Dessa forma, foi realizada a sua substituição. O cabo danificado foi recolhido e entregue ao galpão do SAEQUI
                        
            💻 - Equipamento: ${computador}
            ____________________________________________
                        
            📍 - Localização: ${localizacao}
            💬 - Solicitante: ${solicitante}
            ${aceite ? `✔️ - Aceite: ${aceite}` : ''}     
            📞 - Ramal: ${ramal}
            ____________________________________________
            Central de Atendimentos Prodasen
                        
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function laboratorio(){
    const { computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return `• O seguinte equipamento informado abaixo, foi entregue ao laboratório. 
            
            💻 - Equipamento(s): ${computador}
            
            ⚠️

           _____________________________________________

           📍 - Localização: ${localizacao}

           💬 - Solicitante: ${solicitante}
           ✔️ - Aceite do recolhimento: ${aceite}
           📞 - Ramal: ${ramal} 

           _____________________________________________
           Central de Atendimentos Prodasen

           ⚙️ - Técnico: Davi de Souza 
           📞 - Ramal do técnico: 2568`;

}

function deslocamento(){

    return `➡️ Técnico indo ao local para verificar o monitor.
            
            _____________________________________________
            Central de Atendimentos Prodasen
           
           ⚙️ - Técnico: Davi de Souza 
           📞 - Ramal do técnico: 2568



           ➡️ Técnico indo ao local para verificar o computador.

           _____________________________________________
           Central de Atendimentos Prodasen

           ⚙️ - Técnico: Davi de Souza 
           📞 - Ramal do técnico: 2568



           ➡️ Técnico indo ao local para recolher o equipamento. 
           
           _____________________________________________
           Central de Atendimentos Prodasen
           
           ⚙️ - Técnico: Davi de Souza   
           📞 - Ramal do técnico: 2568



           ➡️ Indo ao local para realizar a devolução do equipamento. 
  
           _____________________________________________
           Central de Atendimentos Prodasen  
  
          ⚙️ - Técnico: Davi de Souza   
          📞 - Ramal do técnico: 2568



          ➡️ Técnico indo ao local para realizar o remanejamento.
          
          _______________________________________________
          Central de Atendimentos Prodasen
          
          ⚙️ - Técnico: Davi de Souza
          📞 - Ramal do técnico: 2568



          ➡️ Técnico indo ao local para organizar os cabos dos equipamentos
          
          _____________________________________________
          Central de Atendimentos Prodasen
          
          ⚙️ - Técnico: Davi de Souza
          📞 - Ramal do técnico: 2568
          
          

          ➡️ Técnico indo ao local para verificar os periféricos.

          _____________________________________________
          Central de Atendimentos Prodasen
          
          ⚙️ - Técnico: Davi de Souza
          📞 - Ramal do técnico: 2568
          `;

}

function outros(){
    const { nchamado, computador, localizacao, solicitante, ramal, aceite } = obterDados();

    return  `•  
            
        💻 - Equipamento(s): ${computador}
    
        ⚠️

        _____________________________________________

        📍 - Localização:${localizacao}

        💬 - Solicitante: ${solicitante}
        ✔️ - Aceite do recolhimento: ${aceite}
        📞 - Ramal: ${ramal} 

        _____________________________________________
        Central de Atendimentos Prodasen

        ⚙️ - Técnico: Davi de Souza 
        📞 - Ramal do técnico: 2568`;

}