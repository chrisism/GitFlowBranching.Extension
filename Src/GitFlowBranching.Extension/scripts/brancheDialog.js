/// <reference path="bootstrapper.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var BrancheDialog = (function () {
        function BrancheDialog() {
        }
        BrancheDialog.prototype.setFormValues = function (formValue) {
            $("#gitBrancheName").val(formValue.name);
            $("#artifact-name").val("#" + formValue.workItemId + " " + formValue.workItemName);
        };
        return BrancheDialog;
    }());
    exports.BrancheDialog = BrancheDialog;
    VSS.register("gitFlowBranchDialog", function (context) {
        return new BrancheDialog();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=brancheDialog.js.map