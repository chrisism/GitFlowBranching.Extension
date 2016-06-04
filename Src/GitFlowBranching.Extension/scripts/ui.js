/// <reference path="bootstrapper.ts" />
define(["require", "exports", "scripts/service"], function (require, exports, Services) {
    "use strict";
    var BranchDialog = (function () {
        function BranchDialog() {
            this.service = new Services.GitFlowBranchService();
        }
        BranchDialog.prototype.setFormValues = function (values) {
            var name = values.name;
            if (values.name === "") {
                name = this.service.parseTextToValidBranchName(values.workItemTitle);
            }
            $("#gitBranchName").val(name);
            $('#artifact-name').text(values.workItemTitle);
            $('#artifact-id').text(values.workItemId);
        };
        return BranchDialog;
    }());
    exports.BranchDialog = BranchDialog;
    VSS.register("gitFlowBranchDialog", function (context) {
        return new BranchDialog();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=ui.js.map