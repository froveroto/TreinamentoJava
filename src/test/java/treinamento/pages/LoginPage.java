package treinamento.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static treinamento.config.DriverFactory.getDriver;

public class LoginPage {
	
	private By signInbtn = By.xpath("//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a");
	private By emailUser = By.xpath("//*[@id=\"email\"]");
	private By passUser = By.xpath("//*[@id=\"passwd\"]");
	private By submitLogin = By.id("SubmitLogin");
	private By loginErrormsg = By.xpath("//*[@id=\"center_column\"]/div[1]");
	private By prettyWoman = By.xpath("//*[@id=\"block_top_menu\"]/ul/li[1]/a");
	WebDriverWait wait = new WebDriverWait(getDriver(), 30);
	Actions actions = new Actions(getDriver());
	
	public void hoverprettyWoman() {
		WebElement waitprettyWoman = getDriver().findElement(prettyWoman);
		wait.until(ExpectedConditions.elementToBeClickable(waitprettyWoman));
		actions.moveToElement(waitprettyWoman).perform();
	}
		
	public void clickSignIn() {
		WebElement waitsignInbtn = getDriver().findElement(signInbtn);
		wait.until(ExpectedConditions.visibilityOf(waitsignInbtn));
		wait.until(ExpectedConditions.elementToBeClickable(waitsignInbtn));
		actions.moveToElement(waitsignInbtn);
		getDriver().findElement(signInbtn).click();
	}

	public void setUserName(String userName) {
		getDriver().findElement(emailUser).sendKeys(userName);
	}

	public void setPassword(String password) {
		getDriver().findElement(passUser).sendKeys(password);
	}

	public void clickSubmitLogin() {
		getDriver().findElement(submitLogin).click();
	}

	public void checarloginErrormsg(String errorMessage) {
		getDriver().findElement(loginErrormsg).getText().contains(errorMessage);
	}

}
