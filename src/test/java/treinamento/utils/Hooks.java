package treinamento.utils;

import static treinamento.config.DriverFactory.getDriver;
import static treinamento.config.DriverFactory.killDriver;

import java.io.File;
import java.io.IOException;

import org.junit.After;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import treinamento.config.Properties;

public class Hooks {
	
	@Rule
	public TestName testName = new TestName();
	
	@After
	public void finalizaTestes() throws IOException {
		TakesScreenshot ss = (TakesScreenshot) getDriver();
		File file = ss.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(file, new File("target" + File.separator + "screenshot" + File.separator + testName.getMethodName() + ".jpg"));
		
		if(Properties.CLOSE_BROWSER) {
			killDriver();
		}
	}
}
