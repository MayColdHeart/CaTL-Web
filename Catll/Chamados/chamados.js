
function obterDados(){
    const nchamado = document.getElementById('nchamado').value;
    const eqEspecif = document.getElementById('eqEspecif').value;
    const itemConf = document.getElementById('itemConf').value;
    const localizacao = document.getElementById('localizacao').value;
    const solicitante = document.getElementById('solicitante').value;
    const ramal = document.getElementById('ramal').value;
    
    return {nchamado, itemConf, eqEspecif, localizacao, solicitante, ramal};
}

function novoEquipamento() {
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um novo equipamento para dar continuidade ao atendimento.

            - Novo equipamento:
            
            📦 - Item de Configuração: ${itemConf}
            _____________________________________________
        
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal: 2568`;
}

function instalaEquipamento() {
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();


    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a instalação de equipamentos.
            
            💻 - Equipamento: ${eqEspecif}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function desinstalaEquipamento(){
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a desinstalação de equipamentos.
            
            💻 - Equipamento: ${eqEspecif}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function remanejamentoIntern(){
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito o remanejamento interno de equipamentos.
            
            💻 - Equipamento: ${eqEspecif}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`; 
}

function remanejamentoExtern(){
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito o remanejamento externo de equipamentos.
                
            💻 - Equipamento: ${eqEspecif}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
                
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function attCadastral(){
    const { nchamado, eqEspecif, itemConf, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}

            🔄 Solicito atualização cadastral do equipamento ${eqEspecif}.

            📦 - Item de Configuração: ${itemConf}

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
            📞 - Ramal: 2568

            --- 

            ⬅️ Órgão de Origem: SF - OSE - DGER - PRDSTI - COATEN - SAEQUI - SEAEQ
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de origem do equipamento: BLOCO 16 - GALPÃO I

            ➡️ Órgão de Destino: SF - OSE - DGER - PRDSTI - COATEN - SAEQUI - SEAEQ
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de destino do equipamento: BLOCO 16 - GALPÃO I`;
}

//Linha 132 - 139 -> precisa aparecer como resposta

function cabosVideo(){
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um Kit de cabos de vídeo para dar continuidade ao atendimento
            
            💻 - Equipamento: ${eqEspecif}
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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um mouse para dar continuidade ao atendimento
            
            💻 - Equipamento: ${eqEspecif}
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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um teclado para dar continuidade ao atendimento.
            
            💻 - Equipamento: ${eqEspecif}
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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito um organizador de cabos para dar continuidade ao atendimento
        
            💻 - Equipamento: ${eqEspecif}
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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito a habilitação do ponto de rede no local para o equipamento "${eqEspecif}".
        
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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito a disponibilidade de um cabo de rede no local para o equipamento "${eqEspecif}".

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
    const { nchamado, eqEspecif, localizacao, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                        
            💬 
                        
            💻 - Equipamento: ${eqEspecif}
            #️⃣ - Número de Série:
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
    const { eqEspecif, itemConf, localizacao, solicitante, ramal, aceite } = obterDados();
    
    return `• O equipamento "${eqEspecif}" foi recolhido do local e entregue ao laboratório. 

            ⚠️         

            📦 - Item de Configuração: ${itemConf}
            
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


function outros(){
    const { eqEspecif, itemConf, localizacao, solicitante, ramal, aceite } = obterDados();

    return  `•  

            💻 - Equipamento: ${eqEspecif}
        
            📦 - Item de Configuração: ${itemConf}

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

function deslocamento(){
    return `➡️ Técnico indo ao local para verificar o(s) equipamento(s).
            
            _____________________________________________
            Central de Atendimentos Prodasen
           
           ⚙️ - Técnico: Davi de Souza 
           📞 - Ramal do técnico: 2568



            ➡️ Técnico indo ao local para verificar os periféricos.

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



          ➡️ Técnico indo ao local para organizar os cabos.
          
          _____________________________________________
          Central de Atendimentos Prodasen
          
          ⚙️ - Técnico: Davi de Souza
          📞 - Ramal do técnico: 2568`;
        }