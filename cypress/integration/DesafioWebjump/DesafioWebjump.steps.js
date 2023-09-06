import { DesafioWebjumpPages } from "../../support/pages/DesafioWebjump.pages";

const primeiroNome = 'felipe';
const ultimoNome = 'dias';
const email = gerarEmailAleatorio();
const senha = 'zNXhPymlb4duHql'

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
	cy.visit('https://magento2-demo.magebit.com/customer/account/create/');
});

When(/^preencho o campo 'First Name'$/, () => {
	DesafioWebjumpPages.inserePrimeiroNome(primeiroNome);
});

When(/^preencho o campo 'Last Name'$/, () => {
	DesafioWebjumpPages.insereUltimoNome(ultimoNome);
});

When(/^preencho o campo 'Email'$/, () => {
	DesafioWebjumpPages.insereEmail(email);
});

When(/^preencho o campo 'Password'$/, () => {
	DesafioWebjumpPages.insereSenha(senha);
});

When(/^preencho o campo 'Confirm Password'$/, () => {
	DesafioWebjumpPages.confirmaSenha(senha);
});

When(/^clico no botao 'Create an Account'$/, () => {
	DesafioWebjumpPages.clicarNoBotaoEfetuarCadastro();
});

Then(/^visualizo a mensagem de confirmacao$/, () => {
	DesafioWebjumpPages.confirmaCadastro();
});
