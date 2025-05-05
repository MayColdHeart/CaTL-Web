
function obterDados(){
    const nchamado = document.getElementById('nchamado').value;
    const itemConf = document.getElementById('itemConf').value;
    const localizacao = document.getElementById('localizacao').value;
    const solicitante = document.getElementById('solicitante').value;
    const ramal = document.getElementById('ramal').value;
    
    return {nchamado, itemConf, localizacao, solicitante, ramal};
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

function instalaEquip() {
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();


    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a instalação de equipamentos.
            
            💻 - Equipamento: ${itemConf}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function desinstalaEquip(){
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a desinstalação de equipamentos.
            
            💻 - Equipamento: ${itemConf}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function remanInter(){
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito o remanejamento interno de equipamentos.
            
            💻 - Equipamento: ${itemConf}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`; 
}

function remanExtr(){
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito o remanejamento externo de equipamentos.
                
            💻 - Equipamento: ${itemConf}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
                
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;
}

function attCadastral(){
    const { nchamado, itemConf, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}

            🔄 Solicito atualização cadastral do equipamento ${itemConf}.

            📦 - Item de Configuração: ${itemConf}

            ⬅️ Órgão de Origem: 
            • Unidade administrativa: 
            • Localização de origem do equipamento: 

            ➡️ Órgão de Destino: 
            • Unidade administrativa: 
            • Localização de destino do equipamento: 

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
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de origem do equipamento: BLOCO 16 - GALPÃO I

            ➡️ Órgão de Destino: SF - OSE - DGER - PRDSTI - COATEN - SAEQUI - SEAEQ
            • Unidade administrativa: SETOR DE ARMAZENAMENTO DE EQUIPAMENTOS DA SAEQUI (GALPÃO)
            • Localização de destino do equipamento: BLOCO 16 - GALPÃO I`;
}

//Linha 132 - 139 -> precisa aparecer como resposta

function cabosVideo(){
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um Kit de cabos de vídeo para dar continuidade ao atendimento
            
            💻 - Equipamento(s): ${itemConf}
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
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um mouse para dar continuidade ao atendimento
            
            💻 - Equipamento(s): ${itemConf}
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
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um teclado para dar continuidade ao atendimento.
            
            💻 - Equipamento(s): ${itemConf}
            ____________________________________________
            
            📍 - Localização: ${localizacao}
            
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}

            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza
            📞 - Ramal do técnico: 2568`;
}

function OrgCabos(){
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                
            • Solicito um organizador de cabos para dar continuidade ao atendimento
        
            💻 - Equipamento(s): ${itemConf}
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
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito a habilitação do ponto de rede no local para o equipamento "${itemConf}".
        
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
    const { nchamado, itemConf, localizacao, solicitante, ramal } = obterDados();
    
    return `➡️ Referente ao chamado: #${nchamado}
                    
            • Solicito a disponibilidade de um cabo de rede no local para o equipamento "${itemConf}".

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
    const { nchamado, itemConf, localizacao, solicitante, ramal, aceite } = obterDados();

    return `➡️ Referente ao chamado: #${nchamado}
                        
            💬 
                        
            💻 - Equipamento: ${itemConf}
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
    const { itemConf, localizacao, solicitante, ramal, aceite } = obterDados();
    
    return `• O equipamento "${itemConf}" foi recolhido do local e entregue ao laboratório. 

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


function outros(){
    const { itemConf, localizacao, solicitante, ramal, aceite } = obterDados();

    return  `•  

            💻 - Equipamento: ${itemConf}
        

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
    const { eqEspecif, itemConf, localizacao, solicitante, ramal, aceite } = obterDados();
    return `➡️ Técnico indo ao local
            
            _____________________________________________
            Central de Atendimentos Prodasen
           
           ⚙️ - Técnico: Davi de Souza 
           📞 - Ramal do técnico: 2568
           

           ___________________________________________
           💻 - Equipamento: ${eqEspecif}
           📦 - Item de Configuração: ${itemConf}
        
           📍 - Localização:${localizacao}
        
           💬 - Solicitante: ${solicitante}
           📞 - Ramal: ${ramal}`;
        }


