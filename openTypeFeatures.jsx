/* DESCRIPTION: Test OpenType features of installed fonts */ 

/*
	
		+	Adobe InDesign Version: CS2020+
		+	Autor: Roland Dreger
		+	Datum: 30. August 2021
		
		+	Zuletzt aktualisiert: 8. September 2021

			OpenTypeFeatures:
			DISCRETIONARY_LIGATURES_FEATURE  ->  Allows the use of optional discretionary ligatures.
			FRACTIONS_FEATURE  ->  Reformats numbers separated by a slash, such as 1/2, as fractions. Note: In some fonts, the fractions feature reformats only standard fractions. For information on reformatting non-standard fractions such as 4/13, see denominator feature and numerator feature.
			ORDINAL_FEATURE  ->  Superscripts the alpha characters in ordinal numbers.
			SWASH_FEATURE  ->  Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
			TITLING_FEATURE  ->  Activates alternative characters used for uppercase titles.
			CONTEXTUAL_ALTERNATES_FEATURE  ->  Activates contextual ligatures and connecting alternates.
			ALL_SMALL_CAPS_FEATURE  ->  "Provides authentic small caps rather than scaled-down versions of the font's regular caps."
			DEFAULT_FIGURE_STYLE_FEATURE  ->  Applies the default figure style of the current font to figure glyphs.
			DENOMINATOR_FEATURE  ->  In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
			NUMERATOR_FEATURE  ->  In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
			PROPORTIONAL_LINING_FEATURE  ->  Gives full-height figures varying widths.
			PROPORTIONAL_OLDSTYLE_FEATURE  ->  Gives varying-height figures varying widths.
			SUBSCRIPT_FEATURE  ->  Sizes lowered glyphs correctly relative to the surrounding characters.
			SUPERSCRIPT_FEATURE  ->  Sizes raised glyphs correctly relative to the surrounding characters.
			TABULAR_LINING_FEATURE  ->  Gives full-height figures fixed, equal width.
			TABULAR_OLDSTYLE_FEATURE  ->  Gives varying-height figures fixed, equal widths.
			STYLISTIC_ALTERNATE  ->  Stylistic alternate Note: Slashed Zero???


			JUSTIFICATION_ALTERNATE  ->  Justification alternate
			LOW  ->  Low.
			OVERLAP_SWASH  ->  Overlap swash
			STRETCHED_ALTERNATE  ->  Stretched alternate
			
		

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
	var _otfSlashedZeroCheckbox;

	var _positionSuperscriptCheckbox;
	var _positionSubscriptCheckbox;
	var _positionNumeratorCheckbox;
	var _positionDenominatorCheckbox;
	
	var _digitTabularLiningCheckbox;
	var _digitProportionalOldstyleCheckbox;
	var _digitProportionalLiningCheckbox;
	var _digitTabularOldstyleCheckbox;
	var _digitDefaultFigureStyleCheckbox;

	var _otfStylisticSet1Checkbox;
	var _otfStylisticSet2Checkbox;
	var _otfStylisticSet3Checkbox;
	var _otfStylisticSet4Checkbox;
	var _otfStylisticSet5Checkbox;
	var _otfStylisticSet6Checkbox;
	var _otfStylisticSet7Checkbox;
	var _otfStylisticSet8Checkbox;
	var _otfStylisticSet9Checkbox;
	var _otfStylisticSet10Checkbox;
	var _otfStylisticSet11Checkbox;
	var _otfStylisticSet12Checkbox;
	var _otfStylisticSet13Checkbox;
	var _otfStylisticSet14Checkbox;
	var _otfStylisticSet15Checkbox;
	var _otfStylisticSet16Checkbox;
	var _otfStylisticSet17Checkbox;
	var _otfStylisticSet18Checkbox;
	var _otfStylisticSet19Checkbox;
	var _otfStylisticSet20Checkbox;
	
	var _positionalFormsGeneralCheckbox;
	var _positionalFormsAutomaticCheckbox;
	var _positionalFormsInitialCheckbox;
	var _positionalFormsMedialCheckbox;
	var _positionalFormsFinalCheckbox;
	var _positionalFormsIsolatedCheckbox;

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
					characters = 40;
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
					alignChildren = ["fill","top"];
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
					var _otfSlashedZeroGroup = add("group");
					with(_otfSlashedZeroGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfSlashedZeroCheckbox = add("checkbox", undefined, localize(_global.otfSlashedZeroCheckboxLabel));
					} /* END _otfSlashedZeroGroup */
				} /* END _otfFeaturePanel */
				var _otfPositionPanel = add("panel", undefined,localize(_global.otfPositionPanelLabel)); 
				with(_otfPositionPanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _positionSuperscriptGroup = add("group");
					with(_positionSuperscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSuperscriptCheckbox = add("checkbox", undefined, localize(_global.positionSuperscriptCheckboxLabel));
					} /* END _positionSuperscriptGroup */
					var _positionSubscriptGroup = add("group");
					with(_positionSubscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSubscriptCheckbox = add("checkbox", undefined, localize(_global.positionSubscriptCheckboxLabel));
					} /* END _positionSubscriptGroup */
					var _positionNumeratorGroup = add("group");
					with(_positionNumeratorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionNumeratorCheckbox = add("checkbox", undefined, localize(_global.positionNumeratorCheckboxLabel));
					} /* END _positionNumeratorGroup */
					var _positionDenominatorGroup = add("group");
					with(_positionDenominatorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionDenominatorCheckbox = add("checkbox", undefined, localize(_global.positionDenominatorCheckboxLabel));
					} /* END _positionDenominatorGroup */
				} /* END _otfPositionPanel */
				var _otfDigitPanel = add("panel", undefined,localize(_global.otfDigitPanelLabel));
				with(_otfDigitPanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _digitTabularLiningGroup = add("group");
					with(_digitTabularLiningGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitTabularLiningCheckbox = add("checkbox", undefined, localize(_global.digitTabularLiningCheckboxLabel));
					} /* END _digitTabularLiningGroup */
					var _digitProportionalOldstyleGroup = add("group");
					with(_digitProportionalOldstyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitProportionalOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitProportionalOldstyleCheckboxLabel));
					} /* END _digitProportionalOldstyleGroup */
					var _digitProportionalLiningGroup = add("group");
					with(_digitProportionalLiningGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitProportionalLiningCheckbox = add("checkbox", undefined, localize(_global.digitProportionalLiningCheckboxLabel));
					} /* END _digitProportionalLiningGroup */
					var _digitTabularOldstyleGroup = add("group");
					with(_digitTabularOldstyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitTabularOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitTabularOldstyleCheckboxLabel));
					} /* END _digitTabularOldstyleGroup */
					var _digitDefaultFigureStyleGroup = add("group");
					with(_digitDefaultFigureStyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitDefaultFigureStyleCheckbox = add("checkbox", undefined, localize(_global.digitDefaultFigureStyleCheckboxLabel));
					} /* END _digitDefaultFigureStyleGroup */
				} /* END _otfDigitPanel */
				var _positionalFormsPanel = add("panel", undefined,localize(_global.positionalFormLabel));
				with(_positionalFormsPanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _positionalFormsGeneralGroup = add("group");
					with(_positionalFormsGeneralGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsGeneralCheckbox = add("checkbox", undefined, localize(_global.positionalFormsGeneralCheckboxLabel));
					} /* END _positionalFormsGeneralGroup */
					var _positionalFormsAutomaticGroup = add("group");
					with(_positionalFormsAutomaticGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsAutomaticCheckbox = add("checkbox", undefined, localize(_global.positionalFormsAutomaticCheckboxLabel));
					} /* END _positionalFormsAutomaticGroup */
					var _positionalFormsInitialGroup = add("group");
					with(_positionalFormsInitialGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsInitialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsInitialCheckboxLabel));
					} /* END _positionalFormsInitialGroup */
					var _positionalFormsMedialGroup = add("group");
					with(_positionalFormsMedialGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsMedialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsMedialCheckboxLabel));
					} /* END _positionalFormsMedialGroup */
					var _positionalFormsFinalGroup = add("group");
					with(_positionalFormsFinalGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsFinalCheckbox = add("checkbox", undefined, localize(_global.positionalFormsFinalCheckboxLabel));
					} /* END _positionalFormsFinalGroup */
					var _positionalFormsIsolatedGroup = add("group");
					with(_positionalFormsIsolatedGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsIsolatedCheckbox = add("checkbox", undefined, localize(_global.positionalFormsIsolatedCheckboxLabel));
					} /* END _positionalFormsIsolatedGroup */
				} /* END _positionalFormsPanel */
			} /* END _column1Group */
			/* ++++++++++++ */
			/* + Column 2 + */
			/* ++++++++++++ */
			var _column2Group = add("group");
			with(_column2Group) {
				orientation = "column";
				alignChildren = ["fill","fill"];
				var _otfStylisticSetsPanel = add("panel", undefined,localize(_global.otfStylisticSetPanelLabel));
				with(_otfStylisticSetsPanel) {
					orientation = "column";
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _otfStylisticSetColumn1Group = add("group");
					with(_otfStylisticSetColumn1Group) {
						orientation = "column";
						alignChildren = ["fill","top"];
						spacing = 0;
						var _otfStylisticSet1Group = add("group");
						with(_otfStylisticSet1Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet1Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "1"));
							_otfStylisticSet1Checkbox.code = 2;
						} /* END _otfStylisticSet1Group */
						var _otfStylisticSet2Group = add("group");
						with(_otfStylisticSet2Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet2Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "2"));
							_otfStylisticSet2Checkbox.code = 4;
						} /* END _otfStylisticSet2Group */
						var _otfStylisticSet3Group = add("group");
						with(_otfStylisticSet3Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet3Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "3"));
							_otfStylisticSet3Checkbox.code = 8;
						} /* END _otfStylisticSet3Group */
						var _otfStylisticSet4Group = add("group");
						with(_otfStylisticSet4Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet4Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "4"));
							_otfStylisticSet4Checkbox.code = 16;
						} /* END _otfStylisticSet4Group */
						var _otfStylisticSet5Group = add("group");
						with(_otfStylisticSet5Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet5Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "5"));
							_otfStylisticSet5Checkbox.code = 32;
						} /* END _otfStylisticSet5Group */
						var _otfStylisticSet6Group = add("group");
						with(_otfStylisticSet6Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet6Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "6"));
							_otfStylisticSet6Checkbox.code = 64;
						} /* END _otfStylisticSet6Group */
						var _otfStylisticSet7Group = add("group");
						with(_otfStylisticSet7Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet7Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "7"));
							_otfStylisticSet7Checkbox.code = 128;
						} /* END _otfStylisticSet7Group */
						var _otfStylisticSet8Group = add("group");
						with(_otfStylisticSet8Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet8Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "8"));
							_otfStylisticSet8Checkbox.code = 256;
						} /* END _otfStylisticSet8Group */
						var _otfStylisticSet9Group = add("group");
						with(_otfStylisticSet9Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet9Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "9"));
							_otfStylisticSet9Checkbox.code = 512;
						} /* END _otfStylisticSet9Group */
						var _otfStylisticSet10Group = add("group");
						with(_otfStylisticSet10Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet10Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "10"));
							_otfStylisticSet10Checkbox.code = 1024;
						} /* END _otfStylisticSet10Group */
					} /* END _otfStylisticSetColumn1Group */
					var _otfStylisticSetColumn2Group = add("group");
					with(_otfStylisticSetColumn2Group) {
						orientation = "column";
						alignChildren = ["fill","top"];
						spacing = 0;
						var _otfStylisticSet11Group = add("group");
						with(_otfStylisticSet11Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet11Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "11"));
							_otfStylisticSet11Checkbox.code = 2048;
						} /* END _otfStylisticSet11Group */
						var _otfStylisticSet12Group = add("group");
						with(_otfStylisticSet12Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet12Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "12"));
							_otfStylisticSet12Checkbox.code = 4096;
						} /* END _otfStylisticSet12Group */
						var _otfStylisticSet13Group = add("group");
						with(_otfStylisticSet13Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet13Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "13"));
							_otfStylisticSet13Checkbox.code = 8192;
						} /* END _otfStylisticSet13Group */
						var _otfStylisticSet14Group = add("group");
						with(_otfStylisticSet14Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet14Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "14"));
							_otfStylisticSet14Checkbox.code = 16384;
						} /* END _otfStylisticSet14Group */
						var _otfStylisticSet15Group = add("group");
						with(_otfStylisticSet15Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet15Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "15"));
							_otfStylisticSet15Checkbox.code = 32768;
						} /* END _otfStylisticSet15Group */
						var _otfStylisticSet16Group = add("group");
						with(_otfStylisticSet16Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet16Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "16"));
							_otfStylisticSet16Checkbox.code = 65536;
						} /* END _otfStylisticSet16Group */
						var _otfStylisticSet17Group = add("group");
						with(_otfStylisticSet17Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet17Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "17"));
							_otfStylisticSet17Checkbox.code = 131072;
						} /* END _otfStylisticSet17Group */
						var _otfStylisticSet18Group = add("group");
						with(_otfStylisticSet18Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet18Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "18"));
							_otfStylisticSet18Checkbox.code = 262144;
						} /* END _otfStylisticSet18Group */
						var _otfStylisticSet19Group = add("group");
						with(_otfStylisticSet19Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet19Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "19"));
							_otfStylisticSet19Checkbox.code = 524288;
						} /* END _otfStylisticSet19Group */
						var _otfStylisticSet20Group = add("group");
						with(_otfStylisticSet20Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet20Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "20"));
							_otfStylisticSet20Checkbox.code = 1048576;
						} /* END _otfStylisticSet20Group */
					} /* END _otfStylisticSetColumn2Group */
				} /* END _otfStylisticSetsPanel */
			} /* END _column2Group */
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
		var _value = (this.value && Capitalization.CAP_TO_SMALL_CAP) || Capitalization.NORMAL;
		__setValue("capitalization", _value, _otfWindow);
	};
	_otfSlashedZeroCheckbox.onClick = function() {
		__setValue("otfSlashedZero", this.value, _otfWindow);
	};
	/* Position */
	_positionSuperscriptCheckbox.onClick = function() {
		_positionSubscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_SUPERSCRIPT) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
	};
	_positionSubscriptCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_SUBSCRIPT) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
	};
	_positionNumeratorCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionSubscriptCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_NUMERATOR) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
	};
	_positionDenominatorCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionSubscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		var _value = (this.value && Position.OT_DENOMINATOR) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
	};
	/* Digits */
	_digitTabularLiningCheckbox.onClick = function() {
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value &&	OTFFigureStyle.TABULAR_LINING) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
	};
	_digitProportionalOldstyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.PROPORTIONAL_OLDSTYLE) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
	};
	_digitProportionalLiningCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.PROPORTIONAL_LINING) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
	};
	_digitTabularOldstyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.TABULAR_OLDSTYLE) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
	};
	_digitDefaultFigureStyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		this.value = true;
		var _value = OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
	};
	/* Formsätze */
	_otfStylisticSet1Checkbox.onClick = 
	_otfStylisticSet2Checkbox.onClick = 
	_otfStylisticSet3Checkbox.onClick = 
	_otfStylisticSet4Checkbox.onClick = 
	_otfStylisticSet5Checkbox.onClick = 
	_otfStylisticSet6Checkbox.onClick = 
	_otfStylisticSet7Checkbox.onClick = 
	_otfStylisticSet8Checkbox.onClick = 
	_otfStylisticSet9Checkbox.onClick = 
	_otfStylisticSet10Checkbox.onClick = 
	_otfStylisticSet11Checkbox.onClick = 
	_otfStylisticSet12Checkbox.onClick = 
	_otfStylisticSet13Checkbox.onClick = 
	_otfStylisticSet14Checkbox.onClick = 
	_otfStylisticSet15Checkbox.onClick = 
	_otfStylisticSet16Checkbox.onClick = 
	_otfStylisticSet17Checkbox.onClick = 
	_otfStylisticSet18Checkbox.onClick = 
	_otfStylisticSet19Checkbox.onClick = 
	_otfStylisticSet20Checkbox.onClick = function() {
		var _value = __getOtfSylisticSetValue(_otfStylisticSetsPanel);
		__setValue("otfStylisticSets", _value, _otfWindow);
	};
	/* Positionalform */
	_positionalFormsGeneralCheckbox.onClick = function() {
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		this.value = true;
		var _value = PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};
	_positionalFormsAutomaticCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.CALCULATE) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};
	_positionalFormsInitialCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.INITIAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};
	_positionalFormsMedialCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.MEDIAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};
	_positionalFormsFinalCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.FINAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};
	_positionalFormsIsolatedCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		var _value = (this.value && PositionalForms.ISOLATED) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
	};

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
		__checkOTFFeature("otfSlashedZero", "STYLISTIC_ALTERNATE", _selection, _otfWindow, _otfSlashedZeroCheckbox);
		__checkOTFFeature("position", "SUPERSCRIPT_FEATURE", _selection, _otfWindow, _positionSuperscriptCheckbox);
		__checkOTFFeature("position", "SUBSCRIPT_FEATURE", _selection, _otfWindow, _positionSubscriptCheckbox);
		__checkOTFFeature("position", "NUMERATOR_FEATURE", _selection, _otfWindow, _positionNumeratorCheckbox);
		__checkOTFFeature("position", "DENOMINATOR_FEATURE", _selection, _otfWindow, _positionDenominatorCheckbox);
		__checkOTFFeature("otfFigureStyle", "TABULAR_LINING_FEATURE", _selection, _otfWindow, _digitTabularLiningCheckbox);
		__checkOTFFeature("otfFigureStyle", "PROPORTIONAL_OLDSTYLE_FEATURE", _selection, _otfWindow, _digitProportionalOldstyleCheckbox);
		__checkOTFFeature("otfFigureStyle", "PROPORTIONAL_LINING_FEATURE", _selection, _otfWindow, _digitProportionalLiningCheckbox);
		__checkOTFFeature("otfFigureStyle", "TABULAR_OLDSTYLE_FEATURE", _selection, _otfWindow, _digitTabularOldstyleCheckbox);
		__checkOTFFeature("otfFigureStyle", "DEFAULT_FIGURE_STYLE_FEATURE", _selection, _otfWindow, _digitDefaultFigureStyleCheckbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet1Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet2Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet3Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet4Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet5Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet6Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet7Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet8Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet9Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet10Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet11Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet12Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet13Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet14Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet15Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet16Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet17Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet18Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet19Checkbox);
		__checkOTFFeature("otfStylisticSets", "", _selection, _otfWindow, _otfStylisticSet20Checkbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_NONE", _selection, _otfWindow, _positionalFormsGeneralCheckbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_CALCULATE", _selection, _otfWindow, _positionalFormsAutomaticCheckbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_INITIAL", _selection, _otfWindow, _positionalFormsInitialCheckbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_MEDIAL", _selection, _otfWindow, _positionalFormsMedialCheckbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_FINAL", _selection, _otfWindow, _positionalFormsFinalCheckbox);
		__checkOTFFeature("positionalForm", "POSITIONAL_FORMS_ISOLATED", _selection, _otfWindow, _positionalFormsIsolatedCheckbox);
		_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);
	} /* END function __checkInputs */ 
	

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
		"position": (
			(_positionSuperscriptCheckbox.value && Position.OT_SUPERSCRIPT) ||
			(_positionSubscriptCheckbox.value && Position.OT_SUBSCRIPT) ||
			(_positionNumeratorCheckbox.value && Position.OT_NUMERATOR) ||
			(_positionDenominatorCheckbox.value && Position.OT_DENOMINATOR) || 
			Position.NORMAL
		),
		"otfFigureStyle":(
			(_digitTabularLiningCheckbox.value && OTFFigureStyle.TABULAR_LINING) ||
			(_digitProportionalOldstyleCheckbox.value && OTFFigureStyle.PROPORTIONAL_OLDSTYLE) ||
			(_digitProportionalLiningCheckbox.value && OTFFigureStyle.PROPORTIONAL_LINING) ||
			(_digitTabularOldstyleCheckbox.value && OTFFigureStyle.TABULAR_OLDSTYLE) ||
			OTFFigureStyle.DEFAULT_VALUE
		),
		"otfStylisticSets":__getOtfSylisticSetValue(_otfStylisticSetsPanel),
		"positionalForm":(
			(_positionalFormsAutomaticCheckbox.value && PositionalForms.CALCULATE) ||
			(_positionalFormsInitialCheckbox.value && PositionalForms.INITIAL) ||
			(_positionalFormsMedialCheckbox.value && PositionalForms.MEDIAL) ||
			(_positionalFormsFinalCheckbox.value && PositionalForms.FINAL) ||
			(_positionalFormsIsolatedCheckbox.value && PositionalForms.ISOLATED) ||
			PositionalForms.NONE
		)
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
	if(_otfFeatureName === null ||_otfFeatureName === undefined || _otfFeatureName.constructor !== String) { return false; }
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
	if(_propertyName === "otfStylisticSets" || _propertyName === "positionalForm") {
		_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
	} else {
		_suiItem.text = "[" + _suiItem.text.replace(_squareBracketRegExp, "") + "]";
	}
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
			/* Checkboxes: Position */
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
			case "otfFigureStyle":
				if(
					(_otfFeatureName === "TABULAR_LINING_FEATURE" && _otfFeatureValue === OTFFigureStyle.TABULAR_LINING) || 
					(_otfFeatureName === "PROPORTIONAL_OLDSTYLE_FEATURE" && _otfFeatureValue === OTFFigureStyle.PROPORTIONAL_OLDSTYLE) ||
					(_otfFeatureName === "PROPORTIONAL_LINING_FEATURE" && _otfFeatureValue === OTFFigureStyle.PROPORTIONAL_LINING) ||
					(_otfFeatureName === "TABULAR_OLDSTYLE_FEATURE" && _otfFeatureValue === OTFFigureStyle.TABULAR_OLDSTYLE) ||
					(_otfFeatureName === "DEFAULT_FIGURE_STYLE_FEATURE" && _otfFeatureValue === OTFFigureStyle.DEFAULT_VALUE)
					) {
					_suiItem.value = true;
				}
				break;
			/* Formsätze */
			case "otfStylisticSets":
				var _setCodeArray = __getStylisticSetsArray(_otfFeatureValue); /* ToDo: Bad performance!!! */
				if(__isInArray(_suiItem.code, _setCodeArray)) {
					_suiItem.value = true;
				}
				break;
			/* Positionalform */
			case "positionalForm":
				if( 
					(_otfFeatureName === "POSITIONAL_FORMS_NONE" && _otfFeatureValue === PositionalForms.NONE) ||
					(_otfFeatureName === "POSITIONAL_FORMS_CALCULATE" && _otfFeatureValue === PositionalForms.CALCULATE) ||
					(_otfFeatureName === "POSITIONAL_FORMS_INITIAL"  && _otfFeatureValue === PositionalForms.INITIAL) ||
					(_otfFeatureName === "POSITIONAL_FORMS_MEDIAL"  && _otfFeatureValue === PositionalForms.MEDIAL) ||
					(_otfFeatureName === "POSITIONAL_FORMS_FINAL"  && _otfFeatureValue === PositionalForms.FINAL) ||
					(_otfFeatureName === "POSITIONAL_FORMS_ISOLATED"  && _otfFeatureValue === PositionalForms.ISOLATED)
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

		_prevOTFFeatureValue = _otfFeatureValue;

		var _appliedFont = _curTextStyleRange.appliedFont;
		if(!_appliedFont || !(_appliedFont instanceof Font) || !_appliedFont.isValid) {
			continue;
		}

		var _otfFeatureAvailability;
		
		try {
			_otfFeatureAvailability= OpenTypeFeature.hasOwnProperty(_otfFeatureName) && _appliedFont.checkOpenTypeFeature(OpenTypeFeature[_otfFeatureName]);
		} catch(_error) {
			_window.text = _error.message;
			continue;
		}
		
		if(_otfFeatureAvailability === true) {
			_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
		} 

		if(_suiItem.parent.isBackgroundSet !== true && _prevOTFFeatureAvailability !== undefined && _otfFeatureAvailability !== _prevOTFFeatureAvailability) {
			__applyBackgroundColor(_suiItem.parent, DIMMED_BLACK_COLOR);
			_suiItem.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
			_suiItem.parent.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
		}

		_prevOTFFeatureAvailability = _otfFeatureAvailability;
	}
	
	return true;
} /* END function __checkOTFFeature */


