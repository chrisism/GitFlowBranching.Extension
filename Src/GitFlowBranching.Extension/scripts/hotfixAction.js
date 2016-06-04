/// <reference path="bootstrapper.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var CreateNewHotfixBranch = (function () {
        function CreateNewHotfixBranch() {
        }
        CreateNewHotfixBranch.prototype.execute = function (actionContext) {
            console.log(actionContext);
            alert('Sorry, nog niet klaar');
            VSS.ready(function () {
            });
        };
        return CreateNewHotfixBranch;
    }());
    exports.CreateNewHotfixBranch = CreateNewHotfixBranch;
    VSS.register("gitflow-branch-hotfix-action", function (context) {
        return new CreateNewHotfixBranch();
    });
    VSS.notifyLoadSucceeded();
});
//# sourceMappingURL=hotfixaction.js.map