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
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 3438977035,
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
  "duration": 583928930,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 583713623,
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
  "duration": 148290077,
  "status": "passed"
});
formatter.after({
  "duration": 187701768,
  "status": "passed"
});
formatter.before({
  "duration": 2052149768,
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
  "duration": 523420061,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 663333080,
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
  "duration": 158273017,
  "status": "passed"
});
formatter.after({
  "duration": 144300463,
  "status": "passed"
});
formatter.before({
  "duration": 1883374933,
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
  "duration": 473038358,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 496302327,
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
  "duration": 136389584,
  "status": "passed"
});
formatter.after({
  "duration": 234146856,
  "status": "passed"
});
formatter.before({
  "duration": 1735680186,
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
  "duration": 439763557,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 439186933,
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
  "duration": 133274474,
  "status": "passed"
});
formatter.after({
  "duration": 181782618,
  "status": "passed"
});
formatter.before({
  "duration": 1813890967,
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
  "duration": 481401268,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "P/E Ratio Calculation for a given stock",
  "description": "",
  "id": "p/e-ratio-calculation;p/e-ratio-calculation-for-a-given-stock;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
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
  "duration": 494042105,
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
  "duration": 133617985,
  "status": "passed"
});
formatter.after({
  "duration": 169794759,
  "status": "passed"
});
formatter.before({
  "duration": 1842189694,
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
  "duration": 448013224,
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
  "duration": 612532304,
  "status": "passed"
});
formatter.match({
  "location": "PERatioStepDef.i_see_the_P_E_Ratio_for_Stock_in_My_Stock_section_calculated_based_on_last_trade_price()"
});
formatter.result({
  "duration": 99473777,
  "status": "passed"
});
formatter.after({
  "duration": 221849194,
  "status": "passed"
});
formatter.uri("features/dividendYield.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# For a given stock, given any price as input, calculate the dividend yield"
    }
  ],
  "line": 4,
  "name": "Dividend Yield Calculation",
  "description": "",
  "id": "dividend-yield-calculation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I made \u003cnumberOfTrades\u003e trades for \u003cstock\u003e stock with the following data",
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for \u003cstock\u003e Stock in My Stock section based on stock type",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);",
  "rows": [
    {
      "cells": [
        "stock",
        "numberOfTrades"
      ],
      "line": 13,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;1"
    },
    {
      "cells": [
        "TEA",
        "1"
      ],
      "line": 14,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;2"
    },
    {
      "cells": [
        "POP",
        "1"
      ],
      "line": 15,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;3"
    },
    {
      "cells": [
        "ALE",
        "1"
      ],
      "line": 16,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;4"
    },
    {
      "cells": [
        "GIN",
        "1"
      ],
      "line": 17,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;5"
    },
    {
      "cells": [
        "JOE",
        "1"
      ],
      "line": 18,
      "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1557046226,
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
  "duration": 446235605,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I made 1 trades for TEA stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for TEA Stock in My Stock section based on stock type",
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
  "duration": 376008733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEA",
      "offset": 25
    }
  ],
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(String)"
});
formatter.result({
  "duration": 106036797,
  "status": "passed"
});
formatter.after({
  "duration": 155019517,
  "status": "passed"
});
formatter.before({
  "duration": 1621228033,
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
  "duration": 430117736,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I made 1 trades for POP stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for POP Stock in My Stock section based on stock type",
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
  "duration": 361318406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POP",
      "offset": 25
    }
  ],
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(String)"
});
formatter.result({
  "duration": 99751692,
  "status": "passed"
});
formatter.after({
  "duration": 114194431,
  "status": "passed"
});
formatter.before({
  "duration": 1618907646,
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
  "duration": 442373892,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I made 1 trades for ALE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for ALE Stock in My Stock section based on stock type",
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
  "duration": 368897685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALE",
      "offset": 25
    }
  ],
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(String)"
});
formatter.result({
  "duration": 99126540,
  "status": "passed"
});
formatter.after({
  "duration": 197817342,
  "status": "passed"
});
formatter.before({
  "duration": 1600913524,
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
  "duration": 438330986,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I made 1 trades for GIN stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for GIN Stock in My Stock section based on stock type",
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
  "duration": 368416168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GIN",
      "offset": 25
    }
  ],
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(String)"
});
formatter.result({
  "duration": 86370318,
  "error_message": "org.junit.ComparisonFailure: Test failed. Actual value: 1.3333333333333333 doesn\u0027t match the expected value: 0.0133333333333333 expected:\u003c[0.01]33333333333333\u003e but was:\u003c[1.33]33333333333333\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pageObjects.StockPage.lambda$assertDisplayedValue$0(StockPage.java:37)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\n\tat pageObjects.StockPage.assertDisplayedValue(StockPage.java:29)\n\tat stepDefs.DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(DividendYieldStepDef.java:28)\n\tat ✽.Then I see Dividend Yield for GIN Stock in My Stock section based on stock type(features/dividendYield.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 867726444,
  "status": "passed"
});
formatter.before({
  "duration": 2021508543,
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
  "duration": 442733652,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Dividend Yield Calculation for each stock based on stock type (Common/Preferred)",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-each-stock-based-on-stock-type-(common/preferred);;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I made 1 trades for JOE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 9
    },
    {
      "cells": [
        "150",
        "20",
        "Buy"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Dividend Yield for JOE Stock in My Stock section based on stock type",
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
  "duration": 393493609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOE",
      "offset": 25
    }
  ],
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_stock_type(String)"
});
formatter.result({
  "duration": 100006353,
  "status": "passed"
});
formatter.after({
  "duration": 119632129,
  "status": "passed"
});
formatter.before({
  "duration": 1618368376,
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
  "duration": 442652132,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Dividend Yield Calculation for a given stock based on last trade price",
  "description": "",
  "id": "dividend-yield-calculation;dividend-yield-calculation-for-a-given-stock-based-on-last-trade-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 21
    },
    {
      "cells": [
        "POP",
        "100",
        "20",
        "Buy"
      ],
      "line": 22
    },
    {
      "cells": [
        "POP",
        "180",
        "100",
        "Sell"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see Dividend Yield for a given Stock in My Stock section based on last trade price",
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 593717502,
  "status": "passed"
});
formatter.match({
  "location": "DividendYieldStepDef.i_see_Dividend_Yield_for_Stock_in_My_Stock_section_based_on_last_trade_price()"
});
formatter.result({
  "duration": 92422204,
  "status": "passed"
});
formatter.after({
  "duration": 110750427,
  "status": "passed"
});
formatter.uri("features/geometricMean.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Calculate the GBCE All Share Index using the geometric mean of prices for all stocks"
    }
  ],
  "line": 4,
  "name": "Geometric Mean Calculation for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made \u003cnumberOfTrades\u003e trades for \u003cstock\u003e stock with the following data",
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for \u003cstock\u003e Stock in My Stock section",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;",
  "rows": [
    {
      "cells": [
        "stock",
        "numberOfTrades"
      ],
      "line": 21,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;1"
    },
    {
      "cells": [
        "TEA",
        "1"
      ],
      "line": 22,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;2"
    },
    {
      "cells": [
        "POP",
        "2"
      ],
      "line": 23,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;3"
    },
    {
      "cells": [
        "ALE",
        "3"
      ],
      "line": 24,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;4"
    },
    {
      "cells": [
        "GIN",
        "5"
      ],
      "line": 25,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;5"
    },
    {
      "cells": [
        "JOE",
        "10"
      ],
      "line": 26,
      "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1673514529,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made 1 trades for TEA stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for TEA Stock in My Stock section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 593158319,
  "status": "passed"
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
  "duration": 399271546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEA",
      "offset": 51
    }
  ],
  "location": "GeometricMeanStepDef.i_see_calculated_Geometric_Mean_for_all_prices_for_Stock_in_My_Stock_section(String)"
});
formatter.result({
  "duration": 121825151,
  "status": "passed"
});
formatter.after({
  "duration": 168533515,
  "status": "passed"
});
formatter.before({
  "duration": 1676066103,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made 2 trades for POP stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for POP Stock in My Stock section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 463315574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 539036622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POP",
      "offset": 51
    }
  ],
  "location": "GeometricMeanStepDef.i_see_calculated_Geometric_Mean_for_all_prices_for_Stock_in_My_Stock_section(String)"
});
formatter.result({
  "duration": 95650351,
  "status": "passed"
});
formatter.after({
  "duration": 115759559,
  "status": "passed"
});
formatter.before({
  "duration": 1611241980,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made 3 trades for ALE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for ALE Stock in My Stock section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 441953169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
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
  "duration": 760076801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALE",
      "offset": 51
    }
  ],
  "location": "GeometricMeanStepDef.i_see_calculated_Geometric_Mean_for_all_prices_for_Stock_in_My_Stock_section(String)"
});
formatter.result({
  "duration": 101069212,
  "status": "passed"
});
formatter.after({
  "duration": 117007728,
  "status": "passed"
});
formatter.before({
  "duration": 1689125611,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made 5 trades for GIN stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for GIN Stock in My Stock section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 439116836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
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
  "duration": 1111108960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GIN",
      "offset": 51
    }
  ],
  "location": "GeometricMeanStepDef.i_see_calculated_Geometric_Mean_for_all_prices_for_Stock_in_My_Stock_section(String)"
});
formatter.result({
  "duration": 91422444,
  "status": "passed"
});
formatter.after({
  "duration": 114459162,
  "status": "passed"
});
formatter.before({
  "duration": 1674739715,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Calculate Geometric Mean for all prices for a given stock",
  "description": "",
  "id": "geometric-mean-calculation-for-all-prices-for-a-given-stock;calculate-geometric-mean-for-all-prices-for-a-given-stock;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I made 10 trades for JOE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 8
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 9
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 10
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 13
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 14
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 15
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 16
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 17
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see calculated Geometric Mean for all prices for JOE Stock in My Stock section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 444237079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    },
    {
      "val": "JOE",
      "offset": 21
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 2048819957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOE",
      "offset": 51
    }
  ],
  "location": "GeometricMeanStepDef.i_see_calculated_Geometric_Mean_for_all_prices_for_Stock_in_My_Stock_section(String)"
});
formatter.result({
  "duration": 92090749,
  "status": "passed"
});
formatter.after({
  "duration": 160266970,
  "status": "passed"
});
formatter.uri("features/recordTrade.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# For a given stock, record a trade with timestamp, quantity of shares, buy or sell indicator and traded price"
    }
  ],
  "line": 4,
  "name": "Record a trade",
  "description": "",
  "id": "record-a-trade",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1582429366,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 434622186,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "# User input validation - positive"
    }
  ],
  "line": 10,
  "name": "Trade is submitted successfully if all required fields are filled in",
  "description": "",
  "id": "record-a-trade;trade-is-submitted-successfully-if-all-required-fields-are-filled-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 12
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The trade is recorded in Recent Trades section",
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 362863260,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.trade_is_recorded_in_recent_trades_section()"
});
formatter.result({
  "duration": 36083670,
  "status": "passed"
});
formatter.after({
  "duration": 162545932,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "# User input validation - negative"
    }
  ],
  "line": 17,
  "name": "Recorded trade cannot be submitted if some input fields are empty",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I attempt to made a trade with \u003cmissingInput\u003e missing input",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Trade with missing \u003cmissingInput\u003e input is not recorded",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;",
  "rows": [
    {
      "cells": [
        "missingInput"
      ],
      "line": 22,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;1"
    },
    {
      "cells": [
        "Stock"
      ],
      "line": 23,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;2"
    },
    {
      "cells": [
        "Price"
      ],
      "line": 24,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;3"
    },
    {
      "cells": [
        "Quantity"
      ],
      "line": 25,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1588086524,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 449919643,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Recorded trade cannot be submitted if some input fields are empty",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I attempt to made a trade with Stock missing input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Trade with missing Stock input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 31
    }
  ],
  "location": "RecordTradeStepDef.i_attempt_to_made_a_trade_with_Stock_missing_input(String)"
});
formatter.result({
  "duration": 252206632,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 49029726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 25054808,
  "status": "passed"
});
formatter.after({
  "duration": 185303442,
  "status": "passed"
});
formatter.before({
  "duration": 1596220931,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 445100221,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Recorded trade cannot be submitted if some input fields are empty",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I attempt to made a trade with Price missing input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Trade with missing Price input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 31
    }
  ],
  "location": "RecordTradeStepDef.i_attempt_to_made_a_trade_with_Stock_missing_input(String)"
});
formatter.result({
  "duration": 280720771,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 59580356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 25533156,
  "status": "passed"
});
formatter.after({
  "duration": 127984354,
  "status": "passed"
});
formatter.before({
  "duration": 1668700855,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 439806208,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Recorded trade cannot be submitted if some input fields are empty",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I attempt to made a trade with Quantity missing input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Trade with missing Quantity input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 31
    }
  ],
  "location": "RecordTradeStepDef.i_attempt_to_made_a_trade_with_Stock_missing_input(String)"
});
formatter.result({
  "duration": 268893530,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 63660439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 25580292,
  "status": "passed"
});
formatter.after({
  "duration": 108842497,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "#     |      BuyOrSell    |"
    },
    {
      "line": 28,
      "value": "# User input validation - negative(Edge case)"
    }
  ],
  "line": 29,
  "name": "Recorded trade cannot be submitted if some input fields are entered and then deleted",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter all required inputs to make a trade",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I then delete \u003cmissingInput\u003e input",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Trade with missing \u003cmissingInput\u003e input is not recorded",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;",
  "rows": [
    {
      "cells": [
        "missingInput"
      ],
      "line": 35,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;1"
    },
    {
      "cells": [
        "Stock"
      ],
      "line": 36,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;2"
    },
    {
      "cells": [
        "Price"
      ],
      "line": 37,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;3"
    },
    {
      "cells": [
        "Quantity"
      ],
      "line": 38,
      "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1686557293,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 431165160,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Recorded trade cannot be submitted if some input fields are entered and then deleted",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter all required inputs to make a trade",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I then delete Stock input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Trade with missing Stock input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RecordTradeStepDef.i_enter_all_required_inputs_to_make_a_trade()"
});
formatter.result({
  "duration": 318235918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 14
    }
  ],
  "location": "RecordTradeStepDef.i_then_delete_Stock_input(String)"
});
formatter.result({
  "duration": 87745667,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 72180406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 27647073,
  "error_message": "org.junit.ComparisonFailure: Trade with missing Stock input was recorded without the required data expected:\u003c[You currently have no entries to display.]\u003e but was:\u003c[17/06/2019, 15:14:57]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pageObjects.TradePage.tradeRecordExists(TradePage.java:200)\n\tat stepDefs.RecordTradeStepDef.trade_is_not_recorded(RecordTradeStepDef.java:145)\n\tat ✽.Then Trade with missing Stock input is not recorded(features/recordTrade.feature:33)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 811383600,
  "status": "passed"
});
formatter.before({
  "duration": 1985704218,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 443796077,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Recorded trade cannot be submitted if some input fields are entered and then deleted",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter all required inputs to make a trade",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I then delete Price input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Trade with missing Price input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RecordTradeStepDef.i_enter_all_required_inputs_to_make_a_trade()"
});
formatter.result({
  "duration": 333193023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 14
    }
  ],
  "location": "RecordTradeStepDef.i_then_delete_Stock_input(String)"
});
formatter.result({
  "duration": 38272267,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 101543106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 35557290,
  "error_message": "org.junit.ComparisonFailure: Trade with missing Price input was recorded without the required data expected:\u003c[You currently have no entries to display.]\u003e but was:\u003c[17/06/2019, 15:15:01]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pageObjects.TradePage.tradeRecordExists(TradePage.java:200)\n\tat stepDefs.RecordTradeStepDef.trade_is_not_recorded(RecordTradeStepDef.java:149)\n\tat ✽.Then Trade with missing Price input is not recorded(features/recordTrade.feature:33)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 840600831,
  "status": "passed"
});
formatter.before({
  "duration": 2008962880,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 458737436,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Recorded trade cannot be submitted if some input fields are entered and then deleted",
  "description": "",
  "id": "record-a-trade;recorded-trade-cannot-be-submitted-if-some-input-fields-are-entered-and-then-deleted;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter all required inputs to make a trade",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I then delete Quantity input",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Trade with missing Quantity input is not recorded",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RecordTradeStepDef.i_enter_all_required_inputs_to_make_a_trade()"
});
formatter.result({
  "duration": 290593554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 14
    }
  ],
  "location": "RecordTradeStepDef.i_then_delete_Stock_input(String)"
});
formatter.result({
  "duration": 30740998,
  "status": "passed"
});
formatter.match({
  "location": "RecordTradeStepDef.i_click_on_Submit_button()"
});
formatter.result({
  "duration": 90533114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 19
    }
  ],
  "location": "RecordTradeStepDef.trade_is_not_recorded(String)"
});
formatter.result({
  "duration": 35346880,
  "error_message": "org.junit.ComparisonFailure: Trade with missing Quantity input was recorded without the required data expected:\u003c[You currently have no entries to display.]\u003e but was:\u003c[17/06/2019, 15:15:05]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pageObjects.TradePage.tradeRecordExists(TradePage.java:200)\n\tat stepDefs.RecordTradeStepDef.trade_is_not_recorded(RecordTradeStepDef.java:153)\n\tat ✽.Then Trade with missing Quantity input is not recorded(features/recordTrade.feature:33)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 879087315,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 39,
      "value": "#     |      BuyOrSell    |"
    },
    {
      "line": 42,
      "value": "# Trade record validation"
    }
  ],
  "line": 43,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has \u003cheader\u003e header",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;",
  "rows": [
    {
      "cells": [
        "header"
      ],
      "line": 50,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;1"
    },
    {
      "cells": [
        "Transaction Date"
      ],
      "line": 51,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;2"
    },
    {
      "cells": [
        "Stock"
      ],
      "line": 52,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;3"
    },
    {
      "cells": [
        "Price"
      ],
      "line": 53,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;4"
    },
    {
      "cells": [
        "No. Shares Purchased"
      ],
      "line": 54,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;5"
    },
    {
      "cells": [
        "Buy or Sell"
      ],
      "line": 55,
      "id": "record-a-trade;recorded-trade-contains-required-headers;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1932386815,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 449668674,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has Transaction Date header",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 358104981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Date",
      "offset": 21
    }
  ],
  "location": "RecordTradeStepDef.the_trade_record_has_the_following_headers(String)"
});
formatter.result({
  "duration": 68106069,
  "status": "passed"
});
formatter.after({
  "duration": 157780085,
  "status": "passed"
});
formatter.before({
  "duration": 1658335919,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 429926665,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has Stock header",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 364199543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 21
    }
  ],
  "location": "RecordTradeStepDef.the_trade_record_has_the_following_headers(String)"
});
formatter.result({
  "duration": 64636895,
  "status": "passed"
});
formatter.after({
  "duration": 117608051,
  "status": "passed"
});
formatter.before({
  "duration": 1701900955,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 434329861,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has Price header",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 363305425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 21
    }
  ],
  "location": "RecordTradeStepDef.the_trade_record_has_the_following_headers(String)"
});
formatter.result({
  "duration": 70228267,
  "status": "passed"
});
formatter.after({
  "duration": 124190112,
  "status": "passed"
});
formatter.before({
  "duration": 1626569543,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 438161829,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has No. Shares Purchased header",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 368676577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No. Shares Purchased",
      "offset": 21
    }
  ],
  "location": "RecordTradeStepDef.the_trade_record_has_the_following_headers(String)"
});
formatter.result({
  "duration": 72105825,
  "status": "passed"
});
formatter.after({
  "duration": 114892644,
  "status": "passed"
});
formatter.before({
  "duration": 1702318319,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 435106868,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Recorded trade contains required headers",
  "description": "",
  "id": "record-a-trade;recorded-trade-contains-required-headers;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 45
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The trade record has Buy or Sell header",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 353411778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buy or Sell",
      "offset": 21
    }
  ],
  "location": "RecordTradeStepDef.the_trade_record_has_the_following_headers(String)"
});
formatter.result({
  "duration": 5199630723,
  "error_message": "java.lang.AssertionError: WebElement is NOT visible, Exception: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/thead[1]/tr[1]/td[5]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat pageObjects.BasePage.WaitUntilWebElementIsVisible(BasePage.java:229)\n\tat pageObjects.TradePage.assertDisplayedValueTrades(TradePage.java:149)\n\tat stepDefs.RecordTradeStepDef.the_trade_record_has_the_following_headers(RecordTradeStepDef.java:38)\n\tat ✽.Then The trade record has Buy or Sell header(features/recordTrade.feature:48)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 831744752,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in \u003cheader\u003e fields",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;",
  "rows": [
    {
      "cells": [
        "header"
      ],
      "line": 65,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;1"
    },
    {
      "cells": [
        "Transaction Date"
      ],
      "line": 66,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;2"
    },
    {
      "cells": [
        "Stock"
      ],
      "line": 67,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;3"
    },
    {
      "cells": [
        "Price"
      ],
      "line": 68,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;4"
    },
    {
      "cells": [
        "No. Shares Purchased"
      ],
      "line": 69,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;5"
    },
    {
      "cells": [
        "Buy or Sell"
      ],
      "line": 70,
      "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2131661189,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 462733996,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in Transaction Date fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 409743268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Date",
      "offset": 47
    }
  ],
  "location": "RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(String)"
});
formatter.result({
  "duration": 74597406,
  "status": "passed"
});
formatter.after({
  "duration": 155545459,
  "status": "passed"
});
formatter.before({
  "duration": 1758234150,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 443299931,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in Stock fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 384744279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 47
    }
  ],
  "location": "RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(String)"
});
formatter.result({
  "duration": 73705198,
  "status": "passed"
});
formatter.after({
  "duration": 155008618,
  "status": "passed"
});
formatter.before({
  "duration": 1586177415,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 445628386,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in Price fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 432423141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 47
    }
  ],
  "location": "RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(String)"
});
formatter.result({
  "duration": 80894687,
  "status": "passed"
});
formatter.after({
  "duration": 157026434,
  "status": "passed"
});
formatter.before({
  "duration": 1712163528,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 440273787,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in No. Shares Purchased fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 427938098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No. Shares Purchased",
      "offset": 47
    }
  ],
  "location": "RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(String)"
});
formatter.result({
  "duration": 89723767,
  "status": "passed"
});
formatter.after({
  "duration": 149765524,
  "status": "passed"
});
formatter.before({
  "duration": 1683017653,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 438692013,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Recorded trades are populated with the trade data",
  "description": "",
  "id": "record-a-trade;recorded-trades-are-populated-with-the-trade-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I made trades with the following data",
  "rows": [
    {
      "cells": [
        "Stock",
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 59
    },
    {
      "cells": [
        "TEA",
        "100",
        "20",
        "Sell"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The trade records have trade data populated in Buy or Sell fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SharedStepDef.i_made_trades_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 352350481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buy or Sell",
      "offset": 47
    }
  ],
  "location": "RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(String)"
});
formatter.result({
  "duration": 5155875508,
  "error_message": "java.lang.AssertionError: WebElement is NOT visible, Exception: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat pageObjects.BasePage.WaitUntilWebElementIsVisible(BasePage.java:229)\n\tat pageObjects.TradePage.assertValuePopulatedTrades(TradePage.java:167)\n\tat stepDefs.RecordTradeStepDef.the_trade_records_has_trade_data_populated_in_fields(RecordTradeStepDef.java:67)\n\tat ✽.Then The trade records have trade data populated in Buy or Sell fields(features/recordTrade.feature:62)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 844653383,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "# Trade record validation (boundary value analysis)"
    }
  ],
  "line": 74,
  "name": "I can record a required number of trades consequently",
  "description": "",
  "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I made \u003cnumberOfTrades\u003e trades for \u003cstock\u003e stock with the following data",
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 76
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 77
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 78
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 79
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 80
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 81
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 82
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 83
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 84
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 85
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 86
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 87
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 88
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 89
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 90
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 91
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 92
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 93
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 94
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 95
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 96
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "\u003cnumberOfTrades\u003e trades for \u003cstock\u003e Stock are successfully recorded in Recent Trades section",
  "keyword": "Then "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;",
  "rows": [
    {
      "cells": [
        "stock",
        "numberOfTrades"
      ],
      "line": 99,
      "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;1"
    },
    {
      "cells": [
        "TEA",
        "1"
      ],
      "line": 100,
      "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;2"
    },
    {
      "cells": [
        "POP",
        "2"
      ],
      "line": 101,
      "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;3"
    },
    {
      "cells": [
        "ALE",
        "20"
      ],
      "line": 102,
      "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2051131653,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 430025191,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "I can record a required number of trades consequently",
  "description": "",
  "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I made 1 trades for TEA stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 76
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 77
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 78
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 79
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 80
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 81
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 82
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 83
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 84
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 85
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 86
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 87
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 88
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 89
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 90
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 91
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 92
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 93
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 94
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 95
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 96
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "1 trades for TEA Stock are successfully recorded in Recent Trades section",
  "matchedColumns": [
    0,
    1
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
  "duration": 382846024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 0
    },
    {
      "val": "TEA",
      "offset": 13
    }
  ],
  "location": "RecordTradeStepDef.trades_for_Stock_are_successfully_recorded_in_Recent_Trades_section(Integer,String)"
});
formatter.result({
  "duration": 18239304,
  "status": "passed"
});
formatter.after({
  "duration": 169612715,
  "status": "passed"
});
formatter.before({
  "duration": 1682953656,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 444498352,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "I can record a required number of trades consequently",
  "description": "",
  "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I made 2 trades for POP stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 76
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 77
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 78
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 79
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 80
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 81
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 82
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 83
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 84
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 85
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 86
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 87
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 88
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 89
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 90
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 91
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 92
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 93
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 94
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 95
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 96
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "2 trades for POP Stock are successfully recorded in Recent Trades section",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 584742420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    },
    {
      "val": "POP",
      "offset": 13
    }
  ],
  "location": "RecordTradeStepDef.trades_for_Stock_are_successfully_recorded_in_Recent_Trades_section(Integer,String)"
});
formatter.result({
  "duration": 18053288,
  "status": "passed"
});
formatter.after({
  "duration": 126065948,
  "status": "passed"
});
formatter.before({
  "duration": 1666077787,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 434578623,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "I can record a required number of trades consequently",
  "description": "",
  "id": "record-a-trade;i-can-record-a-required-number-of-trades-consequently;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I made 20 trades for ALE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 76
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 77
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 78
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 79
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 80
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 81
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 82
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 83
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 84
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 85
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 86
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 87
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 88
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 89
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 90
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 91
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 92
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 93
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 94
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 95
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 96
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "20 trades for ALE Stock are successfully recorded in Recent Trades section",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 7
    },
    {
      "val": "ALE",
      "offset": 21
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 3944716401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 0
    },
    {
      "val": "ALE",
      "offset": 14
    }
  ],
  "location": "RecordTradeStepDef.trades_for_Stock_are_successfully_recorded_in_Recent_Trades_section(Integer,String)"
});
formatter.result({
  "duration": 15091846,
  "status": "passed"
});
formatter.after({
  "duration": 148643150,
  "status": "passed"
});
formatter.uri("features/volumeWeightedStockPrice.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# For a given stock,  calculate Volume Weighted Stock Price based on trades in past 15 minutes"
    }
  ],
  "line": 3,
  "name": "Volume Weighted Stock Price Calculation for a given stocks",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I made \u003cnumberOfTrades\u003e trades for \u003cstock\u003e stock with the following data",
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for \u003cstock\u003e stock for all trades",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;",
  "rows": [
    {
      "cells": [
        "stock",
        "numberOfTrades"
      ],
      "line": 24,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;1"
    },
    {
      "cells": [
        "TEA",
        "1"
      ],
      "line": 25,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;2"
    },
    {
      "cells": [
        "POP",
        "2"
      ],
      "line": 26,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;3"
    },
    {
      "cells": [
        "ALE",
        "3"
      ],
      "line": 27,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;4"
    },
    {
      "cells": [
        "GIN",
        "5"
      ],
      "line": 28,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;5"
    },
    {
      "cells": [
        "JOE",
        "10"
      ],
      "line": 29,
      "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1766237799,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 465730687,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
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
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for TEA stock for all trades",
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
  "duration": 418374973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEA",
      "offset": 49
    }
  ],
  "location": "VolumeWeightedStockPriceStepDef.i_see_calculated_Volume_Weighted_Stock_Price_for_stock_for_all_trades(String)"
});
formatter.result({
  "duration": 104155749,
  "status": "passed"
});
formatter.after({
  "duration": 110412049,
  "status": "passed"
});
formatter.before({
  "duration": 1630634259,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 453975957,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I made 2 trades for POP stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for POP stock for all trades",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 540323062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POP",
      "offset": 49
    }
  ],
  "location": "VolumeWeightedStockPriceStepDef.i_see_calculated_Volume_Weighted_Stock_Price_for_stock_for_all_trades(String)"
});
formatter.result({
  "duration": 92223123,
  "status": "passed"
});
formatter.after({
  "duration": 119366878,
  "status": "passed"
});
formatter.before({
  "duration": 1685163146,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 482614151,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I made 3 trades for ALE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for ALE stock for all trades",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
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
  "duration": 811792815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALE",
      "offset": 49
    }
  ],
  "location": "VolumeWeightedStockPriceStepDef.i_see_calculated_Volume_Weighted_Stock_Price_for_stock_for_all_trades(String)"
});
formatter.result({
  "duration": 88199853,
  "status": "passed"
});
formatter.after({
  "duration": 127506319,
  "status": "passed"
});
formatter.before({
  "duration": 1690484869,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 446682634,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I made 5 trades for GIN stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for GIN stock for all trades",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
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
  "duration": 1137888895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GIN",
      "offset": 49
    }
  ],
  "location": "VolumeWeightedStockPriceStepDef.i_see_calculated_Volume_Weighted_Stock_Price_for_stock_for_all_trades(String)"
});
formatter.result({
  "duration": 90169453,
  "status": "passed"
});
formatter.after({
  "duration": 114888212,
  "status": "passed"
});
formatter.before({
  "duration": 1677818757,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Simple Stock page",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedStepDef.i_am_on_Simple_Stock_page()"
});
formatter.result({
  "duration": 455039110,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Calculate Volume Weighted Stock Price for a given stock",
  "description": "",
  "id": "volume-weighted-stock-price-calculation-for-a-given-stocks;calculate-volume-weighted-stock-price-for-a-given-stock;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I made 10 trades for JOE stock with the following data",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Price",
        "Quantity",
        "BuyOrSell"
      ],
      "line": 10
    },
    {
      "cells": [
        "100",
        "90",
        "Buy"
      ],
      "line": 11
    },
    {
      "cells": [
        "110",
        "100",
        "Buy"
      ],
      "line": 12
    },
    {
      "cells": [
        "105",
        "121",
        "Sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "60",
        "201",
        "Sell"
      ],
      "line": 14
    },
    {
      "cells": [
        "65",
        "199",
        "Buy"
      ],
      "line": 15
    },
    {
      "cells": [
        "68",
        "280",
        "Buy"
      ],
      "line": 16
    },
    {
      "cells": [
        "100",
        "85",
        "Sell"
      ],
      "line": 17
    },
    {
      "cells": [
        "107",
        "80",
        "Sell"
      ],
      "line": 18
    },
    {
      "cells": [
        "110",
        "86",
        "Buy"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "55",
        "Sell"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see calculated Volume Weighted Stock Price for JOE stock for all trades",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    },
    {
      "val": "JOE",
      "offset": 21
    }
  ],
  "location": "SharedStepDef.i_made_trades_for_stock_with_the_following_data(Integer,String,DataTable)"
});
formatter.result({
  "duration": 2040456839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOE",
      "offset": 49
    }
  ],
  "location": "VolumeWeightedStockPriceStepDef.i_see_calculated_Volume_Weighted_Stock_Price_for_stock_for_all_trades(String)"
});
formatter.result({
  "duration": 93832032,
  "status": "passed"
});
formatter.after({
  "duration": 168317171,
  "status": "passed"
});
});