/* DESCRIPTION: Test OpenType features of installed fonts */ 

/*
	
		+	Adobe InDesign Version: CS2020+
		+	Autor: Roland Dreger
		+	Datum: 30. August 2021
		
		+	Zuletzt aktualisiert: 7. September 2021
		

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
	
	if(!_global) { return false; }

	const PANEL_MARGINS = [5,10,5,5];
	const FEATURE_GROUP_MARGINS = [5,5,5,0];
	
	var _appliedFontsStatictext;
	var _otfDiscretionaryLigatureCheckbox;
	var _otfFractionCheckbox;
	var _otfOrdinalCheckbox;
	var _otfSwashCheckbox;
	var _otfTitlingCheckbox;
	var _otfContextualAlternateCheckbox;
	var _capitalizationCheckbox;
	var _positionSuperscriptCheckbox;
	var _positionSubscriptCheckbox;
	var _positionNumeratorCheckbox;
	var _positionDenominatorCheckbox;
			


	var _cancelButton;

	var _otfWindow = new Window("palette", localize(_global.uiHeadLabel));
	with (_otfWindow) { 
		alignChildren = ["fill","fill"];
		margins = [15,20,20,15]; 
		spacing = 20;
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
		var _selectionGroup = add("group");
		with(_selectionGroup) {
			alignChildren = ["fill","fill"];
			/* ++++++++++++ */
			/* + Column 1 + */
			/* ++++++++++++ */
			var _column1Group = add("group");
			with(_column1Group) {
				orientation = "column";
				alignChildren = ["fill","fill"];
				var _otfFeaturePanel = add("panel", undefined, localize(_global.oftFeaturePanelLabel));
				with(_otfFeaturePanel) {
					alignChildren = "left";
					margins = PANEL_MARGINS;
					spacing = 0;
					var _otfDiscretionaryLigatureGroup = add("group");
					with(_otfDiscretionaryLigatureGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfDiscretionaryLigatureCheckbox = add("checkbox", undefined, localize(_global.otfDiscretionaryLigatureCheckboxLabel));
					} /* END _otfDiscretionaryLigatureGroup */
					var _otfFractionGroup = add("group");
					with(_otfFractionGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfFractionCheckbox = add("checkbox", undefined, localize(_global.otfFractionCheckboxCheckboxLabel));
					} /* END _otfFractionGroup */
					var _otfOrdinalGroup = add("group");
					with(_otfOrdinalGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfOrdinalCheckbox = add("checkbox", undefined, localize(_global.otfOrdinalCheckboxCheckboxLabel));
					} /* END _otfOrdinalGroup */
					var _otfSwashGroup = add("group");
					with(_otfSwashGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfSwashCheckbox = add("checkbox", undefined, localize(_global.otfSwashCheckboxCheckboxLabel));
					} /* END _otfSwashGroup */
					var _otfTitlingGroup = add("group");
					with(_otfTitlingGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfTitlingCheckbox = add("checkbox", undefined, localize(_global.otfTitlingCheckboxCheckboxLabel));
					} /* END _otfTitlingGroup */
					var _otfContextualAlternateGroup = add("group");
					with(_otfContextualAlternateGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfContextualAlternateCheckbox = add("checkbox", undefined, localize(_global.otfContextualAlternateCheckboxLabel));
					} /* END _otfContextualAlternateGroup */
					var _capitalizationGroup = add("group");
					with(_capitalizationGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_capitalizationCheckbox = add("checkbox", undefined, localize(_global.capitalizationCheckboxLabel));
					} /* END _capitalizationGroup */
				} /* END _otfFeaturePanel */
			} /* END _column1Group */
			/* ++++++++++++ */
			/* + Column 2 + */
			/* ++++++++++++ */
			var _column2Group = add("group");
			with(_column2Group) {
				orientation = "column";
				alignChildren = ["fill","fill"];
				var _otfPositionPanel = add("panel", undefined,localize(_global.otfPositionPanelLabel)); 
				with(_otfPositionPanel) {
					alignChildren = "left";
					margins = PANEL_MARGINS;
					spacing = 0;
					var _positionSuperscriptGroup = add("group");
					with(_positionSuperscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSuperscriptCheckbox = add("checkbox", undefined, localize(_global.superscriptListLabel));
					} /* END _positionSuperscriptGroup */
					var _positionSubscriptGroup = add("group");
					with(_positionSubscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSubscriptCheckbox = add("checkbox", undefined, localize(_global.subscriptListLabel));
					} /* END _positionSubscriptGroup */
					var _positionNumeratorGroup = add("group");
					with(_positionNumeratorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionNumeratorCheckbox = add("checkbox", undefined, localize(_global.numeratorListLabel));
					} /* END _positionNumeratorGroup */
					var _positionDenominatorGroup = add("group");
					with(_positionDenominatorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionDenominatorCheckbox = add("checkbox", undefined, localize(_global.denominatorListLabel));
					} /* END _positionDenominatorGroup */
				} /* END _positionGroup */
				var _otfDigitPanel = add("panel", undefined,localize(_global.otfDigitPanelLabel));
				with(_otfDigitPanel) {
					alignChildren = "left";
					margins = PANEL_MARGINS;
					spacing = 0;








				} /* END _otfDigitPanel */
			} /* END _column2Group */
			/* ++++++++++++ */
			/* + Column 3 + */
			/* ++++++++++++ */
			var _column3Group = add("group");
			with(_column3Group) {
				orientation = "column";
				alignChildren = ["fill","fill"];

			} /* END _column3Group */
		} /* END _selectionGroup */
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
	/* Features */
	_otfDiscretionaryLigatureCheckbox.onClick = function() {
		__setValue("otfDiscretionaryLigature", this.value, _otfWindow);
	};
	_otfFractionCheckbox.onClick = function() {
		__setValue("otfFraction", this.value, _otfWindow);
	};
	_otfOrdinalCheckbox.onClick = function() {
		__setValue("otfOrdinal", this.value, _otfWindow);
	};
	_otfSwashCheckbox.onClick = function() {
		__setValue("otfSwash", this.value, _otfWindow);
	};
	_otfTitlingCheckbox.onClick = function() {
		__setValue("otfTitling", this.value, _otfWindow);
	};
	_otfContextualAlternateCheckbox.onClick = function() {
		__setValue("otfContextualAlternate", this.value, _otfWindow);
	};
	_capitalizationCheckbox.onClick = function() {
		var _value = (this.value) ? Capitalization.CAP_TO_SMALL_CAP : Capitalization.NORMAL;
		__setValue("capitalization", _value, _otfWindow);
	};
	/* Position */
	_positionSuperscriptCheckbox.onClick = function() {
		var _value = (this.value) ?	_value = Position.OT_SUPERSCRIPT : Position.NORMAL;
		if(this.value) {
			_positionSubscriptCheckbox.value = false;
			_positionNumeratorCheckbox.value = false;
			_positionDenominatorCheckbox.value = false;
		}
		__setValue("position", _value, _otfWindow);
	};
	_positionSubscriptCheckbox.onClick = function() {
		var _value = (this.value) ?	_value = Position.OT_SUBSCRIPT : Position.NORMAL;
		if(this.value) {
			_positionSuperscriptCheckbox.value = false;
			_positionNumeratorCheckbox.value = false;
			_positionDenominatorCheckbox.value = false;
		}
		__setValue("position", _value, _otfWindow);
	};
	_positionNumeratorCheckbox.onClick = function() {
		var _value = (this.value) ?	_value = Position.OT_NUMERATOR : Position.NORMAL;
		if(this.value) {
			_positionSuperscriptCheckbox.value = false;
			_positionSubscriptCheckbox.value = false;
			_positionDenominatorCheckbox.value = false;
		}
		__setValue("position", _value, _otfWindow);
	};
	_positionDenominatorCheckbox.onClick = function() {
		var _value = (this.value) ?	_value = Position.OT_DENOMINATOR : Position.NORMAL;
		if(this.value) {
			_positionSuperscriptCheckbox.value = false;
			_positionSubscriptCheckbox.value = false;
			_positionNumeratorCheckbox.value = false;
		}
		__setValue("position", _value, _otfWindow);
	};





	
	/* ... */

	/* Button for creating character style */


	_positionSubscriptCheckbox.value = true;



	_testButton.onClick = function() {
		__checkInputs(); /* Test-Button ENTFERNEN +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	};

	_cancelButton.onClick = function() {
		_otfWindow.close(2);
	};
	
	_otfWindow.onClose = function() {
		_global = null;
	};


	/* Dialog initialisieren */
	_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);

	
	/* Eingaben überprüfen */
	__checkInputs();

	function __checkInputs() {
		var _selection = __getSelection(_otfWindow);
		__checkOTFFeature("otfDiscretionaryLigature", "DISCRETIONARY_LIGATURES_FEATURE", _selection, _otfWindow, _otfDiscretionaryLigatureCheckbox);
		__checkOTFFeature("otfFraction", "FRACTIONS_FEATURE", _selection, _otfWindow, _otfFractionCheckbox);
		__checkOTFFeature("otfOrdinal", "ORDINAL_FEATURE", _selection, _otfWindow, _otfOrdinalCheckbox);
		__checkOTFFeature("otfSwash", "SWASH_FEATURE", _selection, _otfWindow, _otfSwashCheckbox);
		__checkOTFFeature("otfTitling", "TITLING_FEATURE", _selection, _otfWindow, _otfTitlingCheckbox);
		__checkOTFFeature("otfContextualAlternate", "CONTEXTUAL_ALTERNATES_FEATURE", _selection, _otfWindow, _otfContextualAlternateCheckbox);
		__checkOTFFeature("capitalization", "ALL_SMALL_CAPS_FEATURE", _selection, _otfWindow, _capitalizationCheckbox);
		__checkOTFFeature("position", "SUPERSCRIPT_FEATURE", _selection, _otfWindow, _positionSuperscriptCheckbox);
		__checkOTFFeature("position", "SUBSCRIPT_FEATURE", _selection, _otfWindow, _positionSubscriptCheckbox);
		__checkOTFFeature("position", "NUMERATOR_FEATURE", _selection, _otfWindow, _positionNumeratorCheckbox);
		__checkOTFFeature("position", "DENOMINATOR_FEATURE", _selection, _otfWindow, _positionDenominatorCheckbox);
		

		/* ... */
		_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);
	} /* END function __checkInputs */ 
	

	const _otfTypeObj = {
		"otfDiscretionaryLigature":OpenTypeFeature.DISCRETIONARY_LIGATURES_FEATURE, /* Allows the use of optional discretionary ligatures. */
		"otfFraction":OpenTypeFeature.FRACTIONS_FEATURE, /* Reformats numbers separated by a slash, such as 1/2, as fractions. Note: In some fonts, the fractions feature reformats only standard fractions. For information on reformatting non-standard fractions such as 4/13, see denominator feature and numerator feature. */
		"otfOrdinal":OpenTypeFeature.ORDINAL_FEATURE, /* Superscripts the alpha characters in ordinal numbers. */
		"otfSwash":OpenTypeFeature.SWASH_FEATURE, /* Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives. */
		"otfTitling":OpenTypeFeature.TITLING_FEATURE, /* Activates alternative characters used for uppercase titles. */
		"otfContextualAlternate":OpenTypeFeature.CONTEXTUAL_ALTERNATES_FEATURE, /* Activates contextual ligatures and connecting alternates. */
		"capitalization":OpenTypeFeature.ALL_SMALL_CAPS_FEATURE, /* "Provides authentic small caps rather than scaled-down versions of the font's regular caps." */
		


		"otfFigureStyle":OpenTypeFeature.DEFAULT_FIGURE_STYLE_FEATURE, /* Applies the default figure style of the current font to figure glyphs. */
		// "":OpenTypeFeature.DENOMINATOR_FEATURE, /* In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator. */
		"otfJustificationAlternate":OpenTypeFeature.JUSTIFICATION_ALTERNATE, /* Justification alternate */
		// "":OpenTypeFeature.LOW, /* Low. */
		// "":OpenTypeFeature.NUMERATOR_FEATURE, /* In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator. */
		"otfOverlapSwash":OpenTypeFeature.OVERLAP_SWASH, /* Overlap swash */
		// "":OpenTypeFeature.PROPORTIONAL_LINING_FEATURE, /* Gives full-height figures varying widths. */
		// "":OpenTypeFeature.PROPORTIONAL_OLDSTYLE_FEATURE, /* Gives varying-height figures varying widths. */
		"otfStretchedAlternate":OpenTypeFeature.STRETCHED_ALTERNATE, /* Stretched alternate */
		"otfStylisticAlternate":OpenTypeFeature.STYLISTIC_ALTERNATE, /* Stylistic alternate */
		// "":OpenTypeFeature.SUBSCRIPT_FEATURE, /* Sizes lowered glyphs correctly relative to the surrounding characters. */
		// "":OpenTypeFeature.SUPERSCRIPT_FEATURE, /* Sizes raised glyphs correctly relative to the surrounding characters. */
		// "":OpenTypeFeature.TABULAR_LINING_FEATURE, /* Gives full-height figures fixed, equal width. */
		// "":OpenTypeFeature.TABULAR_OLDSTYLE_FEATURE, /* Gives varying-height figures fixed, equal widths. */
	}; 














	/* Show main dialog */
	_otfWindow.show();
	

	return {
		"otfDiscretionaryLigature":_otfDiscretionaryLigatureCheckbox.value,
		"otfFraction":_otfFractionCheckbox.value,
		"otfOrdinal":_otfOrdinalCheckbox.value,
		"otfSwash":_otfSwashCheckbox.value,
		"otfTitling":_otfTitlingCheckbox.value,
		"otfContextualAlternate":_otfContextualAlternateCheckbox.value,
		"capitalization":(_capitalizationCheckbox.value) ? Capitalization.CAP_TO_SMALL_CAP : Capitalization.NORMAL,
		"position": ((_positionSuperscriptCheckbox.value && Position.OT_SUPERSCRIPT) ||
								(_positionSubscriptCheckbox.value && Position.OT_SUBSCRIPT) ||
								(_positionNumeratorCheckbox.value && Position.OT_NUMERATOR) ||
								(_positionDenominatorCheckbox.value && Position.OT_DENOMINATOR) || 
								Position.NORMAL),



		/* ... */

	};
} /* END function __showOTFWindow */


