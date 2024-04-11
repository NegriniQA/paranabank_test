const apiUrls = require ('../Auxiliares/urls');

describe('Teste do verbo HTTP "GET"', () => {
    it('Deve executar um teste para o verbo GET e retornar o "HTTP Code"', ()=>{

        cy.request('GET', apiUrls.apiUrlUserId1)      
            .then((response) => { 
                expect(response.status).to.be.equal(200); 
            })            
        })
})
            /* "cy.request" = Requisita que o cypress use o metodo GET na URL de ID-1
            ".then(response)" traz resposta
            "expect(response.status)" determina que o response esperado é o status
            ".to.be.equal" deve ser igual à 200. Que é o código de "Solicitação bem recebida"*/