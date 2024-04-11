const botoes = require ("../Auxiliares/botoes");
const siteteste = require ("../Auxiliares/sites");

const corpodatabela = '<tbody>';

describe('Teste de Automatização para clicar nos botões "Edit" e "Delete"', () => {
  
    it('Deve clicar nos botões "Edit" e "Delete" em cada linha da tabela', () => {
     cy.visit(siteteste);
  
      cy.get(corpodatabela).each(($linha) => {
          cy.wrap($linha).get(botoes.botaoedit).click({multiple: true}) ;
          cy.wrap($linha).get(botoes.botaodelete).click({multiple: true});
       });
     });
   });
    
      /* 1 - "cy.visit" = Visita o site locado dentro do parênteses.
      2 - "cy.get" = Seleciona do corpo da tabela / ".each" cada linha
      3 - "cy.wrap" = 'Empacota' o elemento escolhido para que seja compativel aos comandos cypress.
      4 - ".get" seleciona o elemento entre parênteses. / ".click" serve para clicar no elemento
      5 - "multiple: true" sinaliza para o cypress que, se encontradas opções repetidas,
      deve executar o comando multiplas vezes.
      */