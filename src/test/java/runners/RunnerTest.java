package runners;
import com.cucumber.listener.Reporter;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.testng.annotations.AfterTest;
import pageObjects.BasePage;
import java.io.File;
import java.io.IOException;



@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue = {"stepDefs"},
        plugin = {"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:output/reports/report.html"
        },
        monochrome = true,
        tags = {"@regression"}

)

public class RunnerTest extends AbstractTestNGCucumberTests {
    @AfterTest
    public static void writeExtentReport() throws IOException {
        System.out.println("*************************@AfterClass run successfully*************************");
        Reporter.loadXMLConfig(new File((System.getProperty("user.dir") + "/config/extent-config.xml")));
        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", "Mac Pro" + "64 Bit");
        Reporter.setSystemInfo("Selenium", "3.7.0");
        Reporter.setSystemInfo("Maven", "3.5.2");
        Reporter.setSystemInfo("Java Version", "1.8.0_151");
        BasePage.copyLatestExtentReport();

    }
}