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
	
	var _appliedFontsStatictext;
	var _otfDiscretionaryLigatureCheckbox;
	var _cancelButton;

	var _otfWindow = new Window("palette", localize(_global.uiHeadLabel));
	with (_otfWindow) { 
		alignChildren = ["fill","fill"];
		margins = [15,20,20,15]; 
		spacing = 25;
		var _headerGroup = add("group");
		with(_headerGroup) {
			alignChildren = ["fill","fill"];
			var _appliedFontsGroup = add("group");
			with(_appliedFontsGroup) {
				alignChildren = ["center","top"];
				_appliedFontsStatictext = add('statictext', undefined, "");
				with(_appliedFontsStatictext) {
					characters = 60;
					justify = "center";
				} /* END _appliedFontsStatictext */
			} /* END _appliedFontsGroup */
		} /* END _headerGroup */
		var _otfFeatureGroup = add("group");
		with(_otfFeatureGroup) {
			alignChildren = ["fill","fill"];
			var _otfDiscretionaryLigatureGroup = add("group");
			with(_otfDiscretionaryLigatureGroup) {
				margins = [10,10,10,5];
				_otfDiscretionaryLigatureCheckbox = add("checkbox", undefined, "Bedingte Ligaturen");
			} /* END _otfDiscretionaryLigatureGroup */







		} /* END _otfFeatureGroup */
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
	_otfDiscretionaryLigatureCheckbox.onClick = function() {
		var _selection = __getSelection(_otfWindow);
		_selection["otfDiscretionaryLigature"] = this.value;
	};










	_testButton.onClick = function() {
		var _selection = __getSelection(_otfWindow);
		__checkInputs(_selection);
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

	
	/* Eingaben überprüfen */
	__checkInputs(_selection);

	function __checkInputs(_selection) {
		__checkOTFFeature("otfDiscretionaryLigature", _selection, _otfWindow, _otfDiscretionaryLigatureCheckbox);
	} /* END function __checkInputs */ 
	

	/* Show main dialog */
	_otfWindow.show();
	

	return true;
} /* END function __showOTFWindow */


/**
 * Check OpenType Feature
 * @param {String} _otfFeatureName 
 * @param {Text} _selection 
 * @param {Window} _window 
 * @param {ScriptUiItem} _suiItem 
 * @returns {Boolean}
 */
function __checkOTFFeature(_otfFeatureName, _selection, _window, _suiItem) {

	if(!_otfFeatureName || _otfFeatureName.constructor !== String) {
		throw new Error("Argument [_otfFeatureName] must be an String.");
	}
	if(!_window || !(_window instanceof Window)) {
		throw new Error("Argument [_window] must be a Window object.");
	}
	if(!_suiItem || !_suiItem.hasOwnProperty("value")) {
		throw new Error("Argument [_suiItem] must be a ScriptUIItem.");
	}

	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) { 
		_window.text = localize(_global.selectionNotValidAlert);
		return false;
	}
	
	const RED_COLOR = [1,0.35,0.35,1];
	const DIMMED_BLACK_COLOR = [0,0,0,0.05];
	const TRANSPARENT_WHITE_COLOR = [1,1,1,0];

	const _squareBracketRegExp = new RegExp("[\\[\\]]","g");

	const _otfTypeObj = {
		// "":OpenTypeFeature.ALL_SMALL_CAPS_FEATURE, /* "Provides authentic small caps rather than scaled-down versions of the font's regular caps." */
		"otfContextualAlternate":OpenTypeFeature.CONTEXTUAL_ALTERNATES_FEATURE, /* Activates contextual ligatures and connecting alternates. */
		"otfFigureStyle":OpenTypeFeature.DEFAULT_FIGURE_STYLE_FEATURE, /* Applies the default figure style of the current font to figure glyphs. */
		// "":OpenTypeFeature.DENOMINATOR_FEATURE, /* In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator. */
		"otfDiscretionaryLigature":OpenTypeFeature.DISCRETIONARY_LIGATURES_FEATURE, /* Allows the use of optional discretionary ligatures. */
		"otfFraction":OpenTypeFeature.FRACTIONS_FEATURE, /* Reformats numbers separated by a slash, such as 1/2, as fractions. Note: In some fonts, the fractions feature reformats only standard fractions. For information on reformatting non-standard fractions such as 4/13, see denominator feature and numerator feature. */
		"otfJustificationAlternate":OpenTypeFeature.JUSTIFICATION_ALTERNATE, /* Justification alternate */
		// "":OpenTypeFeature.LOW, /* Low. */
		// "":OpenTypeFeature.NUMERATOR_FEATURE, /* In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator. */
		"otfOrdinal":OpenTypeFeature.ORDINAL_FEATURE, /* Superscripts the alpha characters in ordinal numbers. */
		"otfOverlapSwash":OpenTypeFeature.OVERLAP_SWASH, /* Overlap swash */
		// "":OpenTypeFeature.PROPORTIONAL_LINING_FEATURE, /* Gives full-height figures varying widths. */
		// "":OpenTypeFeature.PROPORTIONAL_OLDSTYLE_FEATURE, /* Gives varying-height figures varying widths. */
		"otfStretchedAlternate":OpenTypeFeature.STRETCHED_ALTERNATE, /* Stretched alternate */
		"otfStylisticAlternate":OpenTypeFeature.STYLISTIC_ALTERNATE, /* Stylistic alternate */
		// "":OpenTypeFeature.SUBSCRIPT_FEATURE, /* Sizes lowered glyphs correctly relative to the surrounding characters. */
		// "":OpenTypeFeature.SUPERSCRIPT_FEATURE, /* Sizes raised glyphs correctly relative to the surrounding characters. */
		"otfSwash":OpenTypeFeature.SWASH_FEATURE, /* Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives. */
		// "":OpenTypeFeature.TABULAR_LINING_FEATURE, /* Gives full-height figures fixed, equal width. */
		// "":OpenTypeFeature.TABULAR_OLDSTYLE_FEATURE, /* Gives varying-height figures fixed, equal widths. */
		"otfTitling":OpenTypeFeature.TITLING_FEATURE /* Activates alternative characters used for uppercase titles. */
	}; 

	/* Reset values */
	__applyBackgroundColor(_suiItem.parent, TRANSPARENT_WHITE_COLOR);
	_suiItem.parent.isBackgroundSet = false;
	_suiItem.text = "[" + _suiItem.text.replace(_squareBracketRegExp, "") + "]";
	_suiItem.value = false;


	/* Upadate values */
	var _textStyleRangeArray = _selection.textStyleRanges.everyItem().getElements();

	var _prevOTFFeatureValue;
	var _prevOTFFeatureAvailability;
	
	for(var i=0; i<_textStyleRangeArray.length; i+=1) {

		var _curTextStyleRange = _textStyleRangeArray[i];
		if(!_curTextStyleRange || !_curTextStyleRange.hasOwnProperty(_otfFeatureName) || !_curTextStyleRange.isValid) {
			continue;
		}
		
		var _otfFeatureValue = _curTextStyleRange[_otfFeatureName];
		if(_otfFeatureValue === true) {
			_suiItem.value = true;
		}

		if(_prevOTFFeatureValue !== undefined && _otfFeatureValue !== _prevOTFFeatureValue) {
			__applyBackgroundColor(_suiItem.parent, RED_COLOR);
			_suiItem.parent.helpTip = localize(_global.multipleFeatureValuesAlert);
			_suiItem.parent.isBackgroundSet = true;
		}

		var _appliedFont = _curTextStyleRange.appliedFont;
		if(!_appliedFont || !(_appliedFont instanceof Font) || !_appliedFont.isValid) {
			continue;
		}

		var _otfFeatureAvailability = _otfTypeObj.hasOwnProperty(_otfFeatureName) && _appliedFont.checkOpenTypeFeature(_otfTypeObj[_otfFeatureName]);
		if(_otfFeatureAvailability === true) {
			_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
		} 

		if(_suiItem.parent.isBackgroundSet !== true && _prevOTFFeatureAvailability !== undefined && _otfFeatureAvailability !== _prevOTFFeatureAvailability) {
			__applyBackgroundColor(_suiItem.parent, DIMMED_BLACK_COLOR);
			_suiItem.parent.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
		}

		_prevOTFFeatureAvailability = _otfFeatureAvailability;
		_prevOTFFeatureValue = _otfFeatureValue;
	}
	
	return true;
} /* END function __checkOTFFeature */



