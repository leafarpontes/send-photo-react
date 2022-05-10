# Envio de Fotos - React

Antes de testar, tenha certeza de que a ![API do backend](https://github.com/leafarpontes/send-photo-api-java-spring) está rodando em http://localhost:8080 <br>
Endpoint de envio de fotos: http://localhost:8080/foto

## Como rodar o projeto

1. Clone o projeto: `git clone https://github.com/leafarpontes/send-photo-react.git`
2. Navegue até o diretório do projeto: `cd send-photo-react`
3. Instale as dependências: `npm install`
4. Rode o projeto: `npm start`

A aplicação iniciará em http://localhost:3000

## Como funciona a aplicação
Este projeto consiste em uma interface onde o usuário seleciona uma foto do seu computador, e a envia para uma API, como um objeto JSON, neste formato:
```json
{
  "id": 1,
  "photo": "string"
}
```
O id é um número gerado aleatoriamente entre 1-1000. <br>
A foto é convertida para string no formato base64.

## Interface
Interface inicial: <br>

![](https://i.imgur.com/K6N4Fps.png)

Após selecionar uma foto do computador: <br>

![](https://i.imgur.com/WX80jqM.png)

Após clicar em "Enviar foto" e a foto ter sido enviada com sucesso para a API: <br>

![](https://i.imgur.com/nTqe0Vx.png)

---

### Desenvolvido por Rafael Pontes
[Linkedin](https://www.linkedin.com/in/rafael-p/) | [GitHub](https://github.com/leafarpontes)
