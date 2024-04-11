const apiUrls = require('../Auxiliares/urls');

describe('Teste do verbo HTTP "PUT"',() =>{
    
    it('Deve testar na página de usuários, o verbo PUT, para alterar o preenchimento',() =>{
        
        cy.request ({
            method: 'PUT',
            url: (apiUrls.apiUrlUserId1),
            body: require('../Auxiliares/body.json')
            }) 
            .then((response) =>{
            expect(response.status).to.be.equal(200)
        });
    })
})

            /* "cy.request" = requisita que o cypress utilize o metodo "PUT" na página do cadastro ID 1
            para atualizar esse cadastro com as informações determinadas.
            "body"
            As informações que serão alteradas estão no body da página de arquivos auxiliares.
            "then(response)" = então retornar // expect(response.status) = o retorno esperado é o status.
            Que deverá ser 200. Dignifica que a solicitação foi bem recebida */