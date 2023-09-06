export const DesafioWebjumpElements = {
    botaoCadastro: () => cy.get('[id="idfCGMOzQJ"]'),

    campoPrimeiroNome: () => cy.get('[id="firstname"]'),

    campoUltimoNome: () => cy.get('[id="lastname"]'),

    campoEmail: () => cy.get('[id="email_address"]'),

    campoSenha: () => cy.get('[id="password"]'),
    
    campoConfirmaSenha: () => cy.get('[id="password-confirmation"]'),

    botaoEfetuarCadastro: () => cy.get('[class="action submit primary"]'),

    confirmarCadastro: () => cy.get('[data-ui-id="message-success"]')
}