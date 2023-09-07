export const DesafioWebjumpElements = {
    botaoCadastro: () => cy.get('[id="idfCGMOzQJ"]'),

    campoPrimeiroNome: () => cy.get('[id="firstname"]'),

    campoUltimoNome: () => cy.get('[id="lastname"]'),

    campoEmailCadastro: () => cy.get('[id="email_address"]'),

    campoSenhaCadastro: () => cy.get('[id="password"]'),
    
    campoConfirmaSenha: () => cy.get('[id="password-confirmation"]'),

    botaoEfetuarCadastro: () => cy.get('[class="action submit primary"]'),

    confirmarCadastro: () => cy.get('[data-ui-id="message-success"]'),

    campoEmailLogin: () => cy.get('[id="email"]'),

    campoSenhaLogin: () => cy.get('[id="pass"]'),

    botaoLogar: () => cy.get('[id="send2"]'),

    confirmaLogin: () => cy.get('[data-ui-id="page-title-wrapper"]'),

    menuGear: () => cy.get('#ui-id-6'),

    menuBags: () => cy.get('.categories-menu > .items > :nth-child(1) > a'),

    produto: () => cy.get('#product-item-info_6 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'),

    botaoAdicionarAoCarrinho: () => cy.get('[id="product-addtocart-button"]'),

    confirmaAdicaoAoCarrinho: () => cy.get('[data-ui-id="message-success"]'),

    botaoCarrinho: () => cy.get('.showcart'),

    confirmaItemNoCarrinho: () => cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details'),

    botaoFinalizarCompra: () => cy.get('[id="top-cart-btn-checkout"]')


}