Module.register("MMM-json-datatable",{
	defaults: {
		text: "JSON Datatable"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
