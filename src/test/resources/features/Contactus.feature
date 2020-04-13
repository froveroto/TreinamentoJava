#language:pt

@contactus
Funcionalidade: Contato
	Eu como usuário do site
	Pretendo abrir um chamado
	Para acessar a area logada e finalizar o checkout

  Cenario: Tentativa de entrar em contato
  	Dado que acessei o login
  		E acessei o contact us
  	Quando preencher os dados da mensagem e enviar
  	Entao um novo chamado sera aberto