/**
 * Hintergrundfarbe für Skript-UI-Item im Dialog zuweisen
 * @param {SUIItem} _suiItem 
 * @param {Boolean} _flag 
 * @returns {Boolean}
 */
function __applyBackgroundColor(_suiItem, _bgColorArray, _flag) {

	if (!_suiItem || !_suiItem.hasOwnProperty("graphics")) { return false; }
	if (!_bgColorArray || !(_bgColorArray instanceof Array) || _bgColorArray.length !== 4) { return false; }

	const _transparentBGColorArray = [1, 1, 1, 0];

	if (_flag === false) {
		_suiItem.graphics.backgroundColor = _suiItem.graphics.newBrush(
			_suiItem.graphics.BrushType.SOLID_COLOR,
			_transparentBGColorArray
		);
	} else {
		_suiItem.graphics.backgroundColor = _suiItem.graphics.newBrush(
			_suiItem.graphics.BrushType.SOLID_COLOR,
			_bgColorArray
		);
	}

	return true;
} /* END function __applyBackgroundColor */














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

	_global.multipleFeatureValuesAlert = {
		en:"The selection has different values for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Werte für diese OpenType-Funktion auf."
	}

	_global.multipleFeatureAvailabilityAlert = {
		en:"The selection has different availability for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Verfügbarkeit für diese OpenType-Funktion auf."
	}
} /* END function __defineLocalizeStrings */