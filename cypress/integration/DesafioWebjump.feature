Feature: Desafio Webjump

    Como usuario, desejo acessar o site fornecido
    Para que possa realizar os requisitos do desafio
    
    Scenario: Cadastro de usuário
        Given desejo me cadastrar
        When acesso a tela de cadastro
        And preencho o campo 'First Name'
        And preencho o campo 'Last Name'
        And preencho o campo 'Email'
        And preencho o campo 'Password'
        And preencho o campo 'Confirm Password'
        Then clico no botao 'Create an Account'
        And visualizo a mensagem de confirmacao

    Scenario: Login
        Given desejo logar na minha conta
        When acesso a tela de Login
        And preencho o campo 'Email'
        And preencho o campo 'Password'
        Then clico no botao 'Sign In'
        And visualizo a pagina da minha conta