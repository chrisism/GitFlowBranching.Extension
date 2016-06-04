/// <reference path="bootstrapper.ts" />

export class GitFlowBranchService {
	
	public parseTextToValidBranchName(text: string): string {

		text = text.replace(" ", "_");
		text = text.replace(".", "_");
		text = text.replace("\\", "");

		return text;
	}
}