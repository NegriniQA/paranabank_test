const apiUrls = require('../Auxiliares/urls');

describe('Teste do verbo HTTP "DELETE"', () => {
    it('Deve testar se o verbo DELETE está funcionando e testar se recebemos o HTTP code correto', () => {
       
       cy.request('DELETE', apiUrls.apiUrlUserId1)
          .then((response) => {
           expect(response.status).to.be.equal(200);
          })
       })
})
           /* "cy.request" = Requisita que o cypress use o método "Delete" naquele perfil de ID 1
               "then(response)" = retorna uma resposta
               "expect(response.status)" = espera que o response seja referente ao status
               "to.be.equal" = deve ser igual à 200. Que é o código de "Solicitação bem recebida". */