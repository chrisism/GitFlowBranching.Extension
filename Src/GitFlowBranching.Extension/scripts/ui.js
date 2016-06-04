/// <reference path="bootstrapper.ts" />
define(["require", "exports", "service"], function (require, exports, Services) {
    "use strict";
    var BranchDialog = (function () {
        function BranchDialog() {
            this.service = new Services.GitFlowBranchService();
        }
        BranchDialog.prototype.setFormValues = function (values) {
            console.log(values.workItemTitle);
            var name = values.name;
            if (values.name === "") {
                name = this.service.parseTextToValidBranchName(values.workItemTitle);
            }
            console.log(name);
            $("#gitBranchName").val(name);
            $('#artifact-name').text(name);
            //$("#artifact-name").val("#" + values.workItemId + " " + values.workItemTitle);
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