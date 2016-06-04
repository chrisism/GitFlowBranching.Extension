/// <reference path="bootstrapper.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var GitFlowBranchService = (function () {
        function GitFlowBranchService() {
        }
        GitFlowBranchService.prototype.parseTextToValidBranchName = function (text) {
            text = text.replace(" ", "_");
            text = text.replace(".", "_");
            text = text.replace("\\", "");
            return text;
        };
        return GitFlowBranchService;
    }());
    exports.GitFlowBranchService = GitFlowBranchService;
});
//# sourceMappingURL=service.js.map