sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.logaligroup.invoices.controller.App",{

         onInit () {
            this.viewModel();
        },
    
         viewModel ()  {
            let oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView()?.setModel(oModel,"view");
        }
    });
});