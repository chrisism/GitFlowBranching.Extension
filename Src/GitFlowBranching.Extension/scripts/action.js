/// <reference path="bootstrapper.ts" />
define(["require", "exports", "TFS/WorkItemTracking/RestClient"], function (require, exports, RestClient) {
    "use strict";
    var GitFlowBranchActionHandler = (function () {
        function GitFlowBranchActionHandler() {
        }
        GitFlowBranchActionHandler.prototype.execute = function (actionContext) {
            var _this = this;
            alert('Sorry, nog niet klaar');
            var client = RestClient.getClient();
            var project = VSS.getWebContext().project.name;
            var itemId = actionContext.workItemIds[0];
            client.getWorkItem(itemId, ["System.Title"]).then(function (workItem) {
                var title = workItem.fields["System.Title"];
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
                    dialogService.openDialog(dialogContributionId, dialogOptions).then(function (dialog) {
                        dialog.getContributionInstance("gitFlowBranchDialog").then(function (dialogInstance) {
                            var values = {
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
        };
        GitFlowBranchActionHandler.prototype.createBranche = function () {
            console.log('ok');
        };
        return GitFlowBranchActionHandler;
    }());
    exports.GitFlowBranchActionHandler = GitFlowBranchActionHandler;
    VSS.register("gitflow-branch", function (context) {
        return new GitFlowBranchActionHandler();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=action.js.map