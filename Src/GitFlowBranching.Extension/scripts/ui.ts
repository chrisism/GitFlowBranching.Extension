/// <reference path="bootstrapper.ts" />

import Services = require("scripts/service")

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
		
		var name = values.name;
		if (values.name === "") {
			name = this.service.parseTextToValidBranchName(values.workItemTitle);
		}
		
		$("#gitBranchName").val(name);
		$('#artifact-name').text(values.workItemTitle);
		$('#artifact-id').text(values.workItemId);
	}

}


VSS.register("gitFlowBranchDialog", function (context) {
	return new BranchDialog();
});

VSS.notifyLoadSucceeded();