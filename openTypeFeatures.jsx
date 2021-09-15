/* DESCRIPTION: Test OpenType features of installed fonts */ 

/*
	
		+	Adobe InDesign Version: CS2020+
		+	Autor: Roland Dreger
		+	Date: 30. August 2021
		
		+	Last updated: 15. September 2021

			
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
	const FIRST_COLUMN_CHAR_NUM = localize({ en: 20, de: 24 });
	const SECOND_COLUMN_CHAR_NUM = localize({ en: 18, de: 24 });
	const THIRD_COLUMN_CHAR_NUM = localize({ en: 16, de: 16 });
	
	var _appliedFontsStatictext;

	var _ligaturesCheckbox;
	var _otfDiscretionaryLigatureCheckbox;
	var _otfFractionCheckbox;
	var _otfOrdinalCheckbox;
	var _otfSwashCheckbox;
	var _otfTitlingCheckbox;
	var _otfContextualAlternateCheckbox;
	var _capitalizationCheckbox;
	var _otfSlashedZeroCheckbox;

	var _otfHistoricalCheckbox;
	var _otfRomanItalicsCheckbox;
	var _otfLocaleCheckbox;
	var _otfOverlapSwashCheckbox;
	var _otfMarkCheckbox;
	var _otfProportionalMetricsCheckbox;
	var _otfJustificationAlternateCheckbox;
	var _otfStretchedAlternateCheckbox;
	var _otfStylisticAlternateCheckbox;
	var _otfHVKanaCheckbox;

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

	var _closeButton;
	var _refreshButton;
	var _cStyleNameEdittext;
	var _cStyleButton;

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
				var _otfGeneralFeaturePanel = add("panel", undefined, localize(_global.oftGeneralFeaturePanelLabel));
				with(_otfGeneralFeaturePanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _ligaturesGroup = add("group");
					with(_ligaturesGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_ligaturesCheckbox = add("checkbox", undefined, localize(_global.ligatureCheckboxLabel));
						_ligaturesCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_ligaturesCheckbox["desc"] = localize(_global.ligaturesFeatureDesc);
					} /* END _ligaturesGroup */
					var _otfDiscretionaryLigatureGroup = add("group");
					with(_otfDiscretionaryLigatureGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfDiscretionaryLigatureCheckbox = add("checkbox", undefined, localize(_global.otfDiscretionaryLigatureCheckboxLabel));
						_otfDiscretionaryLigatureCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfDiscretionaryLigatureCheckbox["desc"] = localize(_global.otfDiscretionaryLigatureFeatureDesc);
					} /* END _otfDiscretionaryLigatureGroup */
					var _otfFractionGroup = add("group");
					with(_otfFractionGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfFractionCheckbox = add("checkbox", undefined, localize(_global.otfFractionCheckboxLabel));
						_otfFractionCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfFractionCheckbox["desc"] = localize(_global.otfFractionFeatureDesc);
					} /* END _otfFractionGroup */
					var _otfOrdinalGroup = add("group");
					with(_otfOrdinalGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfOrdinalCheckbox = add("checkbox", undefined, localize(_global.otfOrdinalCheckboxLabel));
						_otfOrdinalCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfOrdinalCheckbox["desc"] = localize(_global.otfOrdinalFeatureDesc);
					} /* END _otfOrdinalGroup */
					var _otfSwashGroup = add("group");
					with(_otfSwashGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfSwashCheckbox = add("checkbox", undefined, localize(_global.otfSwashCheckboxLabel));
						_otfSwashCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfSwashCheckbox["desc"] = localize(_global.otfSwashFeatureDesc);
					} /* END _otfSwashGroup */
					var _otfTitlingGroup = add("group");
					with(_otfTitlingGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfTitlingCheckbox = add("checkbox", undefined, localize(_global.otfTitlingCheckboxLabel));
						_otfTitlingCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfTitlingCheckbox["desc"] = localize(_global.otfTitlingFeatureDesc);
					} /* END _otfTitlingGroup */
					var _otfContextualAlternateGroup = add("group");
					with(_otfContextualAlternateGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfContextualAlternateCheckbox = add("checkbox", undefined, localize(_global.otfContextualAlternateCheckboxLabel));
						_otfContextualAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfContextualAlternateCheckbox["desc"] = localize(_global.otfContextualAlternateFeatureDesc);
					} /* END _otfContextualAlternateGroup */
					var _capitalizationGroup = add("group");
					with(_capitalizationGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_capitalizationCheckbox = add("checkbox", undefined, localize(_global.capitalizationCheckboxLabel));
						_capitalizationCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_capitalizationCheckbox["desc"] = localize(_global.capitalizationFeatureDesc);
					} /* END _capitalizationGroup */
					var _otfSlashedZeroGroup = add("group");
					with(_otfSlashedZeroGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfSlashedZeroCheckbox = add("checkbox", undefined, localize(_global.otfSlashedZeroCheckboxLabel));
						_otfSlashedZeroCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfSlashedZeroCheckbox["desc"] = localize(_global.otfSlashedZeroFeatureDesc);
					} /* END _otfSlashedZeroGroup */
				} /* END _otfGeneralFeaturePanel */
				var _otfSpecialFeaturePanel = add("panel", undefined, localize(_global.oftSpecialFeaturePanelLabel));
				with(_otfSpecialFeaturePanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _otfHistoricalGroup = add("group");
					with(_otfHistoricalGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfHistoricalCheckbox = add("checkbox", undefined, localize(_global.otfHistoricalCheckboxLabel));
						_otfHistoricalCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfHistoricalCheckbox["desc"] = localize(_global.otfHistoricalFeatureDesc);
					} /* END _otfHistoricalGroup */
					var _otfRomanItalicsGroup = add("group");
					with(_otfRomanItalicsGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfRomanItalicsCheckbox = add("checkbox", undefined, localize(_global.otfRomanItalicsCheckboxLabel));
						_otfRomanItalicsCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfRomanItalicsCheckbox["desc"] = localize(_global.otfRomanItalicsFeatureDesc);
					} /* END _otfRomanItalicsGroup */
					var _otfLocaleGroup = add("group");
					with(_otfLocaleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfLocaleCheckbox = add("checkbox", undefined, localize(_global.otfLocaleCheckboxLabel));
						_otfLocaleCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfLocaleCheckbox["desc"] = localize(_global.otfLocaleFeatureDesc);
					} /* END _otfLocaleGroup */
					var _otfOverlapSwashGroup = add("group");
					with(_otfOverlapSwashGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfOverlapSwashCheckbox = add("checkbox", undefined, localize(_global.otfOverlapSwashCheckboxLabel));
						_otfOverlapSwashCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfOverlapSwashCheckbox["desc"] = localize(_global.otfOverlapSwashFeatureDesc);
					} /* END _otfOverlapSwashGroup */
					var _otfMarkGroup = add("group");
					with(_otfMarkGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfMarkCheckbox = add("checkbox", undefined, localize(_global.otfMarkCheckboxLabelCheckboxLabel));
						_otfMarkCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfMarkCheckbox["desc"] = localize(_global.otfMarkFeatureDesc);
					} /* END _otfMarkGroup */
					var _otfProportionalMetricsGroup = add("group");
					with(_otfProportionalMetricsGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfProportionalMetricsCheckbox = add("checkbox", undefined, localize(_global.otfProportionalMetricsCheckboxLabel));
						_otfProportionalMetricsCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfProportionalMetricsCheckbox["desc"] = localize(_global.otfProportionalMetricsFeatureDesc);
					} /* END _otfProportionalMetricsGroup */
					var _otfJustificationAlternateGroup = add("group");
					with(_otfJustificationAlternateGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfJustificationAlternateCheckbox = add("checkbox", undefined, localize(_global.otfJustificationAlternateCheckboxLabel));
						_otfJustificationAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfJustificationAlternateCheckbox["desc"] = localize(_global.otfJustificationAlternateFeatureDesc);
					} /* END _otfJustificationAlternateGroup */
					var _otfStretchedAlternateGroup = add("group");
					with(_otfStretchedAlternateGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfStretchedAlternateCheckbox = add("checkbox", undefined, localize(_global.otfStretchedAlternateCheckboxLabel));
						_otfStretchedAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfStretchedAlternateCheckbox["desc"] = localize(_global.otfStretchedAlternateFeatureDesc);
					} /* END _otfStretchedAlternateGroup */
					var _otfStylisticAlternateGroup = add("group");
					with(_otfStylisticAlternateGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfStylisticAlternateCheckbox = add("checkbox", undefined, localize(_global.otfStylisticAlternateCheckboxLabel));
						_otfStylisticAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfStylisticAlternateCheckbox["desc"] = localize(_global.otfStylisticAlternateFeatureDesc);
					} /* END _otfStylisticAlternateGroup */
					var _otfHVKanaGroup = add("group");
					with(_otfHVKanaGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_otfHVKanaCheckbox = add("checkbox", undefined, localize(_global.otfHVKanaCheckboxLabel));
						_otfHVKanaCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
						_otfHVKanaCheckbox["desc"] = localize(_global.otfHVKanaFeatureDesc);
					} /* END _otfHVKanaGroup */
				} /* END _otfSpecialFeaturePanel */
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
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _positionSuperscriptGroup = add("group");
					with(_positionSuperscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSuperscriptCheckbox = add("checkbox", undefined, localize(_global.positionSuperscriptCheckboxLabel));
						_positionSuperscriptCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionSuperscriptGroup */
					var _positionSubscriptGroup = add("group");
					with(_positionSubscriptGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionSubscriptCheckbox = add("checkbox", undefined, localize(_global.positionSubscriptCheckboxLabel));
						_positionSubscriptCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionSubscriptGroup */
					var _positionNumeratorGroup = add("group");
					with(_positionNumeratorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionNumeratorCheckbox = add("checkbox", undefined, localize(_global.positionNumeratorCheckboxLabel));
						_positionNumeratorCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionNumeratorGroup */
					var _positionDenominatorGroup = add("group");
					with(_positionDenominatorGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionDenominatorCheckbox = add("checkbox", undefined, localize(_global.positionDenominatorCheckboxLabel));
						_positionDenominatorCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionDenominatorGroup */
				} /* END _otfPositionPanel */
				var _otfDigitPanel = add("panel", undefined,localize(_global.otfDigitPanelLabel));
				with(_otfDigitPanel) {
					alignChildren = ["fill","top"];
					margins = PANEL_MARGINS;
					spacing = 0;
					var _digitDefaultFigureStyleGroup = add("group");
					with(_digitDefaultFigureStyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitDefaultFigureStyleCheckbox = add("checkbox", undefined, localize(_global.digitDefaultFigureStyleCheckboxLabel));
						_digitDefaultFigureStyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _digitDefaultFigureStyleGroup */
					var _digitProportionalOldstyleGroup = add("group");
					with(_digitProportionalOldstyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitProportionalOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitProportionalOldstyleCheckboxLabel));
						_digitProportionalOldstyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _digitProportionalOldstyleGroup */
					var _digitProportionalLiningGroup = add("group");
					with(_digitProportionalLiningGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitProportionalLiningCheckbox = add("checkbox", undefined, localize(_global.digitProportionalLiningCheckboxLabel));
						_digitProportionalLiningCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _digitProportionalLiningGroup */
					var _digitTabularOldstyleGroup = add("group");
					with(_digitTabularOldstyleGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitTabularOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitTabularOldstyleCheckboxLabel));
						_digitTabularOldstyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _digitTabularOldstyleGroup */
					var _digitTabularLiningGroup = add("group");
					with(_digitTabularLiningGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_digitTabularLiningCheckbox = add("checkbox", undefined, localize(_global.digitTabularLiningCheckboxLabel));
						_digitTabularLiningCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _digitTabularLiningGroup */
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
						_positionalFormsGeneralCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsGeneralGroup */
					var _positionalFormsAutomaticGroup = add("group");
					with(_positionalFormsAutomaticGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsAutomaticCheckbox = add("checkbox", undefined, localize(_global.positionalFormsAutomaticCheckboxLabel));
						_positionalFormsAutomaticCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsAutomaticGroup */
					var _positionalFormsInitialGroup = add("group");
					with(_positionalFormsInitialGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsInitialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsInitialCheckboxLabel));
						_positionalFormsInitialCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsInitialGroup */
					var _positionalFormsMedialGroup = add("group");
					with(_positionalFormsMedialGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsMedialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsMedialCheckboxLabel));
						_positionalFormsMedialCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsMedialGroup */
					var _positionalFormsFinalGroup = add("group");
					with(_positionalFormsFinalGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsFinalCheckbox = add("checkbox", undefined, localize(_global.positionalFormsFinalCheckboxLabel));
						_positionalFormsFinalCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsFinalGroup */
					var _positionalFormsIsolatedGroup = add("group");
					with(_positionalFormsIsolatedGroup) {
						margins = FEATURE_GROUP_MARGINS;
						_positionalFormsIsolatedCheckbox = add("checkbox", undefined, localize(_global.positionalFormsIsolatedCheckboxLabel));
						_positionalFormsIsolatedCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
					} /* END _positionalFormsIsolatedGroup */
				} /* END _positionalFormsPanel */
			} /* END _column2Group */
			/* ++++++++++++ */
			/* + Column 3 + */
			/* ++++++++++++ */
			var _column3Group = add("group");
			with(_column3Group) {
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
							_otfStylisticSet1Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet1Checkbox.code = 2;
						} /* END _otfStylisticSet1Group */
						var _otfStylisticSet2Group = add("group");
						with(_otfStylisticSet2Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet2Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "2"));
							_otfStylisticSet2Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet2Checkbox.code = 4;
						} /* END _otfStylisticSet2Group */
						var _otfStylisticSet3Group = add("group");
						with(_otfStylisticSet3Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet3Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "3"));
							_otfStylisticSet3Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet3Checkbox.code = 8;
						} /* END _otfStylisticSet3Group */
						var _otfStylisticSet4Group = add("group");
						with(_otfStylisticSet4Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet4Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "4"));
							_otfStylisticSet4Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet4Checkbox.code = 16;
						} /* END _otfStylisticSet4Group */
						var _otfStylisticSet5Group = add("group");
						with(_otfStylisticSet5Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet5Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "5"));
							_otfStylisticSet5Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet5Checkbox.code = 32;
						} /* END _otfStylisticSet5Group */
						var _otfStylisticSet6Group = add("group");
						with(_otfStylisticSet6Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet6Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "6"));
							_otfStylisticSet6Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet6Checkbox.code = 64;
						} /* END _otfStylisticSet6Group */
						var _otfStylisticSet7Group = add("group");
						with(_otfStylisticSet7Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet7Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "7"));
							_otfStylisticSet7Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet7Checkbox.code = 128;
						} /* END _otfStylisticSet7Group */
						var _otfStylisticSet8Group = add("group");
						with(_otfStylisticSet8Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet8Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "8"));
							_otfStylisticSet8Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet8Checkbox.code = 256;
						} /* END _otfStylisticSet8Group */
						var _otfStylisticSet9Group = add("group");
						with(_otfStylisticSet9Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet9Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "9"));
							_otfStylisticSet9Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet9Checkbox.code = 512;
						} /* END _otfStylisticSet9Group */
						var _otfStylisticSet10Group = add("group");
						with(_otfStylisticSet10Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet10Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "10"));
							_otfStylisticSet10Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet10Checkbox.code = 1024;
						} /* END _otfStylisticSet10Group */
						var _otfStylisticSet11Group = add("group");
						with(_otfStylisticSet11Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet11Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "11"));
							_otfStylisticSet11Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet11Checkbox.code = 2048;
						} /* END _otfStylisticSet11Group */
						var _otfStylisticSet12Group = add("group");
						with(_otfStylisticSet12Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet12Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "12"));
							_otfStylisticSet12Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet12Checkbox.code = 4096;
						} /* END _otfStylisticSet12Group */
						var _otfStylisticSet13Group = add("group");
						with(_otfStylisticSet13Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet13Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "13"));
							_otfStylisticSet13Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet13Checkbox.code = 8192;
						} /* END _otfStylisticSet13Group */
						var _otfStylisticSet14Group = add("group");
						with(_otfStylisticSet14Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet14Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "14"));
							_otfStylisticSet14Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet14Checkbox.code = 16384;
						} /* END _otfStylisticSet14Group */
						var _otfStylisticSet15Group = add("group");
						with(_otfStylisticSet15Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet15Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "15"));
							_otfStylisticSet15Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet15Checkbox.code = 32768;
						} /* END _otfStylisticSet15Group */
						var _otfStylisticSet16Group = add("group");
						with(_otfStylisticSet16Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet16Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "16"));
							_otfStylisticSet16Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet16Checkbox.code = 65536;
						} /* END _otfStylisticSet16Group */
						var _otfStylisticSet17Group = add("group");
						with(_otfStylisticSet17Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet17Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "17"));
							_otfStylisticSet17Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet17Checkbox.code = 131072;
						} /* END _otfStylisticSet17Group */
						var _otfStylisticSet18Group = add("group");
						with(_otfStylisticSet18Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet18Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "18"));
							_otfStylisticSet18Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet18Checkbox.code = 262144;
						} /* END _otfStylisticSet18Group */
						var _otfStylisticSet19Group = add("group");
						with(_otfStylisticSet19Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet19Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "19"));
							_otfStylisticSet19Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet19Checkbox.code = 524288;
						} /* END _otfStylisticSet19Group */
						var _otfStylisticSet20Group = add("group");
						with(_otfStylisticSet20Group) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticSet20Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "20"));
							_otfStylisticSet20Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
							_otfStylisticSet20Checkbox.code = 1048576;
						} /* END _otfStylisticSet20Group */
					} /* END _otfStylisticSetColumn2Group */
				} /* END _otfStylisticSetsPanel */
			} /* END _column3Group */
		} /* END _selectionGroup */
		var _buttonGroup = add("group");
		with(_buttonGroup) {
			spacing = 10;
			_closeButton = add("button", undefined, localize(_global.cancelButtonLabel), { name:"cancel"});
			with(_closeButton) {
				alignment = ["left","bottom"];
				helpTip = localize(_global.closeButtonHelpTip);
			} /* END _closeButton */
			var _refreshButton = add("button", undefined, localize(_global.refreshButtonLabel));
			with(_refreshButton) {
				alignment = ["left","bottom"];
				helpTip = localize(_global.refreshButtonHelpTip);
			} /* END _refreshButton */
			_cStyleNameEdittext = add("edittext", undefined, "");
			with(_cStyleNameEdittext) {
				alignment = ["right","middle"];
				characters = 24;
			} /* END _cStyleNameEdittext */
			_cStyleButton = add('button', undefined, ("+ " + localize(_global.cStyleButtonLabel)), { name:"ok"});
			with(_cStyleButton) {
				alignment = ["right","bottom"];
				helpTip = localize(_global.cStyleButtonHelpTip);
			} /* END _cStyleButton */
		} /* END _buttonGroup */
	} /* END palette _otfWindow */
 
 
	/* Callbacks */
	/* General Features */
	_ligaturesCheckbox.onClick = function() {
		__setValue("ligatures", this.value, _otfWindow);
		__checkInputs("ligatures");
	};
	_otfDiscretionaryLigatureCheckbox.onClick = function() {
		__setValue("otfDiscretionaryLigature", this.value, _otfWindow);
		__checkInputs("otfDiscretionaryLigature");
	};
	_otfFractionCheckbox.onClick = function() {
		__setValue("otfFraction", this.value, _otfWindow);
		__checkInputs("otfFraction");
	};
	_otfOrdinalCheckbox.onClick = function() {
		__setValue("otfOrdinal", this.value, _otfWindow);
		__checkInputs("otfOrdinal");
	};
	_otfSwashCheckbox.onClick = function() {
		__setValue("otfSwash", this.value, _otfWindow);
		__checkInputs("otfSwash");
	};
	_otfTitlingCheckbox.onClick = function() {
		__setValue("otfTitling", this.value, _otfWindow);
		__checkInputs("otfTitling");
	};
	_otfContextualAlternateCheckbox.onClick = function() {
		__setValue("otfContextualAlternate", this.value, _otfWindow);
		__checkInputs("otfContextualAlternate");
	};
	_capitalizationCheckbox.onClick = function() {
		var _value = (this.value && Capitalization.CAP_TO_SMALL_CAP) || Capitalization.NORMAL;
		__setValue("capitalization", _value, _otfWindow);
		__checkInputs("capitalization");
	};
	_otfSlashedZeroCheckbox.onClick = function() {
		__setValue("otfSlashedZero", this.value, _otfWindow);
		__checkInputs("otfSlashedZero");
	};
	/* Spezielle Features (NICHT über Benuteroberfläche von InDesign zugänglich) */
	_otfHistoricalCheckbox.onClick = function() {
		__setValue("otfHistorical", this.value, _otfWindow);
		__checkInputs("otfHistorical");
	};
	_otfRomanItalicsCheckbox.onClick = function() {
		__setValue("otfRomanItalics", this.value, _otfWindow);
		__checkInputs("otfRomanItalics");
	};
	_otfLocaleCheckbox.onClick = function() {
		__setValue("otfLocale", this.value, _otfWindow);
		__checkInputs("otfLocale");
	};
	_otfOverlapSwashCheckbox.onClick = function() {
		__setValue("otfOverlapSwash", this.value, _otfWindow);
		__checkInputs("otfOverlapSwash");
	};
	_otfMarkCheckbox.onClick = function() {
		__setValue("otfMark", this.value, _otfWindow);
		__checkInputs("otfMark");
	};
	_otfProportionalMetricsCheckbox.onClick = function() {
		__setValue("otfProportionalMetrics", this.value, _otfWindow);
		__checkInputs("otfProportionalMetrics");
	};
	_otfJustificationAlternateCheckbox.onClick = function() {
		__setValue("otfJustificationAlternate", this.value, _otfWindow);
		__checkInputs("otfJustificationAlternate");
	};
	_otfStretchedAlternateCheckbox.onClick = function() {
		__setValue("otfStretchedAlternate", this.value, _otfWindow);
		__checkInputs("otfStretchedAlternate");
	};
	_otfStylisticAlternateCheckbox.onClick = function() {
		__setValue("otfStylisticAlternate", this.value, _otfWindow);
		__checkInputs("otfStylisticAlternate");
	};
	_otfHVKanaCheckbox.onClick = function() {
		__setValue("otfHVKana", this.value, _otfWindow);
		__checkInputs("otfHVKana");
	};
	/* Position */
	_positionSuperscriptCheckbox.onClick = function() {
		_positionSubscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_SUPERSCRIPT) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
		__checkInputs("position");
	};
	_positionSubscriptCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_SUBSCRIPT) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
		__checkInputs("position");
	};
	_positionNumeratorCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionSubscriptCheckbox.value = false;
		_positionDenominatorCheckbox.value = false;
		var _value = (this.value && Position.OT_NUMERATOR) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
		__checkInputs("position");
	};
	_positionDenominatorCheckbox.onClick = function() {
		_positionSuperscriptCheckbox.value = false;
		_positionSubscriptCheckbox.value = false;
		_positionNumeratorCheckbox.value = false;
		var _value = (this.value && Position.OT_DENOMINATOR) || Position.NORMAL;
		__setValue("position", _value, _otfWindow);
		__checkInputs("position");
	};
	/* Digits */
	_digitDefaultFigureStyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		this.value = true;
		var _value = OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
	};
	_digitProportionalOldstyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.PROPORTIONAL_OLDSTYLE) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
	};
	_digitProportionalLiningCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.PROPORTIONAL_LINING) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
	};
	_digitTabularOldstyleCheckbox.onClick = function() {
		_digitTabularLiningCheckbox.value = false;
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value && OTFFigureStyle.TABULAR_OLDSTYLE) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
	};
	_digitTabularLiningCheckbox.onClick = function() {
		_digitProportionalOldstyleCheckbox.value = false;
		_digitProportionalLiningCheckbox.value = false;
		_digitTabularOldstyleCheckbox.value = false;
		_digitDefaultFigureStyleCheckbox.value = !this.value;
		var _value = (this.value &&	OTFFigureStyle.TABULAR_LINING) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
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
		_otfWindow["prevSelection"] = null; /* Reset selection to trigger recalculation of stylistic sets. */
		__checkInputs("otfStylisticSets");
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
		__checkInputs("positionalForm");
	};
	_positionalFormsAutomaticCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.CALCULATE) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
		__checkInputs("positionalForm");
	};
	_positionalFormsInitialCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.INITIAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
		__checkInputs("positionalForm");
	};
	_positionalFormsMedialCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.MEDIAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
		__checkInputs("positionalForm");
	};
	_positionalFormsFinalCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsIsolatedCheckbox.value = false;
		var _value = (this.value && PositionalForms.FINAL) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
		__checkInputs("positionalForm");
	};
	_positionalFormsIsolatedCheckbox.onClick = function() {
		_positionalFormsGeneralCheckbox.value =  !this.value;
		_positionalFormsAutomaticCheckbox.value = false;
		_positionalFormsInitialCheckbox.value = false;
		_positionalFormsMedialCheckbox.value = false;
		_positionalFormsFinalCheckbox.value = false;
		var _value = (this.value && PositionalForms.ISOLATED) || PositionalForms.NONE;
		__setValue("positionalForm", _value, _otfWindow);
		__checkInputs("positionalForm");
	};

	_refreshButton.onClick = function() {
		_otfWindow["prevSelection"] = null; /* Reset selection to trigger recalculation of stylistic sets. */
		__checkInputs();
	};

	_cStyleButton.onClick = function() {
		var _selection = __getSelection(_otfWindow);
		if(!_selection) { 
			return false; 
		}
		var _cStyleName = _cStyleNameEdittext.text;
		var _inputObj = __getOTFeatureValues();
		var _cStyle = __createCStyle(_cStyleName, _inputObj);
		if(_cStyle) { 
			_cStyleNameEdittext.text = ""; 
		}
	};

	_cStyleNameEdittext.addEventListener('keydown', function (_event) {
		if(_event.keyName === "Enter") {
			_cStyleButton.notify();
			_cStyleButton.active = true;
		}
	});

	_closeButton.onClick = function() {
		_otfWindow.close(2);
	};
	
	_otfWindow.onClose = function() {
		if(_selectionEventListener && _selectionEventListener instanceof EventListener && _selectionEventListener.isValid) {
			_selectionEventListener.remove();
		}
		_global = null;
	};


	/* Dialog initialisieren */
	_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);
	_otfWindow["stylisticSetCodes"] = [[]];
	__checkInputs();

	
	/* Add EventListener */
	var _selectionEventListener = app.addEventListener(Application.AFTER_SELECTION_CHANGED, __checkInputs);
	

	/* Eingaben überprüfen */
	function __checkInputs(_flag) {
		if(_flag instanceof Event) {
			_flag.stopPropagation();
			_flag = undefined;
		}
		if(!_flag) {
			_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);
		}
		var _selection = __getSelection(_otfWindow);
		if(!_selection) {
			return false;
		}
		if(!_flag || _flag === "ligatures") {
			__checkOTFeature("ligatures", "liga", _selection, _otfWindow, _ligaturesCheckbox);
		}
		if(!_flag || _flag === "otfDiscretionaryLigature") {
			__checkOTFeature("otfDiscretionaryLigature", OpenTypeFeature.DISCRETIONARY_LIGATURES_FEATURE, _selection, _otfWindow, _otfDiscretionaryLigatureCheckbox);
		}
		if(!_flag || _flag === "otfFraction") {
			__checkOTFeature("otfFraction", OpenTypeFeature.FRACTIONS_FEATURE, _selection, _otfWindow, _otfFractionCheckbox);
		}
		if(!_flag || _flag === "otfOrdinal") {
			__checkOTFeature("otfOrdinal", OpenTypeFeature.ORDINAL_FEATURE, _selection, _otfWindow, _otfOrdinalCheckbox);
		}
		if(!_flag || _flag === "otfSwash") {
			__checkOTFeature("otfSwash", OpenTypeFeature.SWASH_FEATURE, _selection, _otfWindow, _otfSwashCheckbox);
		}
		if(!_flag || _flag === "otfTitling") {
			__checkOTFeature("otfTitling", OpenTypeFeature.TITLING_FEATURE, _selection, _otfWindow, _otfTitlingCheckbox);
		}
		if(!_flag || _flag === "otfContextualAlternate") {
			__checkOTFeature("otfContextualAlternate", "calt", _selection, _otfWindow, _otfContextualAlternateCheckbox);
		}
		if(!_flag || _flag === "capitalization") {
			__checkOTFeature("capitalization", OpenTypeFeature.ALL_SMALL_CAPS_FEATURE, _selection, _otfWindow, _capitalizationCheckbox);
		}
		if(!_flag || _flag === "otfSlashedZero") {
			__checkOTFeature("otfSlashedZero", "zero", _selection, _otfWindow, _otfSlashedZeroCheckbox);
		}
		if(!_flag || _flag === "otfHistorical") {
			__checkOTFeature("otfHistorical", "hist", _selection, _otfWindow, _otfHistoricalCheckbox);
		}
		if(!_flag || _flag === "otfRomanItalics") {
			__checkOTFeature("otfRomanItalics", "ital", _selection, _otfWindow, _otfRomanItalicsCheckbox);
		}
		if(!_flag || _flag === "otfLocale") {
			__checkOTFeature("otfLocale", "locl", _selection, _otfWindow, _otfLocaleCheckbox);
		}
		if(!_flag || _flag === "otfOverlapSwash") {
			__checkOTFeature("otfOverlapSwash", OpenTypeFeature.OVERLAP_SWASH, _selection, _otfWindow, _otfOverlapSwashCheckbox);
		}
		if(!_flag || _flag === "otfMark") {
			__checkOTFeature("otfMark", "mark", _selection, _otfWindow, _otfMarkCheckbox);
		}
		if(!_flag || _flag === "otfProportionalMetrics") {
			__checkOTFeature("otfProportionalMetrics", "palt", _selection, _otfWindow, _otfProportionalMetricsCheckbox);
		}
		if(!_flag || _flag === "otfJustificationAlternate") {
			__checkOTFeature("otfJustificationAlternate", OpenTypeFeature.JUSTIFICATION_ALTERNATE, _selection, _otfWindow, _otfJustificationAlternateCheckbox);
		}
		if(!_flag || _flag === "otfStretchedAlternate") {
			__checkOTFeature("otfStretchedAlternate", OpenTypeFeature.STRETCHED_ALTERNATE, _selection, _otfWindow, _otfStretchedAlternateCheckbox);
		}
		if(!_flag || _flag === "otfStylisticAlternate") {
			__checkOTFeature("otfStylisticAlternate", "salt", _selection, _otfWindow, _otfStylisticAlternateCheckbox);
		}
		if(!_flag || _flag === "otfHVKana") {
			__checkOTFeature("otfHVKana", "hkna", _selection, _otfWindow, _otfHVKanaCheckbox);
		}
		if(!_flag || _flag === "position") {
			__checkOTFeature("position", OpenTypeFeature.SUPERSCRIPT_FEATURE, _selection, _otfWindow, _positionSuperscriptCheckbox);
			__checkOTFeature("position", OpenTypeFeature.SUBSCRIPT_FEATURE, _selection, _otfWindow, _positionSubscriptCheckbox);
			__checkOTFeature("position", OpenTypeFeature.NUMERATOR_FEATURE, _selection, _otfWindow, _positionNumeratorCheckbox);
			__checkOTFeature("position", OpenTypeFeature.DENOMINATOR_FEATURE, _selection, _otfWindow, _positionDenominatorCheckbox);
		}
		if(!_flag || _flag === "otfFigureStyle") {
			__checkOTFeature("otfFigureStyle", OpenTypeFeature.DEFAULT_FIGURE_STYLE_FEATURE, _selection, _otfWindow, _digitDefaultFigureStyleCheckbox);
			__checkOTFeature("otfFigureStyle", OpenTypeFeature.PROPORTIONAL_OLDSTYLE_FEATURE, _selection, _otfWindow, _digitProportionalOldstyleCheckbox);
			__checkOTFeature("otfFigureStyle", OpenTypeFeature.PROPORTIONAL_LINING_FEATURE, _selection, _otfWindow, _digitProportionalLiningCheckbox);
			__checkOTFeature("otfFigureStyle", OpenTypeFeature.TABULAR_OLDSTYLE_FEATURE, _selection, _otfWindow, _digitTabularOldstyleCheckbox);
			__checkOTFeature("otfFigureStyle", OpenTypeFeature.TABULAR_LINING_FEATURE, _selection, _otfWindow, _digitTabularLiningCheckbox);
		}
		if(!_flag || _flag === "otfStylisticSets") {
			__checkOTFeature("otfStylisticSets", "ss01", _selection, _otfWindow, _otfStylisticSet1Checkbox);
			_otfWindow["prevSelection"] = _selection; /* Cache selection to avoid multiple calculation of stylistic sets. */
			__checkOTFeature("otfStylisticSets", "ss02", _selection, _otfWindow, _otfStylisticSet2Checkbox);
			__checkOTFeature("otfStylisticSets", "ss03", _selection, _otfWindow, _otfStylisticSet3Checkbox);
			__checkOTFeature("otfStylisticSets", "ss04", _selection, _otfWindow, _otfStylisticSet4Checkbox);
			__checkOTFeature("otfStylisticSets", "ss05", _selection, _otfWindow, _otfStylisticSet5Checkbox);
			__checkOTFeature("otfStylisticSets", "ss06", _selection, _otfWindow, _otfStylisticSet6Checkbox);
			__checkOTFeature("otfStylisticSets", "ss07", _selection, _otfWindow, _otfStylisticSet7Checkbox);
			__checkOTFeature("otfStylisticSets", "ss08", _selection, _otfWindow, _otfStylisticSet8Checkbox);
			__checkOTFeature("otfStylisticSets", "ss09", _selection, _otfWindow, _otfStylisticSet9Checkbox);
			__checkOTFeature("otfStylisticSets", "ss10", _selection, _otfWindow, _otfStylisticSet10Checkbox);
			__checkOTFeature("otfStylisticSets", "ss11", _selection, _otfWindow, _otfStylisticSet11Checkbox);
			__checkOTFeature("otfStylisticSets", "ss12", _selection, _otfWindow, _otfStylisticSet12Checkbox);
			__checkOTFeature("otfStylisticSets", "ss13", _selection, _otfWindow, _otfStylisticSet13Checkbox);
			__checkOTFeature("otfStylisticSets", "ss14", _selection, _otfWindow, _otfStylisticSet14Checkbox);
			__checkOTFeature("otfStylisticSets", "ss15", _selection, _otfWindow, _otfStylisticSet15Checkbox);
			__checkOTFeature("otfStylisticSets", "ss16", _selection, _otfWindow, _otfStylisticSet16Checkbox);
			__checkOTFeature("otfStylisticSets", "ss17", _selection, _otfWindow, _otfStylisticSet17Checkbox);
			__checkOTFeature("otfStylisticSets", "ss18", _selection, _otfWindow, _otfStylisticSet18Checkbox);
			__checkOTFeature("otfStylisticSets", "ss18", _selection, _otfWindow, _otfStylisticSet19Checkbox);
			__checkOTFeature("otfStylisticSets", "ss20", _selection, _otfWindow, _otfStylisticSet20Checkbox);
		}
		if(!_flag || _flag === "positionalForm") {
			__checkOTFeature("positionalForm", "opfg", _selection, _otfWindow, _positionalFormsGeneralCheckbox); /* fictional tag opfg ??? */
			__checkOTFeature("positionalForm", "apfm", _selection, _otfWindow, _positionalFormsAutomaticCheckbox); /* fictional tag apfm ??? */
			__checkOTFeature("positionalForm", "init", _selection, _otfWindow, _positionalFormsInitialCheckbox);
			__checkOTFeature("positionalForm", "medi", _selection, _otfWindow, _positionalFormsMedialCheckbox);
			__checkOTFeature("positionalForm", "fina", _selection, _otfWindow, _positionalFormsFinalCheckbox);
			__checkOTFeature("positionalForm", "isol", _selection, _otfWindow, _positionalFormsIsolatedCheckbox);
		}
	} /* END function __checkInputs */ 
	
	/* Eingaben auslesen */
	function __getOTFeatureValues() {
		return {
			"ligatures":_ligaturesCheckbox.value,
			"otfDiscretionaryLigature":_otfDiscretionaryLigatureCheckbox.value,
			"otfFraction":_otfFractionCheckbox.value,
			"otfOrdinal":_otfOrdinalCheckbox.value,
			"otfSwash":_otfSwashCheckbox.value,
			"otfTitling":_otfTitlingCheckbox.value,
			"otfContextualAlternate":_otfContextualAlternateCheckbox.value,
			"capitalization":(_capitalizationCheckbox.value) ? Capitalization.CAP_TO_SMALL_CAP : Capitalization.NORMAL,
			"otfSlashedZero":_otfSlashedZeroCheckbox.value,
			"otfHistorical":_otfHistoricalCheckbox.value,
			"otfRomanItalics":_otfRomanItalicsCheckbox.value,
			"otfLocale":_otfLocaleCheckbox.value,
			"otfOverlapSwash":_otfOverlapSwashCheckbox.value,
			"otfMark":_otfMarkCheckbox.value,
			"otfProportionalMetrics":_otfProportionalMetricsCheckbox.value,
			"otfJustificationAlternate":_otfJustificationAlternateCheckbox.value,
			"otfStretchedAlternate":_otfStretchedAlternateCheckbox.value,
			"otfStylisticAlternate":_otfStylisticAlternateCheckbox.value,
			"otfHVKana":_otfHVKanaCheckbox.value,
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
	} /* END function __getOTFeatureValues */

	/* Show OTF Dialog */
	_otfWindow.show();

	return true;
} /* END function __showOTFWindow */


