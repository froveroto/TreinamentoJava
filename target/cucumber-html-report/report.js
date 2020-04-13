$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
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
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Invalid email address.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Authentication failed.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"An email address required.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Estar na tela de login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acessei o login",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "receberei a mensagem \"Password is required.\" informando o erro",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});