({
    doInit : function(component, event, helper) {
        console.log('Invoices checked!');
    },
    
    startCase : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Case"
        });
        createRecordEvent.fire();
	},
    
    closeModal : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})