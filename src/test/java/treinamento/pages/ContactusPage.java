package treinamento.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static treinamento.config.DriverFactory.getDriver;

public class ContactusPage {
	
	private By contactUs = By.xpath("//*[@id=\"contact-link\"]/a");
	private By contactEmail = By.xpath("//*[@id=\"email\"]");
	private By contactMessage = By.xpath("//*[@id=\"message\"]");
	private By contactSend = By.xpath("//*[@id=\"submitMessage\"]");
	
	WebDriverWait wait = new WebDriverWait(getDriver(), 30);
	Actions actions = new Actions(getDriver());
	
	public void clickContactUs() {
		WebElement waitcontactUs = getDriver().findElement(contactUs);
		wait.until(ExpectedConditions.visibilityOf(waitcontactUs));
		wait.until(ExpectedConditions.elementToBeClickable(waitcontactUs));
		actions.moveToElement(waitcontactUs);
		getDriver().findElement(contactUs).click();
	}

	public void setcontactEmail() {
		getDriver().findElement(contactEmail).sendKeys("testesse@inmetrics.com.br");
	}

	public void setcontactMessage() {
		getDriver().findElement(contactMessage).sendKeys("uma mensagem de envio");
	}
	
	public void clickcontactSend() {
		getDriver().findElement(contactSend).click();
	}

}
