import Controller from "sap/ui/core/mvc/Controller";
import Dialog from "sap/m/Dialog";
import Fragment from "sap/ui/core/Fragment";
import MessageToast from "sap/m/MessageToast";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Control from "sap/ui/core/Control";

/**
 * @namespace com.logaligroup.invoices.controller
 */

export default class HelloPanel extends Controller {

    private control: Control[];

    private dialog : Dialog;

    public onInit () : void | undefined {
        console.log(this);
    }

    public onShowHello () : void {

        //    let oResourceModel = <ResourceBundle> (<ResourceModel> this.getOwnerComponent()?.getModel("i18n")).getResourceBundle();
        //    let sText = oResourceModel.getText("helloWord");
        //    MessageToast.show(sText || "no text defined");
    
            let oResourceModel = this.getOwnerComponent()?.getModel("i18n") as ResourceModel;
            let sText = oResourceModel.getProperty("helloWord");
            MessageToast.show(sText || "no text defined");
    }

    public async onOpenDialog () : Promise<void> {
        // this.dialog = await <Promise<Dialog>> this.loadFragment({
        //     name:'com.logaligroup.invoices.fragment.HelloDialog'
        // });

        // this.dialog.open();
        let oView = this.getView();

        if (!this.dialog) {
            this.dialog = await <Promise<Dialog>> Fragment.load({
                id: oView?.getId(),
                name: 'com.logaligroup.invoices.fragment.HelloDialog',
                controller: this
            });
            oView?.addDependent(this.dialog);
        }

        this.dialog.open();
    }
    
    public onCloseDialog () : void {
        this.dialog.close();
    }

}