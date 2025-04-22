Hoje, dia 4/4 as 09:58 da manhã, estou a caminho para realizar o teste da funcionalidade de formulário para o chamado. Irei para o ambiente de testes para verificar o equipamento da usuária, onde ontem apresentou falhas. Usarei os dados do chamado neste novo teste e logo retornarei com os resultados..

Tive sucesso na minha implementação. Consegui aplicar em um atendimento sem nenhuma dificuldade. Porém, precisarei realizar mais alguns ajustes.



dia  8/4 as 12:48

Basicamente, reformulei todos os botões e interface do CaTL. A organização e a funcionalidade dele ainda estava muito precária. Dessa forma, foi realizado a mudança de posição dos botões, foi adicionado um título melhor e também foi adicionado um botão de "Apagar tudo"..

Funcionalidades a serem implementadas:

- Mais tipos de chamados
- Adicionar uma variante de chamado (ex: O mesmo chamado separado apenas para o monitor ou computador)
- Adicionar um botão de copiar tudo 
- Adicionar um bloco de notas
- Adicionar um banco de dados só para armazenar as notas localmente (em uma pasta)
- Deixar a interface mais intuitiva de mexer
- Realizar a criação e configuração de um arquivo.js a parte dos chamados textos.

Obs:  Eu estava pensando em fazer uma conexão com o robô do telegram. Assim eu conseguiria receber os meus chamados e acompanhamentos clicando em um botão na própria WEB.

----

function chamados(){

    chamado = `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito um novo equipamento para dar continuidade ao atendimento.
            
            💻 - Modelo do equipamento: ${computador}, ${monitor}
            _____________________________________________
        
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}
            _____________________________________________
            Central de Atendimentos Prodasen
            
            ⚙️ - Técnico: Davi de Souza 
            📞 - Ramal do técnico: 2568`;


            chamado_2 = `➡️ Referente ao chamado: #${nchamado}
            
            • Solicito a instalação de equipamentos.
            
            💻 - Equipamento(s): ${computador}, ${monitor}
            _____________________________________________
            
            📍 - Localização: ${localizacao}
        
            💬 - Solicitante: ${solicitante}
            📞 - Ramal: ${ramal}`;

            resposta = `✔️ O equipamento informado no item de configuração do chamado, foi instalado conforme solicitado.
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