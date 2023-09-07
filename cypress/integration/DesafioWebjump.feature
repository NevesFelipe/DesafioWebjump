Feature: Desafio Webjump

    Como usuario, desejo acessar o site fornecido
    Para que possa realizar os requisitos do desafio
    
    Scenario: Cadastro de usuário
        Given desejo me cadastrar
        When acesso a tela de cadastro
        And preencho o campo 'First Name' no cadastro
        And preencho o campo 'Last Name' no cadastro
        And preencho o campo 'Email' no cadastro
        And preencho o campo 'Password' no cadastro
        And preencho o campo 'Confirm Password' no cadastro
        Then clico no botao 'Create an Account'
        And visualizo a mensagem de confirmacao

    Scenario: Login
        Given desejo logar na minha conta
        When acesso a tela de Login
        And preencho o campo 'Email'
        And preencho o campo 'Password'
        Then clico no botao 'Sign In'
        And visualizo a pagina da minha conta

    Scenario: Adicionar produto ao carrinho
        Given desejo adicionar um produto ao carrinho
        When seleciono uma categoria
        And seleciono um produto
        And adiciono ao carrinho
        And recebo a mensagem de confirmacao da adicao
        Then vejo o produto no meu carrinho

    Scenario: Finalização de compra
        Given desejo finalizar minha compra
        When clico no carrinho
        And clico em 'Proceed to Checkout'
        And clico no botao 'Next'
        And clico no botao 'Place Order'
        Then vejo meu numero de pedido