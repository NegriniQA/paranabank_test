const apiUrls = require ('../Auxiliares/urls');

describe('Teste do verbo HTTP "POST"', () => {

    it('Deve executar um teste para o verbo POST e retornar o "HTTP Code"', ()=>{
        
        cy.request({
            method:'POST',
            url: (apiUrls.apiUrlUsers),
            body: require('../Auxiliares/body.json')
            })
            .then((response) =>{
            expect(response.status).to.be.equal(201)
            }); 
    })      
})

            /* "cy.request" = requisita que o cypress utilize o metodo "Post" na página de URL's
            para acrescentar nessa API, um post novo, nesse caso, mais um cadastro.
            "body"
            O body que será utilizado para subir, será o pre-determinado na pasta de auxiliares.
            "then(response)" = então retornar // expect(response.status) = o retorno esperado é o status.
            Que deverá ser 201. Diferente do codigo 200, significa que a solicitação foi bem recebida porém
            criou um novo recurso. */