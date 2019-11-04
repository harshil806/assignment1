/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test_git1/demo_git1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});