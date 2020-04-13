package treinamento.steps;

import static treinamento.config.DriverFactory.getDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import treinamento.pages.LoginPage;
import treinamento.utils.Helper;

public class LoginSteps {
	
	private LoginPage loginPage;
	
	@Before
	public void inicialza() {
		loginPage = new LoginPage();
		getDriver().get("http://automationpractice.com/index.php");
	}
	
	@After
	public void finalizarTeste(Scenario scenario) {
		Helper.finalizaTestesComScreenShot(scenario);
	}
	
	@Dado("que acessei o login")
	public void queAcesseiOLogin() {
		loginPage.hoverprettyWoman();
		loginPage.clickSignIn();
	}

	@Quando("eu digitar {string} e {string} invalidos e clicar em login")
	public void euDigitarEInvalidosEClicarEmLogin(String usuarioinvalidos, String senhainvalida) {
		loginPage.setUserName(usuarioinvalidos);
		loginPage.setPassword(senhainvalida);
		loginPage.clickSubmitLogin();
	}

	@Entao("receberei a mensagem {string} informando o erro")
	public void recebereiAMensagemInformandoOErro(String mensagemdeerro) {
		loginPage.checarloginErrormsg(mensagemdeerro);
	}
}
