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
__showOTFWindow();



/**
 * Show Dialog
 * @returns {Boolean}
 */
function __showOTFWindow() {
	
	var _cancelButton;

	var _otfWindow = new Window("palette", localize(_global.uiHeadLabel));
	with (_otfWindow) { 
		alignChildren = ["fill","fill"];
		margins = [15,20,20,15]; 
		spacing = 25;
		var _appliedFontsGroup = add("group");
		with(_appliedFontsGroup) {
			alignChildren = ["center","top"];
			var _appliedFontsStatictext = add('statictext', undefined, "");
			with(_appliedFontsStatictext) {
				characters = 60;
				justify = "center";
			} /* END _appliedFontsStatictext */
		} /* END _appliedFontsGroup */
		
		var _buttonGroup = add("group");
		with(_buttonGroup) {
			spacing = 10;
			_cancelButton = add("button", undefined, localize(_global.cancelLabel));
			with(_cancelButton) {
				alignment = ["right","bottom"];
				helpTip = localize(_global.closeWindowHelpTip);
			} /* END _cancelButton */

			var _testButton = add("button", undefined, "Testen");
			with(_testButton) {
				alignment = ["right","bottom"];
			} /* END _testButton */

		} /* END _buttonGroup */
	} /* END palette _otfWindow */
 
 
	/* Callbacks */
	_testButton.onClick = function() {
		
	};

	_cancelButton.onClick = function() {
		_otfWindow.close(2);
	};
	
	_otfWindow.onClose = function() {
		_global = null;
	};


	/* Dialog initialisieren */
	var _selection = __getSelection(_otfWindow);
	var _appliedFonts = __getAppliedFonts(_otfWindow, _selection);
	_appliedFontsStatictext.text = _appliedFonts;


	/* Show main dialog */
	_otfWindow.show();
	

	return true;
} /* END function __showOTFWindow */



/* 
	Font.checkOpenTypeFeature()

*/


/**
 * Get current selection
 * @param {Any} _selection 
 * @returns {String}
 */
function __getSelection(_window) {

	if(!_global) {
		throw new Error("Variable [_global] not defined.");
	}
	if(!_window || !(_window instanceof Window)) {
		throw new Error("Argument [_window] must be a Window object.");
	}

	_window.text = localize(_global.uiHeadLabel);

	var _selection = app.properties.selection && app.selection.length === 1 && app.selection[0];
	if(!_selection || !_selection.hasOwnProperty("opentypeFeatures")) {
		_window.text = localize(_global.invalidSelectionAlert);
		return null;
	}

	switch (_selection.constructor.name) {
		case "InsertionPoint":
			_selection = _selection.paragraphs.firstItem();
			break;
	}

	if(!_selection.isValid) {
		_window.text = localize(_global.invalidSelectionAlert);
		return null;
	}

	return _selection;
} /* END function __getSelection */


/**
 * Get applied fonts as string
 * @param {Window} Dialog window
 * @param {Any} _selection 
 * @returns {String}
 */
function __getAppliedFonts(_window, _selection) {

	if(!_global) {
		throw new Error("Variable [_global] not defined.");
	}
	if(!_window || !(_window instanceof Window)) {
		throw new Error("Argument [_window] must be a Window object.");
	}

	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) { 
		return localize(_global.fontNotEvaluableAlert); 
	}

	_window.text = localize(_global.uiHeadLabel); 

	var _textStyleRangeArray = _selection.textStyleRanges.everyItem().getElements();
	var _appliedFontArray = [];

	for(var i=0; i<_textStyleRangeArray.length; i+=1) {

		var _curTextStyleRange = _textStyleRangeArray[i];
		if(!_curTextStyleRange || !_curTextStyleRange.isValid) {
			continue;
		}
		
		var _appliedFont = _curTextStyleRange.appliedFont;
		if(!!_appliedFont && _appliedFont.isValid) {

			var _fontName = _appliedFont.name.replace(/\t/g," ");

			if(!__isFontInstalled(_appliedFont)) {
				_fontName += " (" + localize(_global.fontNotAvaliableAlert) + ")";
			}

			_appliedFontArray.push(_fontName);
		}
	}

	if(_appliedFontArray.length === 0) {
		return localize(_global.fontNotEvaluableAlert);
	}

	_appliedFontArray = __uniqueArray(_appliedFontArray);

	var _appliedFonts = _appliedFontArray.join(", ");

	return _appliedFonts;
} /* END function __getAppliedFonts */


/**
 * Check: Is font installed?
 * @param {Font} _font 
 * @returns {Boolean}
 */
function __isFontInstalled(_font) {
	
	if(!_font || !(_font instanceof Font) || !_font.isValid) { 
		return false;
	}
	if(app.documents.length === 0 || app.layoutWindows.length === 0) {
		return false; 
	}

	var _doc = app.documents.firstItem();
	if(!_doc.isValid) {
		return false;
	}

	var _fontArray = _doc.fonts.everyItem().getElements();
	
	for(var i=0; i<_fontArray.length; i+=1) {
		
		var _curFont = _fontArray[i];
		if(!_curFont || !_curFont.isValid) {
			continue;
		}
		
		if(_curFont.name === _font.name) {
			if(_curFont.status === FontStatus.INSTALLED) {
				return true;
			}
		}
	}

	return false;
} /* END function __isFontInstalled */


/**
 * Array nach mehrfachen Einträgen filtern
 * @param {Array} _inputArray 
 * @returns {Array}
 */
function __uniqueArray(_inputArray) {

	if(!_inputArray || !(_inputArray instanceof Array)) { return []; }

	var _tempObj = {}; 
	var _outputArray = [];
	
	for(var i=0; i<_inputArray.length; i+=1) { 

		var _curItem = _inputArray[i];
		if(!_curItem) {
			continue;
		}

		_tempObj[_curItem.toString()] = _curItem;
	}

	for(var _key in _tempObj) { 
		if(!_tempObj.hasOwnProperty(_key)) {
			return;
		}
		_outputArray.push(_tempObj[_key]); 
	}

	return _outputArray;
} /* END function __uniqueArray */





/**
 * Deutsch-Englische Dialogtexte und Fehlermeldungen
 */
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
	
	_global.invalidSelectionAlert = {
		en:"Please select some text!",
		de:"Bitte eine Textstelle ausw\u00e4hlen!"
	};
	
	_global.fontNotEvaluableAlert = {
		en:"Font not evaluable!",
		de:"Schrift nicht auswertbar!"
	};
	
	_global.fontNotAvaliableAlert = {
		en:"Not avaliable",
		de:"Nicht verfügbar"
	};

	_global.selectionNotValidAlert = {
		en:"Selection not valid!",
		de:"Auswahl nicht (mehr) valide!"
	};
} /* END function __defineLocalizeStrings */