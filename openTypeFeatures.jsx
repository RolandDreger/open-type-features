/* DESCRIPTION: Test OpenType features of installed fonts */ 

/*
	
		+	Adobe InDesign Version: CS6+
		+	Autor: Roland Dreger
		+	Datum: 30. August 2021
		
		+	Zuletzt aktualisiert: 30. August 2021
		

		+	License (MIT)

			Copyright 2021 Roland Dreger

			Permission is hereby granted, free of charge, to any person obtaining 
			a copy of this software and associated documentation files (the "Software"), 
			to deal in the Software without restriction, including without limitation 
			the rights to use, copy, modify, merge, publish, distribute, sublicense, 
			and/or sell copies of the Software, and to permit persons to whom the 
			Software is furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included 
			in all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
			OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
			THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
			FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
			DEALINGS IN THE SOFTWARE.
		
*/

//@targetengine "openTypeFeatures"

var _global = {};


__defineLocalizeStrings();
__showDialog();



/**
 * Show Dialog
 * @returns {Boolean}
 */
function __showDialog() {
	
	var _otfDialog = new Window("palette", localize(_global.uiHeadLabel));
	with (_otfDialog) { 
		alignChildren = ["fill","fill"];
		margins = [15,20,20,15]; 
		spacing = 25;	 
		
		var _buttonGroup = add("group");
		with(_buttonGroup) {
			spacing = 10;
			var _cancelButton = add("button", undefined, localize(_global.cancelLabel));
			with(_cancelButton) {
				alignment = ["left","bottom"];
				helpTip = localize(_global.closeWindowHelpTip);
			} /* END _cancelButton */
		} /* END _buttonGroup */
	} /* END palette _otfDialog */
 
 
	/* Callbacks */
	

	_cancelButton.onClick = function() {
		_otfDialog.close(2);
	};
	
	_otfDialog.onClose = function() {
		_global = null;
	};


	/* Show main dialog */
	_otfDialog.show();
	
	return true;
} /* END function __showDialog */







/* Deutsch-Englische Dialogtexte und Fehlermeldungen */
function __defineLocalizeStrings() {
	
	_global.uiHeadLabel = {
		en:"OpenType Features (v 1.0)",
		de:"OpenType-Funktionen (v 1.0)"
	};
	
	_global.testGoBackLabel = { 
		en:"Test OpenType features",
		de:"OpenType-Funktionen testen" 
	};
	
	_global.cancelLabel = {
		en:"Close",
		de:"Schlie\u00dfen"
	};
	
	_global.closeWindowHelpTip = {
		en:"Close Window",
		de:"Fenster schlie\u00dfen"
	};
	
	_global.noInsertionPointAlert = {
		en:"Please select some text!",
		de:"Bitte eine Textstelle ausw\u00e4hlen!"
	};
	
	_global.fontNotEvaluableAlert = {
		en:"Font not evaluable!",
		de:"Schrift nicht auswertbar!"
	};
	
	

} /* END function __defineLocalizeStrings */