package runners;
import com.cucumber.listener.Reporter;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import pageObjects.BasePage;

import java.io.File;
import java.io.IOException;



@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue = {"stepDefs"},
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:output/reports/report.html"},
        monochrome = true,
        tags = {}

)

public class RunnerTest extends AbstractTestNGCucumberTests {
    @AfterTest
    public static void writeExtentReport() throws IOException {
            System.out.println("*************************@AfterClass run successfully*************************");
            Reporter.loadXMLConfig(System.getProperty("user.dir") + "config/extent-config.xml");
            BasePage.copyLatestExtentReport();

    }
}