/**
 * Check OpenType Feature
 * @param {String} _propertyName
 * @param {String} _otfFeatureTag 
 * @param {Text} _selection 
 * @param {Window} _window 
 * @param {ScriptUiItem} _suiItem 
 * @returns {Boolean}
 */
function __checkOTFeature(_propertyName, _otfFeatureTag, _selection, _window, _suiItem) {

	if(!_global) { return false; }
	if(!_propertyName || _propertyName.constructor !== String) { return false; }
	if(_otfFeatureTag === null ||_otfFeatureTag === undefined) { return false; }
	if(!_window || !(_window instanceof Window)) { return false; }
	if(!_suiItem || !_suiItem.hasOwnProperty("value")) { return false; }

	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) { 
		_window.text = localize(_global.selectionNotValidAlert);
		return false;
	}
	
	const TRANSPARENT_WHITE_COLOR = [1,1,1,0];
	const _squareBracketRegExp = new RegExp("[\\[\\]]","g");

	var _multipleValuesColor = [1,0.25,0.25,0.9];
	var _multipleFeatureColor = [0,0,0,0.05];
	
	var _appPrefs = app.generalPreferences;
	if(_appPrefs.hasOwnProperty("uiBrightnessPreference") && _appPrefs.uiBrightnessPreference <= 0.5) {
		_multipleValuesColor = [1,0,0.15,0.6];
		_multipleFeatureColor = [1,1,1,0.06];
	}

	var _prevSelection = _window["prevSelection"];

	/* Reset UI */
	__applyBackgroundColor(_suiItem.parent, TRANSPARENT_WHITE_COLOR);
	_suiItem.parent.isBackgroundSet = false;
	_suiItem.value = false;
	var _suiItemLabel;
	if(_propertyName === "otfStylisticSets") {
		var _setNum = Number(_otfFeatureTag.replace(/\D+/g,""));
		_suiItemLabel = __getOtfSylisticSetName(_setNum);
	}
	_suiItem.text = (_suiItemLabel || "[" + _suiItem.text.replace(_squareBracketRegExp, "") + "]");
	_suiItem.helpTip = _suiItem.parent.helpTip = (_suiItem["desc"] || "");
	
	
	/* Upadate values */
	var _textStyleRangeArray = _selection.textStyleRanges.everyItem().getElements();

	var _prevOTFFeatureValue;
	var _prevOTFFeatureAvailability;
	
	for(var i=0; i<_textStyleRangeArray.length; i+=1) {

		var _curTextStyleRange = _textStyleRangeArray[i];
		if(!_curTextStyleRange || !_curTextStyleRange.isValid) {
			continue;
		}
		
		/* Check: Feature support in used InDesign version  */
		if(!_curTextStyleRange.hasOwnProperty(_propertyName)) {
			break;
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
					(_otfFeatureTag === OpenTypeFeature.SUPERSCRIPT_FEATURE && _otfFeatureValue === Position.OT_SUPERSCRIPT) || 
					(_otfFeatureTag === OpenTypeFeature.SUBSCRIPT_FEATURE && _otfFeatureValue === Position.OT_SUBSCRIPT) ||
					(_otfFeatureTag === OpenTypeFeature.NUMERATOR_FEATURE && _otfFeatureValue === Position.OT_NUMERATOR) ||
					(_otfFeatureTag === OpenTypeFeature.DENOMINATOR_FEATURE && _otfFeatureValue === Position.OT_DENOMINATOR)
					) {
					_suiItem.value = true;
				}
				break;
			case "otfFigureStyle":
				if(
					(_otfFeatureTag === OpenTypeFeature.TABULAR_LINING_FEATURE && _otfFeatureValue === OTFFigureStyle.TABULAR_LINING) || 
					(_otfFeatureTag === OpenTypeFeature.PROPORTIONAL_OLDSTYLE_FEATURE && _otfFeatureValue === OTFFigureStyle.PROPORTIONAL_OLDSTYLE) ||
					(_otfFeatureTag === OpenTypeFeature.PROPORTIONAL_LINING_FEATURE && _otfFeatureValue === OTFFigureStyle.PROPORTIONAL_LINING) ||
					(_otfFeatureTag === OpenTypeFeature.TABULAR_OLDSTYLE_FEATURE && _otfFeatureValue === OTFFigureStyle.TABULAR_OLDSTYLE) ||
					(_otfFeatureTag === OpenTypeFeature.DEFAULT_FIGURE_STYLE_FEATURE && _otfFeatureValue === OTFFigureStyle.DEFAULT_VALUE)
					) {
					_suiItem.value = true;
				}
				break;
			/* Formsätze */
			case "otfStylisticSets":
				var _setCodeArray = [];
				if(!_prevSelection || _prevSelection !== _selection) {
					_setCodeArray = __getStylisticSetsArray(_otfFeatureValue);
					if(i === 0) {
						_window["stylisticSetCodes"] = [];
					}
					_window["stylisticSetCodes"].push(_setCodeArray);
				} else {
					_setCodeArray = (_window["stylisticSetCodes"] && _window["stylisticSetCodes"][i]) || [];
				}
				if(__isInArray(_suiItem.code, _setCodeArray)) {
					_suiItem.value = true;
				}
				break;
			/* Positionalform */
			case "positionalForm":
				if( 
					(_otfFeatureTag === "opfg" && _otfFeatureValue === PositionalForms.NONE) ||
					(_otfFeatureTag === "apfm" && _otfFeatureValue === PositionalForms.CALCULATE) ||
					(_otfFeatureTag === "init"  && _otfFeatureValue === PositionalForms.INITIAL) ||
					(_otfFeatureTag === "medi"  && _otfFeatureValue === PositionalForms.MEDIAL) ||
					(_otfFeatureTag === "fina"  && _otfFeatureValue === PositionalForms.FINAL) ||
					(_otfFeatureTag === "isol"  && _otfFeatureValue === PositionalForms.ISOLATED)
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
			__applyBackgroundColor(_suiItem.parent, _multipleValuesColor);
			_suiItem.helpTip = _suiItem.parent.helpTip = localize(_global.multipleFeatureValuesAlert);
			_suiItem.parent.isBackgroundSet = true;
		}

		_prevOTFFeatureValue = _otfFeatureValue;

		var _appliedFont = _curTextStyleRange.appliedFont;
		if(!_appliedFont || !(_appliedFont instanceof Font) || !_appliedFont.isValid) {
			continue;
		}

		var _otfFeatureAvailability;
		
		try {
			switch (_otfFeatureTag) {
				/* Hack: Positional Form */
				/* "opfg" (PositionalForms.NONE) and "apfm" (PositionalForms.CALCULATE) are specific to InDesign */
				case "opfg":
				case "apfm":
					_otfFeatureAvailability = (
						_appliedFont.checkOpenTypeFeature("init") || 
						_appliedFont.checkOpenTypeFeature("medi") || 
						_appliedFont.checkOpenTypeFeature("fina") || 
						_appliedFont.checkOpenTypeFeature("isol")
					);
					break;
				/* Hack: Figure Style */
				/* InDesign does not distinguish between "onum" with "pnum" or "tnum", same for "lnum" */
				case OpenTypeFeature.PROPORTIONAL_OLDSTYLE_FEATURE:
				case OpenTypeFeature.TABULAR_OLDSTYLE_FEATURE:
					_otfFeatureAvailability = (
						_appliedFont.checkOpenTypeFeature(_otfFeatureTag) ||
						_appliedFont.checkOpenTypeFeature("onum")
					);
					break;
				case OpenTypeFeature.TABULAR_LINING_FEATURE:
				case OpenTypeFeature.PROPORTIONAL_LINING_FEATURE:	
					_otfFeatureAvailability = (
						_appliedFont.checkOpenTypeFeature(_otfFeatureTag) ||
						_appliedFont.checkOpenTypeFeature("lnum")
					);
					break;
				default:
					_otfFeatureAvailability = _appliedFont.checkOpenTypeFeature(_otfFeatureTag);
					break;
			}
		} catch(_error) {
			_window.text = _error.message;
			continue;
		}
		
		if(_otfFeatureAvailability === true) {
			_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
		} 

		if(_suiItem.parent.isBackgroundSet !== true && _prevOTFFeatureAvailability !== undefined && _otfFeatureAvailability !== _prevOTFFeatureAvailability) {
			__applyBackgroundColor(_suiItem.parent, _multipleFeatureColor);
			_suiItem.helpTip = _suiItem.parent.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
		}

		_prevOTFFeatureAvailability = _otfFeatureAvailability;
	}
	
	return true;
} /* END function __checkOTFeature */


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
 * @param {Number} _stylisticSetCode 
 * @returns {Array}
 */
