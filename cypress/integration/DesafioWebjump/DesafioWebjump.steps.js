import { DesafioWebjumpPages } from "../../support/pages/DesafioWebjump.pages";

const email = gerarEmailAleatorio();

function gerarEmailAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      email += caracteres[randomIndex];
    }
    email += '@mailinator.com';
    return email;
}

Given(/^desejo me cadastrar$/, () => {
	return true;
});

When(/^acesso a tela de cadastro$/, () => {
	cy.visit(Cypress.env('cadastroUrl'));
});

When(/^preencho o campo 'First Name' no cadastro$/, () => {
	DesafioWebjumpPages.inserePrimeiroNome(Cypress.env('primeiroNome'));
});

When(/^preencho o campo 'Last Name' no cadastro$/, () => {
	DesafioWebjumpPages.insereUltimoNome(Cypress.env('ultimoNome'));
});

When(/^preencho o campo 'Email' no cadastro$/, () => {
	DesafioWebjumpPages.insereEmailCadastro(email);
});

When(/^preencho o campo 'Password' no cadastro$/, () => {
	DesafioWebjumpPages.insereSenhaCadastro(Cypress.env('senha'));
});

When(/^preencho o campo 'Confirm Password' no cadastro$/, () => {
	DesafioWebjumpPages.confirmaSenha(Cypress.env('senha'));
});

When(/^clico no botao 'Create an Account'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoEfetuarCadastro();
});

Then(/^visualizo a mensagem de confirmacao$/, () => {
	DesafioWebjumpPages.confirmaCadastro();
});


Given(/^desejo logar na minha conta$/, () => {
	return true;
});

When(/^acesso a tela de Login$/, () => {
	cy.visit(Cypress.env('loginUrl'));
});

When(/^preencho o campo 'Email'$/, () => {
	DesafioWebjumpPages.insereEmailLogin(Cypress.env('email'));
});

When(/^preencho o campo 'Password'$/, () => {
	DesafioWebjumpPages.insereSenhaLogin(Cypress.env('senha'));
});

When(/^clico no botao 'Sign In'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoLogar();
});

Then(/^visualizo a pagina da minha conta$/, () => {
	DesafioWebjumpPages.confirmaLogin();
});


Given(/^desejo adicionar um produto ao carrinho$/, () => {
	return true;
});

When(/^seleciono uma categoria$/, () => {
	DesafioWebjumpPages.clicarNoMenuGear();
	DesafioWebjumpPages.clicarNoMenuBags();
});

When(/^seleciono um produto$/, () => {
	DesafioWebjumpPages.clicarNoProduto();
});

When(/^adiciono ao carrinho$/, () => {
	cy.reload();
	DesafioWebjumpPages.clicarNoBotaoAdicionarAoCarrinho();
});

When(/^recebo a mensagem de confirmacao da adicao$/, () => {
	DesafioWebjumpPages.confirmaAdicaoAoCarrinho();
});

Then(/^vejo o produto no meu carrinho$/, () => {
	DesafioWebjumpPages.clicarNoCarrinho();
	DesafioWebjumpPages.confirmaItemNoCarrinho();
});



Given(/^desejo finalizar minha compra$/, () => {
	return true;
});

When(/^clico no carrinho$/, () => {
	return true;
});

When(/^clico em 'Proceed to Checkout'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoFinalizarCompra();
});

When(/^clico no botao 'Next'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoContinuarCompra();
});

When(/^clico no botao 'Place Order'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoFazerPedido();
});

Then(/^vejo meu numero de pedido$/, () => {
	DesafioWebjumpPages.confirmaNumeroDoPedido();
});
