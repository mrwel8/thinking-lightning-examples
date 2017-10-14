({
	saveRecord : function(component, event, helper) {
        component.find("editContact").saveRecord($A.getCallback(function(saveResult) {}));
    }
})