function __getStylisticSetsArray(_stylisticSetCode) {

	var _baseArray = [];

	for (var n = 1; n < 21; n++) {
		_baseArray.push(2 * Math.pow(2, n - 1));
	}

	var _stylisticSetArray = __getSubsetOfSum(_stylisticSetCode, _baseArray);
	if(!_stylisticSetArray || _stylisticSetArray.length === 0) {
		_stylisticSetArray = [0];
	}

	return _stylisticSetArray;
} /* END function __getStylisticSetsArray */


/**
 * Calculate subset of given sum 
 * @param {Number} _num 
 * @param {Array} _array 
 * @returns {Array}
 */
function __getSubsetOfSum(_num, _array) {
  
  if(_num < 0) { return null; }
  if(_num === 0) { return [0]; }

  _array = _array.slice();
  while(_array.length) {              // Try remaining values
    var _firstItem = _array.shift();            // Take next value
    var _subsetArray = __getSubsetOfSum(_num - _firstItem, _array); // Find solution recursively
    if (_subsetArray) { 
			return _subsetArray.concat(_firstItem);
		}
  }
} /* END function __getSubsetOfSum */


/**
 * Get name of stylistic set
 * @param {Number} _setNum
 * @returns {String}
 */
function __getOtfSylisticSetName(_setNum) {

	if(_setNum === null || _setNum === undefined || isNaN(_setNum)) {
		return "";
	}

	var _charPanelMenu = app.menus.itemByName("$ID/CharPanelPopup");
	if(!_charPanelMenu.isValid) {
		return "";
	}
	var _openTypeSubmenu = _charPanelMenu.submenus.itemByName("$ID/OpenType");
	if(!_openTypeSubmenu.isValid) {
		return "";
	}
	var _stylisticSetSubmenu = _openTypeSubmenu.submenus.itemByName("$ID/Stylistic");
	if(!_stylisticSetSubmenu.isValid) {
		return "";
	}
	var _stylisticSetItem = _stylisticSetSubmenu.menuItems.item(Number(_setNum) - 1);
	if(!_stylisticSetItem.isValid) {
		return "";
	}

	var _isChecked = _stylisticSetItem.checked; /* Trigger Indesign to retrieve the current name. */
	var _setName = _stylisticSetItem.name;

	return _setName;
} /* END __getOtfSylisticSetName */


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

	if(!_global) { return false; }
	if(
		!_otfFeatureName || _otfFeatureName.constructor !== String ||
		!_window || !(_window instanceof Window) ||
		_otfFeatureValue === null || _otfFeatureValue === undefined
	) { 
		_window.text = localize(_global.setValueAlert);
		return false; 
	}

	var _selection = __getSelection(_window);
	if(!_selection || !_selection.hasOwnProperty(_otfFeatureName) || !_selection.isValid) {
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
	if(!_selection) {
		_window.text = localize(_global.invalidSelectionAlert);
		return null;
	}

	switch (_selection.constructor.name) {
		case "InsertionPoint":
			_selection = _selection.paragraphs.firstItem();
			break;
		case "TextFrame":
			_selection = _selection.texts[0];
			break;
	}

	if(!_selection.isValid || !_selection.hasOwnProperty("opentypeFeatures")) {
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

	if(!_global) { return ""; }
	if(!_window || !(_window instanceof Window)) { 
		return localize(_global.windowNotAvailableAlert); 
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
 * Create Character Style
 * @param {String} _styleName 
 * @param {Object} _inputObj
 * @returns {CharacterStyle} 
 */
function __createCStyle(_styleName, _inputObj) {

	if(!_global) { return false; }
	if(_styleName === null || _styleName === undefined || _styleName.constructor !== String) { return false; }
	if(!_inputObj || !(_inputObj instanceof Object)) { return false; }

	var _style;

	if(app.documents.length === 0 || app.layoutWindows.length === 0) { 
		return false; 
	}

	var _doc = app.documents.firstItem();
	if(!_doc.isValid) {
		return false;
	}
	
	var _properties = {};

	for(var _key in _inputObj) {

		if(!_inputObj.hasOwnProperty(_key)) {
			continue;
		}

		var _value = _inputObj[_key];
		if(
			_value === false || 
			_value === Capitalization.NORMAL ||
			_value === Position.NORMAL ||
			_value === 0 ||
			_value === OTFFigureStyle.DEFAULT_VALUE ||
			_value === PositionalForms.NONE
		) {
			continue;
		}

		_properties[_key] = _value;
	}

	try {
		_style = _doc.characterStyles.add({ "name":_styleName }); /* -> DOC */
		_style.properties = _properties;
	} catch(_error) {
		alert(_error.message);
		return null;
	}

	return _style;
} /* END function __createCStyle */






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
	
	_global.cancelButtonLabel = {
		en:"Close",
		de:"Schlie\u00dfen"
	};
	
	_global.refreshButtonLabel = {
		en:"Refresh",
		de:"Aktualisieren"
	};
	
	_global.cStyleButtonLabel = {
		en:"Character Style",
		de:"Zeichenformat"
	};

	_global.cStyleButtonHelpTip = {
		en:"Create character style with selected OpenType features",
		de:"Zeichenformat mit ausgewählten OpenType-Eigenschaften erstellen."
	};

	_global.closeButtonHelpTip = {
		en:"Close Window",
		de:"Fenster schlie\u00dfen"
	};
	
	_global.refreshButtonHelpTip = {
		en:"Refresh display.",
		de:"Anzeige aktualisieren."
	};

	_global.invalidSelectionAlert = {
		en:"Please select some text!",
		de:"Bitte eine Textstelle ausw\u00e4hlen!"
	};
	
	_global.windowNotAvailableAlert = {
		en:"Dialog window not available",
		de:"Dialogfenster nicht verügbar!"
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
		de:"Auswahl nicht verfügbar!"
	};

	_global.multipleFeatureValuesAlert = {
		en:"The selection has different values for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Werte für diese OpenType-Funktion auf."
	}

	_global.multipleFeatureAvailabilityAlert = {
		en:"The selection has different availability for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Verfügbarkeit für diese OpenType-Funktion auf."
	}

	_global.oftGeneralFeaturePanelLabel = {
		en:"General",
		de:"Allgemein"
	};

	_global.oftSpecialFeaturePanelLabel = {
		en:"Special",
		de:"Speziell"
	};
	
	_global.ligatureCheckboxLabel = {
		en:"Ligatures",
		de:"Ligaturen"
	};

	_global.otfDiscretionaryLigatureCheckboxLabel = {
		en:"Discretionary Ligatures",
		de:"Bedingte Ligaturen"
	};

	_global.otfFractionCheckboxLabel = {
		en:"Fractions",
		de:"Brüche"
	};

	_global.otfOrdinalCheckboxLabel = {
		en:"Ordinal",
		de:"Ordinalzeichen"
	};

	_global.otfSwashCheckboxLabel = {
		en:"Swash",
		de:"Schwungschrift"
	};

	_global.otfTitlingCheckboxLabel = {
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

	_global.otfHistoricalCheckboxLabel = {
		en:"Historical Forms",
		de:"Historische Varianten"
	};

	_global.otfRomanItalicsCheckboxLabel = {
		en:"Roman Italics",
		de:"Roman Italics"
	};

	_global.otfLocaleCheckboxLabel = {
		en:"Localized forms",
		de:"Lokalisierte Formen"
	};

	_global.otfOverlapSwashCheckboxLabel = {
		en:"Overlapping Swash",
		de:"Überlappende Schwungschrift"
	};

	_global.otfMarkCheckboxLabelCheckboxLabel = {
		en:"Mark Positioning",
		de:"Markierte Positionierung"
	};

	_global.otfProportionalMetricsCheckboxLabel = {
		en:"Proportional Metrics",
		de:"Proportionale Metriken"
	};

	_global.otfJustificationAlternateCheckboxLabel = {
		en:"Justification Alternates",
		de:"Ausrichtungsvarianten"
	};

	_global.otfStretchedAlternateCheckboxLabel = {
		en:"Stretched Alternate",
		de:"Skalierte Varianten"
	};

	_global.otfStylisticAlternateCheckboxLabel = {
		en:"Stylistic Alternates",
		de:"Stilistische Varianten"
	};

	_global.otfHVKanaCheckboxLabel = {
		en:"H/V Kana Alternates",
		de:"H/V Kana-Varianten"
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

	_global.ligaturesFeatureDesc = {
		en:"If selected, replaces specific character combinations (e.g., fl, fi) with ligature characters.",
		de:"Wenn ausgewählt, werden spezielle Zeichenkombinationen (z.B. fl, fi) durch Ligaturzeichen ersetzt."
	};

	_global.otfDiscretionaryLigatureFeatureDesc = {
		en:"If true, uses discretionary ligatures in OpenType fonts.",
		de:"If true, uses discretionary ligatures in OpenType fonts."
	};

	_global.otfFractionFeatureDesc = {
		en:"If true, uses fractions in OpenType fonts.",
		de:"If true, uses fractions in OpenType fonts."
	};

	_global.otfOrdinalFeatureDesc = {
		en:"If true, uses ordinals in OpenType fonts.",
		de:"If true, uses ordinals in OpenType fonts."
	};

	_global.otfSwashFeatureDesc = {
		en:"If true, uses swash forms in OpenType fonts.",
		de:"If true, uses swash forms in OpenType fonts."
	};

	_global.otfTitlingFeatureDesc = {
		en:"If true, uses titling forms in OpenType fonts.",
		de:"If true, uses titling forms in OpenType fonts."
	};

	_global.otfContextualAlternateFeatureDesc = {
		en:"If true, uses contextual alternate forms in OpenType fonts.",
		de:"If true, uses contextual alternate forms in OpenType fonts."
	};

	_global.capitalizationFeatureDesc = {
		en:"If true, uses small capitals in OpenType fonts.",
		de:"If true, uses small capitals in OpenType fonts."
	};

	_global.otfSlashedZeroFeatureDesc = {
		en:"If true, use a slashed zeroes in OpenType fonts.",
		de:"If true, use a slashed zeroes in OpenType fonts."
	};

	_global.otfHistoricalFeatureDesc = {
		en:"If true, use historical forms in OpenType fonts.",
		de:"If true, use historical forms in OpenType fonts."
	};

	_global.otfRomanItalicsFeatureDesc = {
		en:"If true, applies italics to half-width alphanumerics.",
		de:"If true, applies italics to half-width alphanumerics."
	};

	_global.otfLocaleFeatureDesc = {
		en:"If true, uses localized forms in OpenType fonts.",
		de:"If true, uses localized forms in OpenType fonts."
	};

	_global.otfOverlapSwashFeatureDesc = {
		en:"If true, use overlapping swash forms in OpenType fonts.",
		de:"If true, use overlapping swash forms in OpenType fonts."
	};

	_global.otfMarkFeatureDesc = {
		en:"If true, uses mark positioning in OpenType fonts.",
		de:"If true, uses mark positioning in OpenType fonts."
	};

	_global.otfProportionalMetricsFeatureDesc = {
		en:"If true, kerns according to proportional CJK metrics in OpenType fonts.",
		de:"If true, kerns according to proportional CJK metrics in OpenType fonts."
	};

	_global.otfJustificationAlternateFeatureDesc = {
		en:"If true, use alternate justification forms in OpenType fonts.",
		de:"If true, use alternate justification forms in OpenType fonts."
	};

	_global.otfStretchedAlternateFeatureDesc = {
		en:"If true, use stretched alternate forms in OpenType fonts.",
		de:"If true, use stretched alternate forms in OpenType fonts."
	};

	_global.otfStylisticAlternateFeatureDesc = {
		en:"If true, use stylistic alternate forms in OpenType fonts.",
		de:"If true, use stylistic alternate forms in OpenType fonts."
	};

	_global.otfHVKanaFeatureDesc = {
		en:"If true, standard kana (hiragana and katakana) are replaced with forms specifically designed for horizontal or vertical writing.",
		de:"Wenn gewählt, werden standardmäßige Kana (Hiragana und Katakana) durch Formen ersetzt, die speziell für das horizontale oder vertikale Schreiben entwickelt wurden."
	};

	
} /* END function __defineLocalizeStrings */