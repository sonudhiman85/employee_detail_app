/*global QUnit*/

sap.ui.define([
	"com/demo/employee/employeedetailapp/controller/Employeepage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Employeepage Controller");

	QUnit.test("I should test the Employeepage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
