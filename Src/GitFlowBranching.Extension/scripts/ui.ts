/// <reference path="bootstrapper.ts" />

import Services = require("service")

export interface IBranchDialogFields {

	name: string;
	workItemTitle: string;
	workItemId: number;
	workItemType: string;
}

export class BranchDialog {

	private service: Services.GitFlowBranchService;

	constructor() {
		this.service = new Services.GitFlowBranchService();
	}

	public setFormValues(values: IBranchDialogFields): void {

		console.log(values.workItemTitle);
		var name = values.name;
		if (values.name === "") {
			name = this.service.parseTextToValidBranchName(values.workItemTitle);
		}

		console.log(name);
		$("#gitBranchName").val(name);
		$('#artifact-name').text(name);
		//$("#artifact-name").val("#" + values.workItemId + " " + values.workItemTitle);
	}

}


VSS.register("gitFlowBranchDialog", function (context) {
	return new BranchDialog();
});

VSS.notifyLoadSucceeded();