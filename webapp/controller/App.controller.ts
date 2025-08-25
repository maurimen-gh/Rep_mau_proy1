import Controller from 'sap/ui/core/mvc/Controller';
import MessageToast from 'sap/m/MessageToast';
import ResourceModel from 'sap/ui/model/resource/ResourceModel';
import ResourceBundle from 'sap/base/i18n/ResourceBundle';
import JSONModel from 'sap/ui/model/json/JSONModel'

/**
 * @namespace com.logaligroup.invoices.controller
 */

export default class App extends Controller {

    public onInit () : void | undefined {
        this.viewModel();
    }

    private viewModel () : void {
        let oData : {
                recipient: {
                    name: string
                }
        } = {
            recipient: {
                name: "World"
            }
        };
        const oModel = new JSONModel(oData) as JSONModel;
        this.getView()?.setModel(oModel,"view");
    }

}