/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('D1N1', () => {

    it('Cadastrar um novo usuário', () => {
        cy.visit('/');

        cy.get('a[class=login]').click();
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();

        //Formulário
        cy.get('input#id_gender1').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#passwd').type('password');
        cy.get('select#days').select('31');
        cy.get('select#months').select('January');
        cy.get('select#years').select('1997');

        cy.get('input#firstname').type(chance.first());
        cy.get('input#lastname').type(chance.last());
        cy.get('input#company').type(chance.company());
        cy.get('input#address1').type(chance.address());
        cy.get('select#id_country').select('United States');
        cy.get('input#city').type(chance.city());
        cy.get('select#id_state').select('New York');
        cy.get('input#postcode').type('00000');
        cy.get('textarea#other').type('Desafio 1');
        cy.get('input#phone_mobile').type(chance.phone({ formatted: false}));
        cy.get('input#alias').clear().type('Endereço');

        //botão Register
        cy.get('button#submitAccount').click();

        //verificar URL
        cy.url().should('be.eq', 'http://automationpractice.com/index.php?controller=my-account');

        //verificar Mensagem
        cy.get('p[class="info-account"]').should('contain', 'Welcome to your account');

        
    });
});