/**
 * Formsatznummer ermitteln
 * @param {SUIPanel} _panel 
 * @returns {Number}
 */
function __getOtfSylisticSetValue(_panel) {

	if(!_global) { return null; }
	if(!_panel || !(_panel instanceof Panel)) { return null; }

	var _setCode = 0;
	var _panelChildren = _panel.children;

	for( var i=0; i<_panelChildren.length; i+=1) {
		var _panelChild = _panelChildren[i];
		var _groupChildren = _panelChild.children;
		for(var n=0; n<_groupChildren.length; n+=1) {
			var _checkbox = _groupChildren[n].children[0];
			if(_checkbox.value === true) {
				_setCode += _checkbox.code;
			}
		}
	}

	return _setCode;
} /* END function __getOtfSylisticSetValue */


/**
 * Formatsatzcodes ermitteln
 * @param {Number} stylisticSetCode 
 * @returns {Array}
 */
 function __getStylisticSetsArray(stylisticSetCode) {

	var stylisticSetsArray = [];
	var baseArray = [0];

	for (var n = 1; n < 21; n++) {
		baseArray.push(2 * Math.pow(2, n - 1));
	}

	subsetSum(baseArray, stylisticSetCode);

	function subsetSum(numbers, target, partial) {
		partial = partial || [];
		/* Partielle Summe */
		var s = 0;
		for (var j = 0; j < partial.length; j++) {
			s += partial[j];
		}
		/* Check: Partielle Summe gleich Zielwert? */
		if (s === target) {
			stylisticSetsArray = partial;
			return partial;
		}
		/* Check: Partielle Summe größer als Zielwert? */
		if (s >= target) {
			return [];
		}
		for (var i = 0; i < numbers.length; i++) {
			var n = numbers[i];
			var remaining = numbers.slice(i + 1);
			subsetSum(remaining, target, partial.concat([n]));
		}
	} /* END function subsetSum */

	return stylisticSetsArray;
} /* END function getStylisticSetsArray */


