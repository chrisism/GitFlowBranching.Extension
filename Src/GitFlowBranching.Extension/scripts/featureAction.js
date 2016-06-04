/// <reference path="bootstrapper.ts" />
define(["require", "exports", "TFS/WorkItemTracking/RestClient"], function (require, exports, RestClient) {
    "use strict";
    var CreateNewFeatureBranch = (function () {
        function CreateNewFeatureBranch() {
        }
        CreateNewFeatureBranch.prototype.execute = function (actionContext) {
            var _this = this;
            alert('Sorry, nog niet klaar');
            VSS.getService(VSS.ServiceIds.Dialog).then(function (dialogService) {
                // contribution info
                var extInfo = VSS.getExtensionContext();
                var dialogContributionId = extInfo.publisherId + "." + extInfo.extensionId + "." + "gitFlowBranchDialog";
                // Show dialog
                var dialogOptions = {
                    title: "Create a GitFlow branch",
                    draggable: false,
                    modal: false,
                    width: 800,
                    height: 350,
                    okCallback: _this.createBranche,
                    okText: "Create branch"
                };
                var client = RestClient.getClient();
                client.getWorkItem(actionContext.Id).then(function (workItem) {
                    console.log(workItem.fields);
                });
                dialogService.openDialog(dialogContributionId, dialogOptions).then(function (dialog) {
                    dialog.getContributionInstance("gitFlowBranchDialog").then(function (dialogInstance) {
                        dialogInstance.setFormValues({
                            name: "",
                            workItemTitle: "z",
                            workItemId: actionContext.Id
                        });
                        dialog.updateOkButton(true);
                    });
                });
            });
        };
        CreateNewFeatureBranch.prototype.createBranche = function () {
            console.log('ok');
        };
        return CreateNewFeatureBranch;
    }());
    exports.CreateNewFeatureBranch = CreateNewFeatureBranch;
    VSS.register("gitflow-branch-feature-action", function (context) {
        return new CreateNewFeatureBranch();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=featureaction.js.map