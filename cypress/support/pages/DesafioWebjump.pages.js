/// <reference types='cypress'/>

import { DesafioWebjumpElements } from "../elements/DesafioWebjump.elements";

export const DesafioWebjumpPages = {
    clicarNoBotaoCadastrar(){
        DesafioWebjumpElements.botaoCadastro().should('be.visible').click();
    },
    inserePrimeiroNome(primeiroNome){
        DesafioWebjumpElements.campoPrimeiroNome().should('be.visible').type(primeiroNome);
    },
    insereUltimoNome(ultimoNome){
        DesafioWebjumpElements.campoUltimoNome().should('be.visible').type(ultimoNome);
    },
    insereEmail(email){
        DesafioWebjumpElements.campoEmail().should('be.visible').type(email);
    },
    insereSenha(senha){
        DesafioWebjumpElements.campoSenha().should('be.visible').type(senha);
    },
    confirmaSenha(senha){
        DesafioWebjumpElements.campoConfirmaSenha().should('be.visible').type(senha);
    },
    clicarNoBotaoEfetuarCadastro(){
        DesafioWebjumpElements.botaoEfetuarCadastro().should('be.visible').click();
    },
    confirmaCadastro(){
        DesafioWebjumpElements.confirmarCadastro().should('be.visible');
    }
}