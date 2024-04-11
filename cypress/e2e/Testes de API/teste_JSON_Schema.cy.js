import Ajv from 'ajv';
import addformats from 'ajv-formats';

const apiUrls = require ("../Auxiliares/urls");

const ajv = new Ajv();
addformats(ajv);

describe('Testa JSON Schema com ajv', () => {
    it('Deve validar se o JSON está de acordo com o schema', () => {
        cy.request('GET', apiUrls.apiUrlUserId1).its('body')
        .then(response => {
        const schema = require('../Auxiliares/v_jsonSchema.json');
        const validaçao = ajv.compile(schema);
        const valid = validate(response);

            if (!valid) {
            throw new Error(`JSON does not match the schema. Errors: ${ajv.errorsText(validaçao.errors)}`);
            } 
        });
    });
});

        /* "cy.request" = Requisita que o cypress use o metodo GET para pegar alguma informação
        da url indicada, que nesse caso é a do ID de cadastro 1.
        ".its(body)" = Indica que o elemento a ser pego, é o body da página.
        "then (response)" nesse caso espera que a resposta seja a função

        const schema = Determina a variavel "schema" como o arquivo base de JSON
        const validate = Determina a variavel que compila o Schema atraves da bib.
        const valid = Determina uma variavel que requisita a compilação e tras a resposta da comparação
        do JSON pego pelo GET com o Schema pré-determinado

        "If (!valid)" Se o response for diferente de "Valid" / Então o sistema deve lançar um erro
        com a frase "JSON does not match the schema. Errors: ..." Indicando qual o erro identificado

        Se for valido, o teste irá passar. */