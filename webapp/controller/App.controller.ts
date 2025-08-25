import Controller from 'sap/ui/core/mvc/Controller';
import JSONModel from 'sap/ui/model/json/JSONModel';

/**
 * @namespace com.logaligroup.invoices.controller
 */

export default class App extends Controller {


    public onInit () : void | undefined {
        this.loadView();
    }

    private loadView () : void {
        let oData : {
            recipient: {
                name: string
            }
        } = {
            recipient: {
                name: "World"
            }
        };
        let model = new JSONModel(oData);
        this.getView()?.setModel(model, "view");
    }

}