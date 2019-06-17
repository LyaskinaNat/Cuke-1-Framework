$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/PEratio.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# For a given stock, given any price as input, calculate the P/E Ratio"
    }
  ],
  "line": 3,
  "name": "P/E Ratio Calculation",
  "description": "",
  "id": "p/e-ratio-calculation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made \u003cnumberOfTrades\u003e trades for \u003cstock\u003e stock with the following data",
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for \u003cstock\u003e Stock in My Stock section calculated",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;",
  "rows": [
    {
      "cells": [
        "stock",
        "numberOfTrades"
      ],
      "line": 18,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;1"
    },
    {
      "cells": [
        "TEA",
        "1"
      ],
      "line": 19,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;2"
    },
    {
      "cells": [
        "POP",
        "1"
      ],
      "line": 20,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;3"
    },
    {
      "cells": [
        "ALE",
        "1"
      ],
      "line": 21,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;4"
    },
    {
      "cells": [
        "GIN",
        "1"
      ],
      "line": 22,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;5"
    },
    {
      "cells": [
        "JOE",
        "1"
      ],
      "line": 23,
      "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3074790088,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 604110208,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made 1 trades for TEA stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for TEA Stock in My Stock section calculated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "TEA",
      "offset": 20
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 423011786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEA",
      "offset": 24
    }
  ],
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(String)"
});
formatter.result({
  "duration": 106191287,
  "status": "passed"
});
formatter.after({
  "duration": 107581278,
  "status": "passed"
});
formatter.before({
  "duration": 1686790491,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 475543018,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made 1 trades for POP stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for POP Stock in My Stock section calculated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "POP",
      "offset": 20
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 391102570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POP",
      "offset": 24
    }
  ],
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(String)"
});
formatter.result({
  "duration": 100378988,
  "status": "passed"
});
formatter.after({
  "duration": 108481056,
  "status": "passed"
});
formatter.before({
  "duration": 1564235641,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 444083453,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made 1 trades for ALE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for ALE Stock in My Stock section calculated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "ALE",
      "offset": 20
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 363769901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALE",
      "offset": 24
    }
  ],
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(String)"
});
formatter.result({
  "duration": 78754991,
  "error_message": "org.junit.ComparisonFailure: Test failed. Actual value: 6.521739130434782 doesn\u0027t match the expected value: 18.99               expected:\u003c[18.99              ]\u003e but was:\u003c[6.521739130434782]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pageObjects.StockPage.lambda$assertDisplayedValue$0(StockPage.java:37)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\n\tat pageObjects.StockPage.assertDisplayedValue(StockPage.java:29)\n\tat stepDefs.PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(PERatioStepDef.java:22)\n\tat ✽.Then I see the P/E Ratio for ALE Stock in My Stock section calculated(features/PEratio.feature:15)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 797359242,
  "status": "passed"
});
formatter.before({
  "duration": 1699201740,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 442067560,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made 1 trades for GIN stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for GIN Stock in My Stock section calculated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "GIN",
      "offset": 20
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 377332604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GIN",
      "offset": 24
    }
  ],
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(String)"
});
formatter.result({
  "duration": 98666468,
  "status": "passed"
});
formatter.after({
  "duration": 106020869,
  "status": "passed"
});
formatter.before({
  "duration": 1648549539,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 436243915,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I made 1 trades for JOE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "150",
        "20",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the P/E Ratio for JOE Stock in My Stock section calculated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "JOE",
      "offset": 20
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 380832753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOE",
      "offset": 24
    }
  ],
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated(String)"
});
formatter.result({
  "duration": 99333181,
  "status": "passed"
});
formatter.after({
  "duration": 101518298,
  "status": "passed"
});
formatter.before({
  "duration": 1621965322,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 453697095,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "P/E Ratio Calculation for a given stock based on the last trade price",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock-based-on-the-last-trade-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "stock",
        "price",
        "quantity",
        "buyOrSell"
      ],
      "line": 27
    },
    {
      "cells": [
        "POP",
        "100",
        "20",
        "Buy"
      ],
      "line": 28
    },
    {
      "cells": [
        "POP",
        "180",
        "100",
        "Sell"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I see the P/E Ratio for a given Stock in My Stock section based on last trade price",
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 593148245,
  "status": "passed"
});
formatter.match({
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated_based_on_last_trade_price()"
});
formatter.result({
  "duration": 96169822,
  "status": "passed"
});
formatter.after({
  "duration": 102268854,
  "status": "passed"
});
});