/**
 * Check: Is item in Array?
 * @param {Any} _item 
 * @param {Array} _array 
 * @returns 
 */
 function __isInArray(_item, _array) {

	if (_item === null || _item === undefined) { return false; }
	if (!_array || !(_array instanceof Array) || _array.length === 0) { return false; }

	for (var i = 0; i < _array.length; i += 1) {
		if (_array[i] === _item) {
			return true;
		}
	}

	return false;
} /* END function __isInArray */



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

	_global.otfSlashedZeroCheckboxLabel = {
		en:"Slashed Zero",
		de:"Null mit Schrägstrich"
	};

	_global.otfPositionPanelLabel = {
		en:"Position",
		de:"Position"
	};

	_global.positionSuperscriptCheckboxLabel = {
		en:"Superscript/Superior",
		de:"Hochgestellt"
	};

	_global.positionSubscriptCheckboxLabel = {
		en:"Subscript/Inferior",
		de:"Tiefgestellt"
	};
	
	_global.positionNumeratorCheckboxLabel = {
		en:"Numerator",
		de:"Zähler"
	};
	
	_global.positionDenominatorCheckboxLabel = {
		en:"Denominator",
		de:"Nenner"
	};
	
	_global.otfDigitPanelLabel = {
		en:"Digit",
		de:"Ziffern"
	};

	_global.digitTabularLiningCheckboxLabel = {
		en:"Tabular Lining",
		de:"Versalziffern für Tabellen"
	};

	_global.digitProportionalOldstyleCheckboxLabel = {
		en:"Proportional Oldstyle",
		de:"Proportionale Mediävalziffern"
	};

	_global.digitProportionalLiningCheckboxLabel = {
		en:"Proportional Lining",
		de:"Proportionale Versalziffern"
	};

	_global.digitTabularOldstyleCheckboxLabel = {
		en:"Tabular Oldstyle",
		de:"Mediävalziffern für Tabellen"
	};

	_global.digitDefaultFigureStyleCheckboxLabel = {
		en:"Default Figure Style",
		de:"Standardzahlenformat"
	};

	_global.setValueAlert = {
		en:"Value could not be set",
		de:"Wert konnte nicht gesetzt werden"
	};

	_global.otfStylisticSetPanelLabel = {
		en:"Stylistic Sets",
		de:"Formsätze"
	};

	_global.otfStylisticSetCheckboxLabel = {
		en:"Set %1",
		de:"Satz %1"
	};

	_global.positionalFormLabel = {
		en:"Positional Forms",
		de:"Positionalform"
	};

	_global.positionalFormsGeneralCheckboxLabel = {
		en:"General Form",
		de:"Allgemeine Form"
	};

	_global.positionalFormsAutomaticCheckboxLabel = {
		en:"Automatic Form",
		de:"Automatische Form"
	};

	_global.positionalFormsInitialCheckboxLabel = {
		en:"Inital Form",
		de:"Initialform"
	};

	_global.positionalFormsMedialCheckboxLabel = {
		en:"Medial Form",
		de:"Medialform"
	};

	_global.positionalFormsFinalCheckboxLabel = {
		en:"Final Form",
		de:"Finalform"
	};

	_global.positionalFormsIsolatedCheckboxLabel = {
		en:"Isolated Form",
		de:"Isoloierte Form"
	};

} /* END function __defineLocalizeStrings */