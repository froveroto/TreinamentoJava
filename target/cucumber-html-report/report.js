$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contactus.feature");
formatter.feature({
  "name": "Contato",
  "description": "\tEu como usu�rio do site\n\tPretendo abrir um chamado\n\tPara acessar a area logada e finalizar o checkout",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@contactus"
    }
  ]
});
formatter.scenario({
  "name": "Tentativa de entrar em contato",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@contactus"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acessei o contact us",
  "keyword": "E "
});
formatter.match({
  "location": "treinamento.steps.ContactusSteps.acesseiOContactUs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os dados da mensagem e enviar",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.ContactusSteps.preencherOsDadosDaMensagemEEnviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "um novo chamado sera aberto",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.ContactusSteps.umNovoChamadoSeraAberto()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  Eu como usuario do site\n  Pretendo realizar o login\n  Para visualizar a area logada",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"\u003cusuarioinvalidos\u003e\" e \"\u003csenhainvalida\u003e\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.step({
  "name": "receberei a mensagem \"\u003cmensagemdeerro\u003e\" informando o erro",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "usuarioinvalidos",
        "senhainvalida",
        "mensagemdeerro"
      ]
    },
    {
      "cells": [
        "usuario",
        "senha12345",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "usuario@",
        "senha12345",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "usuario.com",
        "senha12345",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "usuario@..",
        "senha12345",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "usuario@.com",
        "senha12345",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "usuario@gmail.com",
        "senha12345",
        "Authentication failed."
      ]
    },
    {
      "cells": [
        "",
        "senha12345",
        "An email address required."
      ]
    },
    {
      "cells": [
        "usuario@gmail.com",
        "",
        "Password is required."
      ]
    }
  ]
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario@\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario.com\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario@..\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario@.com\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario@gmail.com\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Authentication failed.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"\" e \"senha12345\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"An email address required.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.queAcesseiOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Acessos Invalidos",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.step({
  "name": "eu digitar \"usuario@gmail.com\" e \"\" invalidos e clicar em login",
  "keyword": "Quando "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.euDigitarEInvalidosEClicarEmLogin(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "receberei a mensagem \"Password is required.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "treinamento.steps.LoginSteps.recebereiAMensagemInformandoOErro(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});