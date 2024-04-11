const botoes = require ('../Auxiliares/botoes');
const siteteste = require ('../Auxiliares/sites');

describe('Página de teste onde devo clicar nos três botões dinâmicos', () => {

  it('Efetuar clique em cada um dos tres botões apresentados em tela', () => {
    
    cy.visit(siteteste);  //Visitar a página atraves do URL.
      cy.get(botoes.botao1).click();
      cy.get(botoes.botao2).click();
      cy.get(botoes.botao3).click();
              /* Por conta dos botões mudarem de forma dinâmica, não podemos referenciar os mesmos pelo ID,
              buscamos pela âncora "a", a referencia html "href", da classe determinada para o botão.
              Utilizando o "click" para efetuar a ação de clicar */
  })
})