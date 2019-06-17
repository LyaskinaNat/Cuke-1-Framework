package utils;

public class Constant {
  // Config Properties file
  // we make driver locations dynamic (execution can be performed on different PCs)

    public final static String CONFIG_PROPERTIES_DIRECTORY = "properties/config.properties";
    public final static String GECKO_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/drivers/geckodriver.exe";
    public final static String CHROME_DRIVER_DIRECTORY = System.getProperty("user.dir") + "/src/test/drivers/chromedriverMac";



}
