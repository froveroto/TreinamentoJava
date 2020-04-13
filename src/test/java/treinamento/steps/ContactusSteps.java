package treinamento.steps;

import static treinamento.config.DriverFactory.getDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import treinamento.pages.ContactusPage;
import treinamento.utils.Helper;

public class ContactusSteps {
	
	private ContactusPage contactUsPage;
	
	@Before
	public void inicialza() {
		contactUsPage = new ContactusPage();
		getDriver().get("http://automationpractice.com/index.php");
	}
	
	@After
	public void finalizarTeste(Scenario scenario) {
		Helper.finalizaTestesComScreenShot(scenario);
	}
	
	@Dado("acessei o contact us")
	public void acesseiOContactUs() {
		contactUsPage.clickContactUs();
	}

	@Quando("preencher os dados da mensagem e enviar")
	public void preencherOsDadosDaMensagemEEnviar() {
	    contactUsPage.setcontactEmail();
	    contactUsPage.setcontactMessage();
	    contactUsPage.clickcontactSend();
	}

	@Entao("um novo chamado sera aberto")
	public void umNovoChamadoSeraAberto() {
		System.out.println("ainda pendente pro teste ficar verdinho");
	}

}
