# Automação de Testes utilizando o framework Cypress

Este repositório tem como função automatizar testes para uma aplicação web fictícia, como parte de um exercício de prática de habilidades. 
O foco do exercício foi utilizar o Cypress para enfrentar diferentes desafios, incluindo interações com elementos da página e validações de API.

## Fases do Exercício

### Fase 1 de 2

#### Parte 1
Na primeira parte da fase 1, o objetivo era automatizar o clique de três botões dinamicos em um site.
Interagindo com elementos que mudam de acordo com a forma que você os utiliza. (Cliques).

#### Parte 2
Na segunda parte da fase 1, a tarefa consistia em clicar nos botões "edit" e 1"delete" das diferentes linhas. Isso põe à prova nossa capacidade de interagir com elementos de tela em diferentes instâncias.

### Fase 2 de 2

Na segunda fase, a proposta foi referente à validação de verbos HTTP, response codes e JSON Schema para um endpoint de uma api disponibilizada pela empresa.

- **Validação dos Verbos HTTP:** Os testes foram implementados para garantir que os quatro verbos HTTP (GET, POST, PUT, DELETE) estivessem sendo corretamente utilizados nas operações da API.

- **Validação dos HTTP Codes:** Solicitamos o retorno de status HTTP pela API nos determinados cenários. Isso incluiu verificar se as respostas estavam de acordo com as expectativas.

- **Validação do JSON Schema com Ajv:** Requisito a biblioteca Ajv, para fazer a validação do JSON do endpoint em relação a um JSON Schema. O uso de `addformats` da Ajv complementou com a precisão da validação.

## Como Executar os Testes

1. Clone o repositório: https://github.com/NegriniQA/paranabank_test
2. Instale as dependências: `npm install`
3. Instale as dependências: `npm install ajv`
4. Execute os testes: `npx cypress run` ou `npx cypress open`

## Considerações Finais

Desenvolver esse exercicio colocou em teste minhas habilidades.
Os desafios propostos, levaram-me uma compreensão mais profunda das capacidades do framework e da intensidade de utilização à diversos níveis.

## Autor

- [Matheus Negrini](https://github.com/NegriniQA)

Agradeço à oportunidade de passar por estes desafios, incrementando experiência nas minhas habilidades e podendo demonstrar meu trabalho e meus métodos.
