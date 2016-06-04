/// <reference path="bootstrapper.ts" />

import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import UI = require("ui");


export class GitFlowBranchActionHandler {

	public execute(actionContext) {

		alert('Sorry, nog niet klaar');


		var client = RestClient.getClient();
		var project = VSS.getWebContext().project.name;
		var itemId = actionContext.workItemIds[0];

		client.getWorkItem(itemId, ["System.Title"]).then((workItem: Contracts.WorkItem) => {
			var title:string = workItem.fields["System.Title"];
			
			VSS.getService(VSS.ServiceIds.Dialog).then((dialogService: IHostDialogService) => {

				// contribution info
				var extInfo = VSS.getExtensionContext();
				var dialogContributionId = extInfo.publisherId + "." + extInfo.extensionId + "." + "gitFlowBranchDialog";

				// Show dialog
				var dialogOptions: IHostDialogOptions = {
					title: "Create a GitFlow branch",
					draggable: false,
					modal: false,
					width: 800,
					height: 350,
					okCallback: this.createBranche,
					okText: "Create branch"
				};

				dialogService.openDialog(dialogContributionId, dialogOptions).then((dialog) => {
					
					dialog.getContributionInstance("gitFlowBranchDialog").then((dialogInstance: UI.BranchDialog) => {

						var values: UI.IBranchDialogFields = {
							name: "",
							workItemTitle: title,
							workItemId: itemId,
							workItemType: actionContext.workItemType
						};

						dialogInstance.setFormValues(values);
						dialog.updateOkButton(true);
					});
				});

			});
		});
	}

	public createBranche() {
		console.log('ok');
	}
}


VSS.register("gitflow-branch", function (context) {
	return new GitFlowBranchActionHandler();
});
VSS.notifyLoadSucceeded();