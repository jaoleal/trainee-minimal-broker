
# **TREINO** de Habilidades Back-End em: Node.js, Python, SQLDatabase, PHP, AWS
## Projeto: Minimal Crypto Broker ou Agente Mínimo de Negociação em CryptoMoedas

Seguindo o diagrama, segue as funções de cada componente.

### AWS PHP Rest Api Isoladora:
 Sua função é basicamente isolar as funções das APIS públicas: Coinranking e Coin API

### Orquestrador Node.Js(Express, node-postgres):
 Como um Orquestrador, é esperado que faça o gerenciamento do funcionamento dos outros componentes, visando explorar mais tecnologias e soluções inteligente podendo:
    - monitorar uso
    - gerenciar autenticação dos usuários
    - economizar recursos
    - Requisições no banco de dados
 
### Formatador(Cliente) Python
 Este módulo em python terá a função de interagir com o orquestrador apenas, requisitar e formatar as informações  para o output desejado, que em primeiro caso é o terminal usando pyTermTk porque eu também sou filho de deus 

 ### AWS PostgreSQL
 Banco de Dados para Salvar: Usuários, dados de uso e "transações" feitas

 # Tarefas
    - [ ] AWS PHP Rest Api Isoladora
        - [ ] Isolar funções a serem usadas
        - [ ] Enpoints
            - [ ] Status das Api's
            - [ ] Funções isoladas
        - [ ] Notificação para Orquestrador caso mudança relevante de Data
        - [ ] Hospedar na AWS
    - [ ] Orquestrador Node.js
        - [ ] Servidor web
        - [ ] Sockets pros Módulos
        - [ ] Usuários
            - [ ] Registro e Login em banco
            - [ ] Registro de Requisições por usuário
            - [ ] Registro de Tempo Online do usuário
        - [ ] Status dos módulos (Banco de Dados, Cliente e Api)
    - [ ] AWS Banco de Dados Postgres
        - [ ] Criar Coleções/Tabelas
    - [ ] Cliente
        - [ ] Fazer interface bonitinha
        - [ ] Lógica das funções
        - [ ] Status dos Serviços