/// <reference path="bootstrapper.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var BranchDialog = (function () {
        function BranchDialog() {
        }
        BranchDialog.prototype.setFormValues = function (values) {
            var name = values.name;
            if (values.name === "") {
                name = "";
            }
            $("#gitBranchName").val(values.name);
            $("#artifact-name").val("#" + values.workItemId + " " + values.workItemName);
        };
        BranchDialog.prototype.parseWorkItemTitleToBrancheName = function (workItemTitle) {
            workItemTitle = workItemTitle.replace(" ", "_");
            workItemTitle = workItemTitle.replace(" ", "_");
            workItemTitle = workItemTitle.replace("\\", "");
            return workItemTitle;
        };
        return BranchDialog;
    }());
    exports.BranchDialog = BranchDialog;
    VSS.register("gitFlowBranchDialog", function (context) {
        return new BranchDialog();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=branchDialog.js.map