/**
 * Check OpenType Feature
 * @param {String} _propertyName
 * @param {String} _otfFeatureName 
 * @param {Text} _selection 
 * @param {Window} _window 
 * @param {ScriptUiItem} _suiItem 
 * @returns {Boolean}
 */
function __checkOTFFeature(_propertyName, _otfFeatureName, _selection, _window, _suiItem) {

	if(!_global) { return false; }
	if(!_propertyName || _propertyName.constructor !== String) { return false; }
	if(!_otfFeatureName || _otfFeatureName.constructor !== String) { return false; }
	if(!_window || !(_window instanceof Window)) { return false; }
	if(!_suiItem || !_suiItem.hasOwnProperty("value")) { return false; }

	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) { 
		_window.text = localize(_global.selectionNotValidAlert);
		return false;
	}
	
	const RED_COLOR = [1,0.35,0.35,1];
	const DIMMED_BLACK_COLOR = [0,0,0,0.05];
	const TRANSPARENT_WHITE_COLOR = [1,1,1,0];

	const _squareBracketRegExp = new RegExp("[\\[\\]]","g");

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
		if(!_curTextStyleRange || !_curTextStyleRange.hasOwnProperty(_propertyName) || !_curTextStyleRange.isValid) {
			continue;
		}
		
		var _otfFeatureValue = _curTextStyleRange[_propertyName];
		switch (_propertyName) {
			/* Checkbox: Alles in Kapitälchen */
			case "capitalization":
				if(_otfFeatureValue === Capitalization.CAP_TO_SMALL_CAP) {
					_suiItem.value = true;
				}
				break;
			case "position":
				if(
					(_otfFeatureName === "SUPERSCRIPT_FEATURE" && _otfFeatureValue === Position.OT_SUPERSCRIPT) || 
					(_otfFeatureName === "SUBSCRIPT_FEATURE" && _otfFeatureValue === Position.OT_SUBSCRIPT) ||
					(_otfFeatureName === "NUMERATOR_FEATURE" && _otfFeatureValue === Position.OT_NUMERATOR) ||
					(_otfFeatureName === "DENOMINATOR_FEATURE" && _otfFeatureValue === Position.OT_DENOMINATOR)
					) {
					_suiItem.value = true;
				}
				break;
			/* Checkbox: Standard */
			default:
				if(_otfFeatureValue === true) {
					_suiItem.value = true;
				} 
				break;
		}

		if(_prevOTFFeatureValue !== undefined && _otfFeatureValue !== _prevOTFFeatureValue) {
			__applyBackgroundColor(_suiItem.parent, RED_COLOR);
			_suiItem.helpTip = localize(_global.multipleFeatureValuesAlert);
			_suiItem.parent.helpTip = localize(_global.multipleFeatureValuesAlert);
			_suiItem.parent.isBackgroundSet = true;
		}

		var _appliedFont = _curTextStyleRange.appliedFont;
		if(!_appliedFont || !(_appliedFont instanceof Font) || !_appliedFont.isValid) {
			continue;
		}

		var _otfFeatureAvailability = OpenTypeFeature.hasOwnProperty(_otfFeatureName) && _appliedFont.checkOpenTypeFeature(OpenTypeFeature[_otfFeatureName]);
		if(_otfFeatureAvailability === true) {
			_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
		} 

		if(_suiItem.parent.isBackgroundSet !== true && _prevOTFFeatureAvailability !== undefined && _otfFeatureAvailability !== _prevOTFFeatureAvailability) {
			__applyBackgroundColor(_suiItem.parent, DIMMED_BLACK_COLOR);
			_suiItem.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
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
 * Wert der OTF-Eigenschaft setzen
 * @param {String} _otfFeatureName 
 * @param {Any} _otfFeatureValue 
 * @param {SUIWindow} _otfWindow 
 * @returns {Boolean}
 */
function __setValue(_otfFeatureName, _otfFeatureValue, _window) {

	if(
		!_global || 
		!_otfFeatureName || _otfFeatureName.constructor !== String ||
		!_window || !(_window instanceof Window) ||
		_otfFeatureValue === null || _otfFeatureValue === undefined
	) { 
		_window.text = localize(_global.setValueAlert);
		return false; 
	}

	var _selection = __getSelection(_window);
	if(!_selection || !_selection.hasOwnProperty(_otfFeatureName)) {
		return false;
	}

	try {
		_selection[_otfFeatureName] = _otfFeatureValue;
	} catch(_error) {
		_window.text = _error.message;
		return false;
	}
	
	return true;
} /* END function __setValue */


/**
 * Get current selection
 * @param {Any} _selection 
 * @returns {String}
 */
function __getSelection(_window) {

	if(!_global) { return null; }
	if(!_window || !(_window instanceof Window)) { return null; }

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
 * @returns {String}
 */
function __getAppliedFonts(_window) {

	if(!_global || !_window || !(_window instanceof Window)) { 
		return localize(_global.fontNotEvaluableAlert); 
	}

	var _selection = __getSelection(_window);
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
	
	if(!_font || !(_font instanceof Font) || !_font.isValid) { return false; }
	if(app.documents.length === 0 || app.layoutWindows.length === 0) { return false; }

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
			continue;
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
		en:"OpenType Features (V 1.0)",
		de:"OpenType-Funktionen (V 1.0)"
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

	_global.oftFeaturePanelLabel = {
		en:"Feature",
		de:"Feature"
	};

	_global.otfDiscretionaryLigatureCheckboxLabel = {
		en:"Discretionary Ligatures",
		de:"Bedingte Ligaturen"
	};

	_global.otfFractionCheckboxCheckboxLabel = {
		en:"Fractions",
		de:"Brüche"
	};

	_global.otfOrdinalCheckboxCheckboxLabel = {
		en:"Ordinal",
		de:"Ordinalzeichen"
	};

	_global.otfSwashCheckboxCheckboxLabel = {
		en:"Swash",
		de:"Schwungschrift"
	};

	_global.otfTitlingCheckboxCheckboxLabel = {
		en:"Titling Alternates",
		de:"Titelschriftvarianten"
	};

	_global.otfContextualAlternateCheckboxLabel = {
		en:"Contextual Alternates",
		de:"Kontextbedingte Varianten"
	};

	_global.capitalizationCheckboxLabel = {
		en:"All Small Caps",
		de:"Alles in Kapitälchen"
	};

	_global.superscriptListLabel = {
		en:"Superscript/Superior",
		de:"Hochgestellt"
	};

	_global.subscriptListLabel = {
		en:"Subscript/Inferior",
		de:"Tiefgestellt"
	};
	
	_global.numeratorListLabel = {
		en:"Numerator",
		de:"Zähler"
	};
	
	_global.denominatorListLabel = {
		en:"Denominator",
		de:"Nenner"
	};
	









	_global.otfPositionPanelLabel = {
		en:"Position",
		de:"Position"
	};

	_global.otfDigitPanelLabel = {
		en:"Digit",
		de:"Ziffern"
	};

	_global.setValueAlert = {
		en:"Value could not be set",
		de:"Wert konnte nicht gesetzt werden"
	};


} /* END function __defineLocalizeStrings */