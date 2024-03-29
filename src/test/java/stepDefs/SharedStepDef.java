package stepDefs;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import utils.DriverFactory;

import java.io.IOException;

import static utils.DriverFactory.*;


public class SharedStepDef {
    @Given("I am on Simple Stock page")
    public void i_am_on_Simple_Stock_page()  {
        DriverFactory.goToAppHomePage();

    }

    @When("I made trades with the following data")
    public void i_made_trades_with_the_following_data(DataTable dt) throws IOException {

        tradePage.makeTradesForDifferentStocks (dt);

    }

    @When("I made (.+) trades for (.+) stock with the following data")
    public void i_made_trades_for_stock_with_the_following_data(Integer numberOfTrades, String stock, DataTable dt) throws IOException {

        switch (stock) {
            case "TEA":
                tradePage.makeTrades(stock, dt, numberOfTrades);
                break;

            case "POP":
                tradePage.makeTrades(stock, dt, numberOfTrades);
                break;

            case "ALE":
                tradePage.makeTrades(stock, dt, numberOfTrades);
                break;

            case "GIN":
                tradePage.makeTrades(stock, dt, numberOfTrades);
                break;

            case "JOE":
                tradePage.makeTrades(stock, dt, numberOfTrades);
                break;

        }

    }

}



