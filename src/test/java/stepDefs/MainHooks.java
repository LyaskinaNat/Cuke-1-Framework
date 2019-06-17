package stepDefs;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pageObjects.BasePage;
import utils.DriverFactory;

import java.io.File;


public class MainHooks extends DriverFactory {

    @Before

    public void setup() {
        driver = getDriver();

    }


    @After

    public void tearDownAndScreenShotOnFailure(Scenario scenario) {

        try {
            if (driver != null && scenario.isFailed()) {
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
                BasePage.captureScreenshot();
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;

            }
            if (driver != null) {
             //   BasePage.copyLatestExtentReport();
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;

            }
        } catch (Exception e) {
            System.out.println("Methods failed: tearDownAndScreenShotOnFailure, Exception:" + e.getMessage());
        }
    }

    }




