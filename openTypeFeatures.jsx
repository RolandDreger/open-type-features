/* DESCRIPTION: Test OpenType features of installed fonts */ 

/*
	
	+	Adobe InDesign Version: CS2020+
	+	Autor: Roland Dreger
	+	Date: 30. August 2021
	
	+	Last updated: 3. Oktober 2021

		
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

//@targetengine "OpenTypeFeatures"

var _global = {
	"projectName":"OpenType Features",
	"version":"1.3"
};

_global["setups"] = {
	"isHelpTipDisplayed":false, /* Display OFT help tips. Values: true or false */
	"isStyleAppliedToSelection":true /* Apply style to selection. Values: true or false */
};


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
	const FIRST_COLUMN_CHAR_NUM = localize({ en: 20, de: 23, fr:31 });
	const SECOND_COLUMN_CHAR_NUM = localize({ en: 18, de: 23, fr:26 });
	const THIRD_COLUMN_CHAR_NUM = localize({ en: 14, de: 14, fr: 14 });
	
	var _setupObj = _global["setups"];
	if(!_setupObj || !(_setupObj instanceof Object)) { 
		return false; 
	}

	var _appliedFontsStatictext;

	var _ligaturesGroup;
	var _otfDiscretionaryLigatureGroup;
	var _otfFractionGroup;
	var _otfOrdinalGroup;
	var _otfSwashGroup;
	var _otfTitlingGroup;
	var _otfContextualAlternateGroup;
	var _capitalizationGroup;
	var _otfSlashedZeroGroup;

	var _otfHistoricalGroup;
	var _otfRomanItalicsGroup;
	var _otfLocaleGroup;
	var _otfOverlapSwashGroup;
	var _otfMarkGroup;
	var _otfProportionalMetricsGroup;
	var _otfJustificationAlternateGroup;
	var _otfStretchedAlternateGroup;
	var _otfStylisticAlternateGroup;
	var _otfHVKanaGroup;

	var _positionSuperscriptGroup;
	var _positionSubscriptGroup;
	var _positionNumeratorGroup;
	var _positionDenominatorGroup;

	var _digitDefaultFigureStyleGroup;
	var _digitProportionalOldstyleGroup;
	var _digitProportionalLiningGroup;
	var _digitTabularOldstyleGroup;
	var _digitTabularLiningGroup;

	var _positionalFormsGeneralGroup;
	var _positionalFormsAutomaticGroup;
	var _positionalFormsInitialGroup;
	var _positionalFormsMedialGroup;
	var _positionalFormsFinalGroup;
	var _positionalFormsIsolatedGroup;

	var _otfStylisticSet1Group;
	var _otfStylisticSet2Group;
	var _otfStylisticSet3Group;
	var _otfStylisticSet4Group;
	var _otfStylisticSet5Group;
	var _otfStylisticSet6Group;
	var _otfStylisticSet7Group;
	var _otfStylisticSet8Group;
	var _otfStylisticSet9Group;
	var _otfStylisticSet10Group;
	var _otfStylisticSet11Group;
	var _otfStylisticSet12Group;
	var _otfStylisticSet13Group;
	var _otfStylisticSet14Group;
	var _otfStylisticSet15Group;
	var _otfStylisticSet16Group;
	var _otfStylisticSet17Group;
	var _otfStylisticSet18Group;
	var _otfStylisticSet19Group;
	var _otfStylisticSet20Group;

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

	var _applyStyleToSelectionCheckbox;
	var _displayHelpTipCheckbox;

	var _closeButton;
	var _refreshButton;
	var _cStyleNameEdittext;
	var _cStyleButton;

	var _otfWindow = new Window("palette", localize(_global.uiHeadLabel));
	with (_otfWindow) { 
		alignChildren = ["fill","fill"];
		margins = [10,15,10,10]; 
		spacing = 10;
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
			orientation = "column";
			var _row1Group = add("group");
			with(_row1Group) {
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
						_ligaturesGroup = add("group");
						with(_ligaturesGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_ligaturesCheckbox = add("checkbox", undefined, localize(_global.ligatureCheckboxLabel));
							_ligaturesCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_ligaturesCheckbox["desc"] = localize(_global.ligaturesFeatureDesc);
						} /* END _ligaturesGroup */
						_otfDiscretionaryLigatureGroup = add("group");
						with(_otfDiscretionaryLigatureGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfDiscretionaryLigatureCheckbox = add("checkbox", undefined, localize(_global.otfDiscretionaryLigatureCheckboxLabel));
							_otfDiscretionaryLigatureCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfDiscretionaryLigatureCheckbox["desc"] = localize(_global.otfDiscretionaryLigatureFeatureDesc);
						} /* END _otfDiscretionaryLigatureGroup */
						_otfFractionGroup = add("group");
						with(_otfFractionGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfFractionCheckbox = add("checkbox", undefined, localize(_global.otfFractionCheckboxLabel));
							_otfFractionCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfFractionCheckbox["desc"] = localize(_global.otfFractionFeatureDesc);
						} /* END _otfFractionGroup */
						_otfOrdinalGroup = add("group");
						with(_otfOrdinalGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfOrdinalCheckbox = add("checkbox", undefined, localize(_global.otfOrdinalCheckboxLabel));
							_otfOrdinalCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfOrdinalCheckbox["desc"] = localize(_global.otfOrdinalFeatureDesc);
						} /* END _otfOrdinalGroup */
						_otfSwashGroup = add("group");
						with(_otfSwashGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfSwashCheckbox = add("checkbox", undefined, localize(_global.otfSwashCheckboxLabel));
							_otfSwashCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfSwashCheckbox["desc"] = localize(_global.otfSwashFeatureDesc);
						} /* END _otfSwashGroup */
						_otfTitlingGroup = add("group");
						with(_otfTitlingGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfTitlingCheckbox = add("checkbox", undefined, localize(_global.otfTitlingCheckboxLabel));
							_otfTitlingCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfTitlingCheckbox["desc"] = localize(_global.otfTitlingFeatureDesc);
						} /* END _otfTitlingGroup */
						_otfContextualAlternateGroup = add("group");
						with(_otfContextualAlternateGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfContextualAlternateCheckbox = add("checkbox", undefined, localize(_global.otfContextualAlternateCheckboxLabel));
							_otfContextualAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfContextualAlternateCheckbox["desc"] = localize(_global.otfContextualAlternateFeatureDesc);
						} /* END _otfContextualAlternateGroup */
						_capitalizationGroup = add("group");
						with(_capitalizationGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_capitalizationCheckbox = add("checkbox", undefined, localize(_global.capitalizationCheckboxLabel));
							_capitalizationCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_capitalizationCheckbox["desc"] = localize(_global.capitalizationFeatureDesc);
						} /* END _capitalizationGroup */
						_otfSlashedZeroGroup = add("group");
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
						_otfHistoricalGroup = add("group");
						with(_otfHistoricalGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfHistoricalCheckbox = add("checkbox", undefined, localize(_global.otfHistoricalCheckboxLabel));
							_otfHistoricalCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfHistoricalCheckbox["desc"] = localize(_global.otfHistoricalFeatureDesc);
						} /* END _otfHistoricalGroup */
						_otfRomanItalicsGroup = add("group");
						with(_otfRomanItalicsGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfRomanItalicsCheckbox = add("checkbox", undefined, localize(_global.otfRomanItalicsCheckboxLabel));
							_otfRomanItalicsCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfRomanItalicsCheckbox["desc"] = localize(_global.otfRomanItalicsFeatureDesc);
						} /* END _otfRomanItalicsGroup */
						_otfLocaleGroup = add("group");
						with(_otfLocaleGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfLocaleCheckbox = add("checkbox", undefined, localize(_global.otfLocaleCheckboxLabel));
							_otfLocaleCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfLocaleCheckbox["desc"] = localize(_global.otfLocaleFeatureDesc);
						} /* END _otfLocaleGroup */
						_otfOverlapSwashGroup = add("group");
						with(_otfOverlapSwashGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfOverlapSwashCheckbox = add("checkbox", undefined, localize(_global.otfOverlapSwashCheckboxLabel));
							_otfOverlapSwashCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfOverlapSwashCheckbox["desc"] = localize(_global.otfOverlapSwashFeatureDesc);
						} /* END _otfOverlapSwashGroup */
						_otfMarkGroup = add("group");
						with(_otfMarkGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfMarkCheckbox = add("checkbox", undefined, localize(_global.otfMarkCheckboxLabelCheckboxLabel));
							_otfMarkCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfMarkCheckbox["desc"] = localize(_global.otfMarkFeatureDesc);
						} /* END _otfMarkGroup */
						_otfProportionalMetricsGroup = add("group");
						with(_otfProportionalMetricsGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfProportionalMetricsCheckbox = add("checkbox", undefined, localize(_global.otfProportionalMetricsCheckboxLabel));
							_otfProportionalMetricsCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfProportionalMetricsCheckbox["desc"] = localize(_global.otfProportionalMetricsFeatureDesc);
						} /* END _otfProportionalMetricsGroup */
						_otfJustificationAlternateGroup = add("group");
						with(_otfJustificationAlternateGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfJustificationAlternateCheckbox = add("checkbox", undefined, localize(_global.otfJustificationAlternateCheckboxLabel));
							_otfJustificationAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfJustificationAlternateCheckbox["desc"] = localize(_global.otfJustificationAlternateFeatureDesc);
						} /* END _otfJustificationAlternateGroup */
						_otfStretchedAlternateGroup = add("group");
						with(_otfStretchedAlternateGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStretchedAlternateCheckbox = add("checkbox", undefined, localize(_global.otfStretchedAlternateCheckboxLabel));
							_otfStretchedAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfStretchedAlternateCheckbox["desc"] = localize(_global.otfStretchedAlternateFeatureDesc);
						} /* END _otfStretchedAlternateGroup */
						_otfStylisticAlternateGroup = add("group");
						with(_otfStylisticAlternateGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_otfStylisticAlternateCheckbox = add("checkbox", undefined, localize(_global.otfStylisticAlternateCheckboxLabel));
							_otfStylisticAlternateCheckbox.characters = FIRST_COLUMN_CHAR_NUM;
							_otfStylisticAlternateCheckbox["desc"] = localize(_global.otfStylisticAlternateFeatureDesc);
						} /* END _otfStylisticAlternateGroup */
						_otfHVKanaGroup = add("group");
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
						_positionSuperscriptGroup = add("group");
						with(_positionSuperscriptGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionSuperscriptCheckbox = add("checkbox", undefined, localize(_global.positionSuperscriptCheckboxLabel));
							_positionSuperscriptCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionSuperscriptCheckbox["desc"] = localize(_global.positionSuperscriptFeatureDesc);
						} /* END _positionSuperscriptGroup */
						_positionSubscriptGroup = add("group");
						with(_positionSubscriptGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionSubscriptCheckbox = add("checkbox", undefined, localize(_global.positionSubscriptCheckboxLabel));
							_positionSubscriptCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionSubscriptCheckbox["desc"] = localize(_global.positionSubscriptFeatureDesc);
						} /* END _positionSubscriptGroup */
						_positionNumeratorGroup = add("group");
						with(_positionNumeratorGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionNumeratorCheckbox = add("checkbox", undefined, localize(_global.positionNumeratorCheckboxLabel));
							_positionNumeratorCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionNumeratorCheckbox["desc"] = localize(_global.positionNumeratorFeatureDesc);
						} /* END _positionNumeratorGroup */
						_positionDenominatorGroup = add("group");
						with(_positionDenominatorGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionDenominatorCheckbox = add("checkbox", undefined, localize(_global.positionDenominatorCheckboxLabel));
							_positionDenominatorCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionDenominatorCheckbox["desc"] = localize(_global.positionDenominatorFeatureDesc);
						} /* END _positionDenominatorGroup */
					} /* END _otfPositionPanel */
					var _otfDigitPanel = add("panel", undefined,localize(_global.otfDigitPanelLabel));
					with(_otfDigitPanel) {
						alignChildren = ["fill","top"];
						margins = PANEL_MARGINS;
						spacing = 0;
						_digitDefaultFigureStyleGroup = add("group");
						with(_digitDefaultFigureStyleGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_digitDefaultFigureStyleCheckbox = add("checkbox", undefined, localize(_global.digitDefaultFigureStyleCheckboxLabel));
							_digitDefaultFigureStyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_digitDefaultFigureStyleCheckbox["desc"] = localize(_global.digitDefaultFigureStyleFeatureDesc);
						} /* END _digitDefaultFigureStyleGroup */
						_digitProportionalOldstyleGroup = add("group");
						with(_digitProportionalOldstyleGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_digitProportionalOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitProportionalOldstyleCheckboxLabel));
							_digitProportionalOldstyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_digitProportionalOldstyleCheckbox["desc"] = localize(_global.digitProportionalOldstyleFeatureDesc);
						} /* END _digitProportionalOldstyleGroup */
						_digitProportionalLiningGroup = add("group");
						with(_digitProportionalLiningGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_digitProportionalLiningCheckbox = add("checkbox", undefined, localize(_global.digitProportionalLiningCheckboxLabel));
							_digitProportionalLiningCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_digitProportionalLiningCheckbox["desc"] = localize(_global.digitProportionalLiningFeatureDesc);
						} /* END _digitProportionalLiningGroup */
						_digitTabularOldstyleGroup = add("group");
						with(_digitTabularOldstyleGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_digitTabularOldstyleCheckbox = add("checkbox", undefined, localize(_global.digitTabularOldstyleCheckboxLabel));
							_digitTabularOldstyleCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_digitTabularOldstyleCheckbox["desc"] = localize(_global.digitTabularOldstyleFeatureDesc);
						} /* END _digitTabularOldstyleGroup */
						_digitTabularLiningGroup = add("group");
						with(_digitTabularLiningGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_digitTabularLiningCheckbox = add("checkbox", undefined, localize(_global.digitTabularLiningCheckboxLabel));
							_digitTabularLiningCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_digitTabularLiningCheckbox["desc"] = localize(_global.digitTabularLiningFeatureDesc);
						} /* END _digitTabularLiningGroup */
					} /* END _otfDigitPanel */
					var _positionalFormsPanel = add("panel", undefined,localize(_global.positionalFormLabel));
					with(_positionalFormsPanel) {
						alignChildren = ["fill","top"];
						margins = PANEL_MARGINS;
						spacing = 0;
						_positionalFormsGeneralGroup = add("group");
						with(_positionalFormsGeneralGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsGeneralCheckbox = add("checkbox", undefined, localize(_global.positionalFormsGeneralCheckboxLabel));
							_positionalFormsGeneralCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsGeneralCheckbox["desc"] = localize(_global.positionalFormsGeneralFeatureDesc);
						} /* END _positionalFormsGeneralGroup */
						_positionalFormsAutomaticGroup = add("group");
						with(_positionalFormsAutomaticGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsAutomaticCheckbox = add("checkbox", undefined, localize(_global.positionalFormsAutomaticCheckboxLabel));
							_positionalFormsAutomaticCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsAutomaticCheckbox["desc"] = localize(_global.positionalFormsAutomaticFeatureDesc);
						} /* END _positionalFormsAutomaticGroup */
						_positionalFormsInitialGroup = add("group");
						with(_positionalFormsInitialGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsInitialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsInitialCheckboxLabel));
							_positionalFormsInitialCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsInitialCheckbox["desc"] = localize(_global.positionalFormsInitialFeatureDesc);
						} /* END _positionalFormsInitialGroup */
						_positionalFormsMedialGroup = add("group");
						with(_positionalFormsMedialGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsMedialCheckbox = add("checkbox", undefined, localize(_global.positionalFormsMedialCheckboxLabel));
							_positionalFormsMedialCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsMedialCheckbox["desc"] = localize(_global.positionalFormsMedialFeatureDesc);
						} /* END _positionalFormsMedialGroup */
						_positionalFormsFinalGroup = add("group");
						with(_positionalFormsFinalGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsFinalCheckbox = add("checkbox", undefined, localize(_global.positionalFormsFinalCheckboxLabel));
							_positionalFormsFinalCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsFinalCheckbox["desc"] = localize(_global.positionalFormsFinalFeatureDesc);
						} /* END _positionalFormsFinalGroup */
						_positionalFormsIsolatedGroup = add("group");
						with(_positionalFormsIsolatedGroup) {
							margins = FEATURE_GROUP_MARGINS;
							_positionalFormsIsolatedCheckbox = add("checkbox", undefined, localize(_global.positionalFormsIsolatedCheckboxLabel));
							_positionalFormsIsolatedCheckbox.characters = SECOND_COLUMN_CHAR_NUM;
							_positionalFormsIsolatedCheckbox["desc"] = localize(_global.positionalFormsIsolatedFeatureDesc);
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
							_otfStylisticSet1Group = add("group");
							with(_otfStylisticSet1Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet1Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "1"));
								_otfStylisticSet1Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet1Checkbox.code = 2;
							} /* END _otfStylisticSet1Group */
							_otfStylisticSet2Group = add("group");
							with(_otfStylisticSet2Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet2Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "2"));
								_otfStylisticSet2Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet2Checkbox.code = 4;
							} /* END _otfStylisticSet2Group */
							_otfStylisticSet3Group = add("group");
							with(_otfStylisticSet3Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet3Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "3"));
								_otfStylisticSet3Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet3Checkbox.code = 8;
							} /* END _otfStylisticSet3Group */
							_otfStylisticSet4Group = add("group");
							with(_otfStylisticSet4Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet4Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "4"));
								_otfStylisticSet4Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet4Checkbox.code = 16;
							} /* END _otfStylisticSet4Group */
							_otfStylisticSet5Group = add("group");
							with(_otfStylisticSet5Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet5Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "5"));
								_otfStylisticSet5Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet5Checkbox.code = 32;
							} /* END _otfStylisticSet5Group */
							_otfStylisticSet6Group = add("group");
							with(_otfStylisticSet6Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet6Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "6"));
								_otfStylisticSet6Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet6Checkbox.code = 64;
							} /* END _otfStylisticSet6Group */
							_otfStylisticSet7Group = add("group");
							with(_otfStylisticSet7Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet7Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "7"));
								_otfStylisticSet7Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet7Checkbox.code = 128;
							} /* END _otfStylisticSet7Group */
							_otfStylisticSet8Group = add("group");
							with(_otfStylisticSet8Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet8Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "8"));
								_otfStylisticSet8Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet8Checkbox.code = 256;
							} /* END _otfStylisticSet8Group */
							_otfStylisticSet9Group = add("group");
							with(_otfStylisticSet9Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet9Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "9"));
								_otfStylisticSet9Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet9Checkbox.code = 512;
							} /* END _otfStylisticSet9Group */
							_otfStylisticSet10Group = add("group");
							with(_otfStylisticSet10Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet10Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "10"));
								_otfStylisticSet10Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet10Checkbox.code = 1024;
							} /* END _otfStylisticSet10Group */
							_otfStylisticSet11Group = add("group");
							with(_otfStylisticSet11Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet11Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "11"));
								_otfStylisticSet11Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet11Checkbox.code = 2048;
							} /* END _otfStylisticSet11Group */
							_otfStylisticSet12Group = add("group");
							with(_otfStylisticSet12Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet12Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "12"));
								_otfStylisticSet12Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet12Checkbox.code = 4096;
							} /* END _otfStylisticSet12Group */
							_otfStylisticSet13Group = add("group");
							with(_otfStylisticSet13Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet13Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "13"));
								_otfStylisticSet13Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet13Checkbox.code = 8192;
							} /* END _otfStylisticSet13Group */
							_otfStylisticSet14Group = add("group");
							with(_otfStylisticSet14Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet14Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "14"));
								_otfStylisticSet14Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet14Checkbox.code = 16384;
							} /* END _otfStylisticSet14Group */
							_otfStylisticSet15Group = add("group");
							with(_otfStylisticSet15Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet15Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "15"));
								_otfStylisticSet15Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet15Checkbox.code = 32768;
							} /* END _otfStylisticSet15Group */
							_otfStylisticSet16Group = add("group");
							with(_otfStylisticSet16Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet16Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "16"));
								_otfStylisticSet16Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet16Checkbox.code = 65536;
							} /* END _otfStylisticSet16Group */
							_otfStylisticSet17Group = add("group");
							with(_otfStylisticSet17Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet17Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "17"));
								_otfStylisticSet17Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet17Checkbox.code = 131072;
							} /* END _otfStylisticSet17Group */
							_otfStylisticSet18Group = add("group");
							with(_otfStylisticSet18Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet18Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "18"));
								_otfStylisticSet18Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet18Checkbox.code = 262144;
							} /* END _otfStylisticSet18Group */
							_otfStylisticSet19Group = add("group");
							with(_otfStylisticSet19Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet19Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "19"));
								_otfStylisticSet19Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet19Checkbox.code = 524288;
							} /* END _otfStylisticSet19Group */
							_otfStylisticSet20Group = add("group");
							with(_otfStylisticSet20Group) {
								margins = FEATURE_GROUP_MARGINS;
								_otfStylisticSet20Checkbox = add("checkbox", undefined, localize(_global.otfStylisticSetCheckboxLabel, "20"));
								_otfStylisticSet20Checkbox.characters = THIRD_COLUMN_CHAR_NUM;
								_otfStylisticSet20Checkbox.code = 1048576;
							} /* END _otfStylisticSet20Group */
						} /* END _otfStylisticSetColumn2Group */
					} /* END _otfStylisticSetsPanel */
				} /* END _column3Group */
			} /* END _row1Group */
			var _row2Group = add("group");
			with(_row2Group) {
				alignChildren = ["fill","fill"];
				var _tab1ActionsGroup = add('group');
				with(_tab1ActionsGroup) {
					_cStyleNameEdittext = add("edittext", undefined, "");
					with(_cStyleNameEdittext) {
						characters = 24;
						alignment = ["left","middle"];
					} /* END _cStyleNameEdittext */
					_cStyleButton = add('button', undefined, ("+ " + localize(_global.cStyleButtonLabel)), { name:"ok" });
					with(_cStyleButton) {
						alignment = ["left","middle"];
						helpTip = localize(_global.cStyleButtonHelpTip);
					} /* END _cStyleButton */
					_applyStyleToSelectionCheckbox = add("checkbox", undefined, localize(_global.applyStyleToSelectionCheckboxLabel));
					with(_applyStyleToSelectionCheckbox) {
						alignment = ["left","bottom"];
						helpTip = localize(_global.applyStyleToSelectionCheckboxHelpTip);
					} /* END _applyStyleToSelectionCheckbox */
					_refreshButton = add("button", undefined, localize(_global.refreshButtonLabel));
					with(_refreshButton) {
						alignment = ["right","middle"];
						preferredSize.width = 120;
						helpTip = localize(_global.refreshButtonHelpTip);
					} /* END _refreshButton */
				} /* END _tab1ActionsGroup */
			} /* END _row2Group */
		} /* END _selectionGroup */
		var _buttonGroup = add("group");
		with(_buttonGroup) {
			margins = 0;
			spacing = 10;
			_displayHelpTipCheckbox = add("checkbox", undefined, localize(_global.displayHelpTipCheckboxLabel));
			with(_displayHelpTipCheckbox) {
				alignment = ["left","bottom"];
			} /* END _displayHelpTipCheckbox */
			_closeButton = add("button", undefined, localize(_global.cancelButtonLabel), { name:"cancel" });
			with(_closeButton) {
				alignment = ["right","bottom"];
				preferredSize.width = 120;
				helpTip = localize(_global.closeButtonHelpTip);
			} /* END _closeButton */
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
	/* Special Features (NOT accessible via InDesign user interface) */
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
		var _value = (this.value && OTFFigureStyle.TABULAR_LINING) || OTFFigureStyle.DEFAULT_VALUE;
		__setValue("otfFigureStyle", _value, _otfWindow);
		__checkInputs("otfFigureStyle");
	};
	/* Formatsätze */
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
	/* Positional Form */
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

	/* ALT + Click on Group (enable the checkboxes) */
	_ligaturesGroup.addEventListener('mousedown', __altKeyHandler);
	_otfDiscretionaryLigatureGroup.addEventListener('mousedown', __altKeyHandler);
	_otfFractionGroup.addEventListener('mousedown', __altKeyHandler);
	_otfOrdinalGroup.addEventListener('mousedown', __altKeyHandler);
	_otfSwashGroup.addEventListener('mousedown', __altKeyHandler);
	_otfTitlingGroup.addEventListener('mousedown', __altKeyHandler);
	_otfContextualAlternateGroup.addEventListener('mousedown', __altKeyHandler);
	_capitalizationGroup.addEventListener('mousedown', __altKeyHandler);
	_otfSlashedZeroGroup.addEventListener('mousedown', __altKeyHandler);

	_otfHistoricalGroup.addEventListener('mousedown', __altKeyHandler);
	_otfRomanItalicsGroup.addEventListener('mousedown', __altKeyHandler);
	_otfLocaleGroup.addEventListener('mousedown', __altKeyHandler);
	_otfOverlapSwashGroup.addEventListener('mousedown', __altKeyHandler);
	_otfMarkGroup.addEventListener('mousedown', __altKeyHandler);
	_otfProportionalMetricsGroup.addEventListener('mousedown', __altKeyHandler);
	_otfJustificationAlternateGroup.addEventListener('mousedown', __altKeyHandler);
	_otfStretchedAlternateGroup.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticAlternateGroup.addEventListener('mousedown', __altKeyHandler);
	_otfHVKanaGroup.addEventListener('mousedown', __altKeyHandler);

	_positionSuperscriptGroup.addEventListener('mousedown', __altKeyHandler);
	_positionSubscriptGroup.addEventListener('mousedown', __altKeyHandler);
	_positionNumeratorGroup.addEventListener('mousedown', __altKeyHandler);
	_positionDenominatorGroup.addEventListener('mousedown', __altKeyHandler);

	_digitDefaultFigureStyleGroup.addEventListener('mousedown', __altKeyHandler);
	_digitProportionalOldstyleGroup.addEventListener('mousedown', __altKeyHandler);
	_digitProportionalLiningGroup.addEventListener('mousedown', __altKeyHandler);
	_digitTabularOldstyleGroup.addEventListener('mousedown', __altKeyHandler);
	_digitTabularLiningGroup.addEventListener('mousedown', __altKeyHandler);

	_positionalFormsGeneralGroup.addEventListener('mousedown', __altKeyHandler);
	_positionalFormsAutomaticGroup.addEventListener('mousedown', __altKeyHandler);
	_positionalFormsInitialGroup.addEventListener('mousedown', __altKeyHandler);
	_positionalFormsMedialGroup.addEventListener('mousedown', __altKeyHandler);
	_positionalFormsFinalGroup.addEventListener('mousedown', __altKeyHandler);
	_positionalFormsIsolatedGroup.addEventListener('mousedown', __altKeyHandler);

	_otfStylisticSet1Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet2Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet3Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet4Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet5Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet6Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet7Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet8Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet9Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet10Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet11Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet12Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet13Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet14Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet15Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet16Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet17Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet18Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet19Group.addEventListener('mousedown', __altKeyHandler);
	_otfStylisticSet20Group.addEventListener('mousedown', __altKeyHandler);

	function __altKeyHandler(_event) {
		
		/* If a modal dialog is open? Bug? */
		try {

			if(!_event || !_event.hasOwnProperty("altKey")) {
				return false;
			}

			if(!_event.altKey) {
				return false;
			}

			var _eventTarget = _event.currentTarget;
			if(!_eventTarget || !(_eventTarget instanceof Group)) {
				return false;
			}

			var _firstTargetChild = _eventTarget.children[0];
			if(!_firstTargetChild || !_firstTargetChild.hasOwnProperty("enabled")) {
				return false;
			}

			_firstTargetChild.enabled = !_firstTargetChild.enabled;

		} catch(_error) {
			return false;
		}
		
		return true;
	} /* END function __altKeyHandler */


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
		if(!_cStyleName) {
			return false;
		}
		var _inputObj = __getOTFeatureValues();
		var _cStyle = __createCStyle(_cStyleName, _inputObj);
		if(_cStyle) { 
			_cStyleNameEdittext.text = "";
			if(_applyStyleToSelectionCheckbox.value === true) {
				__applyCStyle(_cStyle, _selection);
			}
		}
	};

	_cStyleNameEdittext.addEventListener('keydown', function (_event) {
		if(_event.keyName === "Enter") {
			_cStyleButton.notify();
			_cStyleButton.active = true;
		}
	});

	_displayHelpTipCheckbox.onClick = function() {
		_otfWindow["isHelpTipDisplayed"] = this.value;
		_refreshButton.notify();
	};

	_closeButton.onClick = function() {
		_otfWindow.close(2);
	};
	
	_otfWindow.onClose = function() {
		if(_selectionEventListener && (_selectionEventListener instanceof EventListener) && _selectionEventListener.isValid) {
			_selectionEventListener.remove();
		}
		_global = null;
	};


	/* Initialize Dialog */
	_appliedFontsStatictext.text = __getAppliedFonts(_otfWindow);
	_applyStyleToSelectionCheckbox.value = _setupObj["isStyleAppliedToSelection"];
	_otfWindow["isHelpTipDisplayed"] = _displayHelpTipCheckbox.value = _setupObj["isHelpTipDisplayed"];
	_otfWindow["stylisticSetCodes"] = [[]];
	__checkInputs();

	
	/* EventListener AFTER_SELECTION_CHANGED */
	var _selectionEventListener = app.addEventListener(Application.AFTER_SELECTION_CHANGED, __checkInputs);
	

	/* Check inputs */
	function __checkInputs(_flag) {
		
		if(!_global) {
			return false;
		}
		
		if(_flag !== null && _flag !== undefined && _flag instanceof Event) {
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
	

	/* Get inputs */
	function __getOTFeatureValues() {
		return {
			"ligatures":{
				"value":_ligaturesCheckbox.value,
				"enabled":_ligaturesCheckbox.enabled
			},
			"otfDiscretionaryLigature":{ 
				"value":_otfDiscretionaryLigatureCheckbox.value, 
				"enabled":_otfDiscretionaryLigatureCheckbox.enabled
			},
			"otfFraction":{ 
				"value":_otfFractionCheckbox.value, 
				"enabled":_otfFractionCheckbox.enabled
			},
			"otfOrdinal":{ 
				"value":_otfOrdinalCheckbox.value, 
				"enabled":_otfOrdinalCheckbox.enabled
			},
			"otfSwash":{ 
				"value":_otfSwashCheckbox.value, 
				"enabled":_otfSwashCheckbox.enabled
			},
			"otfTitling":{ 
				"value":_otfTitlingCheckbox.value, 
				"enabled":_otfTitlingCheckbox.enabled
			},
			"otfContextualAlternate":{ 
				"value":_otfContextualAlternateCheckbox.value, 
				"enabled":_otfContextualAlternateCheckbox.enabled
			},
			"capitalization":{ 
				"value":(_capitalizationCheckbox.value) ? Capitalization.CAP_TO_SMALL_CAP : Capitalization.NORMAL, 
				"enabled":_capitalizationCheckbox.enabled
			},
			"otfSlashedZero":{ 
				"value":_otfSlashedZeroCheckbox.value, 
				"enabled":_otfSlashedZeroCheckbox.enabled
			},
			"otfHistorical":{ 
				"value":_otfHistoricalCheckbox.value, 
				"enabled":_otfHistoricalCheckbox.enabled
			},
			"otfRomanItalics":{ 
				"value":_otfRomanItalicsCheckbox.value, 
				"enabled":_otfRomanItalicsCheckbox.enabled
			},
			"otfLocale":{ 
				"value":_otfLocaleCheckbox.value, 
				"enabled":_otfLocaleCheckbox.enabled
			},
			"otfOverlapSwash":{ 
				"value":_otfOverlapSwashCheckbox.value, 
				"enabled":_otfOverlapSwashCheckbox.enabled
			},
			"otfMark":{ 
				"value":_otfMarkCheckbox.value, 
				"enabled":_otfMarkCheckbox.enabled
			},
			"otfProportionalMetrics":{ 
				"value":_otfProportionalMetricsCheckbox.value, 
				"enabled":_otfProportionalMetricsCheckbox.enabled
			},
			"otfJustificationAlternate":{ 
				"value":_otfJustificationAlternateCheckbox.value, 
				"enabled":_otfJustificationAlternateCheckbox.enabled
			},
			"otfStretchedAlternate":{ 
				"value":_otfStretchedAlternateCheckbox.value, 
				"enabled":_otfStretchedAlternateCheckbox.enabled
			},
			"otfStylisticAlternate":{ 
				"value":_otfStylisticAlternateCheckbox.value, 
				"enabled":_otfStylisticAlternateCheckbox.enabled
			},
			"otfHVKana":{ 
				"value":_otfHVKanaCheckbox.value,
				"enabled":_otfHVKanaCheckbox.enabled
			},
			"position": { 
				"value":(
					(_positionSuperscriptCheckbox.value && Position.OT_SUPERSCRIPT) ||
					(_positionSubscriptCheckbox.value && Position.OT_SUBSCRIPT) ||
					(_positionNumeratorCheckbox.value && Position.OT_NUMERATOR) ||
					(_positionDenominatorCheckbox.value && Position.OT_DENOMINATOR) || 
					Position.NORMAL
				), 
				"enabled":(
					_positionSuperscriptCheckbox.enabled || 
					_positionSubscriptCheckbox.enabled || 
					_positionNumeratorCheckbox.enabled || 
					_positionDenominatorCheckbox.enabled
				)
			},
			"otfFigureStyle":{ 
				"value":(
					(_digitTabularLiningCheckbox.value && OTFFigureStyle.TABULAR_LINING) ||
					(_digitProportionalOldstyleCheckbox.value && OTFFigureStyle.PROPORTIONAL_OLDSTYLE) ||
					(_digitProportionalLiningCheckbox.value && OTFFigureStyle.PROPORTIONAL_LINING) ||
					(_digitTabularOldstyleCheckbox.value && OTFFigureStyle.TABULAR_OLDSTYLE) ||
					OTFFigureStyle.DEFAULT_VALUE
				), 
				"enabled":(
					_digitTabularLiningCheckbox.enabled ||
					_digitProportionalOldstyleCheckbox.enabled ||
					_digitProportionalLiningCheckbox.enabled ||
					_digitTabularOldstyleCheckbox.enabled
				)
			},
			"otfStylisticSets":{ 
				"value":__getOtfSylisticSetValue(_otfStylisticSetsPanel), 
				"enabled":(
					_otfStylisticSet1Checkbox.enabled || 
					_otfStylisticSet2Checkbox.enabled || 
					_otfStylisticSet3Checkbox.enabled || 
					_otfStylisticSet4Checkbox.enabled || 
					_otfStylisticSet5Checkbox.enabled || 
					_otfStylisticSet6Checkbox.enabled || 
					_otfStylisticSet7Checkbox.enabled || 
					_otfStylisticSet8Checkbox.enabled || 
					_otfStylisticSet9Checkbox.enabled || 
					_otfStylisticSet10Checkbox.enabled || 
					_otfStylisticSet11Checkbox.enabled || 
					_otfStylisticSet12Checkbox.enabled || 
					_otfStylisticSet13Checkbox.enabled || 
					_otfStylisticSet14Checkbox.enabled || 
					_otfStylisticSet15Checkbox.enabled || 
					_otfStylisticSet16Checkbox.enabled || 
					_otfStylisticSet17Checkbox.enabled || 
					_otfStylisticSet18Checkbox.enabled || 
					_otfStylisticSet19Checkbox.enabled || 
					_otfStylisticSet20Checkbox.enabled
				)
			},
			"positionalForm":{ 
				"value":(
					(_positionalFormsAutomaticCheckbox.value && PositionalForms.CALCULATE) ||
					(_positionalFormsInitialCheckbox.value && PositionalForms.INITIAL) ||
					(_positionalFormsMedialCheckbox.value && PositionalForms.MEDIAL) ||
					(_positionalFormsFinalCheckbox.value && PositionalForms.FINAL) ||
					(_positionalFormsIsolatedCheckbox.value && PositionalForms.ISOLATED) ||
					PositionalForms.NONE
				), 
				"enabled":(
					_positionalFormsAutomaticCheckbox.enabled ||
					_positionalFormsInitialCheckbox.enabled ||
					_positionalFormsMedialCheckbox.enabled ||
					_positionalFormsFinalCheckbox.enabled ||
					_positionalFormsIsolatedCheckbox.enabled
				)
			}
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

	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) { 
		_window.text = localize(_global.selectionNotValidAlert);
		return false;
	}
	
	const MODE = "enable"; /* Values: enable or brackets */

	const TRANSPARENT_WHITE_COLOR = [1,1,1,0];
	const _squareBracketRegExp = new RegExp("[\\[\\]]+","g");

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
	/* OTF Help Tips */
	if(_window["isHelpTipDisplayed"] === true) {
		_suiItem.helpTip = _suiItem.parent.helpTip = (_suiItem["desc"] || "");
	} else {
		_suiItem.helpTip = _suiItem.parent.helpTip = "";
	}
	/* Stylistic Set Names */
	if(_propertyName === "otfStylisticSets") {
		var _setNum = Number(_otfFeatureTag.replace(/\D+/g,""));
		var _suiItemLabel = __getOtfSylisticSetName(_setNum);
		_suiItem.text = (_suiItemLabel && _suiItemLabel.replace(_squareBracketRegExp, ""));
		if(_suiItem.text.length > 7) {
			_suiItem.helpTip = _suiItem.parent.helpTip = _suiItem.text;
		}
	}


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
			/* Formatsätze */
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
					(_otfFeatureTag === "init" && _otfFeatureValue === PositionalForms.INITIAL) ||
					(_otfFeatureTag === "medi" && _otfFeatureValue === PositionalForms.MEDIAL) ||
					(_otfFeatureTag === "fina" && _otfFeatureValue === PositionalForms.FINAL) ||
					(_otfFeatureTag === "isol" && _otfFeatureValue === PositionalForms.ISOLATED)
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
		
		if(_suiItem.parent.isBackgroundSet !== true && _prevOTFFeatureAvailability !== undefined && _otfFeatureAvailability !== _prevOTFFeatureAvailability) {
			__applyBackgroundColor(_suiItem.parent, _multipleFeatureColor);
			_suiItem.helpTip = _suiItem.parent.helpTip = localize(_global.multipleFeatureAvailabilityAlert);
			_otfFeatureAvailability = true;
		}

		switch (MODE) {
			case "brackets":
				if(_otfFeatureAvailability === true) {
					_suiItem.text = _suiItem.text.replace(_squareBracketRegExp, "");
				} else {
					_suiItem.text = "[" + _suiItem.text.replace(_squareBracketRegExp, "") + "]";
				}
				break;
			case "enable":
				if(_otfFeatureAvailability === true) {
					_suiItem.enabled = true;
				} else {
					_suiItem.enabled = false;
				}
				break;
			default:
				_suiItem.enabled = false;
				break;
		}

		_prevOTFFeatureAvailability = _otfFeatureAvailability;
	}
	
	return true;
} /* END function __checkOTFeature */


/**
 * Determine Sylistic Set Value
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
 * Calculate Stylistic Set Codes
 * @param {Number} _stylisticSetCode 
 * @returns {Array}
 */
 function __getStylisticSetsArray(_stylisticSetCode) {

	var _baseArray = [];

	for (var n = 20; n > 0; n-=1) {
		_baseArray.push(2 * Math.pow(2, n - 1));
	}

	var _stylisticSetArray = __getSubsetOfSum(_stylisticSetCode, _baseArray.slice());
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
	if(_num === 0) { return [_num]; }
 
	while(_array.length) {
	  var _firstItem = _array.shift();
	  var _subsetArray = __getSubsetOfSum(_num - _firstItem, _array);
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
 * Assign background color for script UI item
 * @param {SUIItem} _suiItem 
 * @param {Boolean} _flag 
 * @returns {Boolean}
 */
function __applyBackgroundColor(_suiItem, _bgColorArray, _flag) {

	if (!_suiItem || !_suiItem.hasOwnProperty("graphics")) { return false; }
	if (!_bgColorArray || !(_bgColorArray instanceof Array) || _bgColorArray.length !== 4) { return false; }

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
 * Set value of OTF property
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

	var _selection = app.properties.selection && (app.selection.length === 1) && app.selection[0];
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
	if(!_selection || !_selection.hasOwnProperty("textStyleRanges") || !_selection.isValid) {
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
		if(!!_appliedFont && (_appliedFont instanceof Font) && _appliedFont.isValid) {

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
 * Filter array for multiple entries
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

		var _value = _inputObj[_key]["value"];
		var _isEnabled = _inputObj[_key]["enabled"];

		if(
			!_isEnabled ||
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
 * Apply Character Style to Selection
 * @param {CharacterStyle} _cStyle 
 * @param {Text} _selection  
 * @returns {Boolean}
 */
function __applyCStyle(_cStyle, _selection) {

	if(!_cStyle || !(_cStyle instanceof CharacterStyle) || !_cStyle.isValid) { return false; }
	if(!_selection || !_selection.hasOwnProperty("applyCharacterStyle") || !_selection.isValid) { return false; }

	try {
		_selection.applyCharacterStyle(_cStyle);
	} catch(_error) {
		alert(_error.message);
		return false;
	}

	return true;
} /* END function __applyCStyle */







/**
 * German-English-French dialog texts and error messages
 */
function __defineLocalizeStrings() {
	
	_global.uiHeadLabel = {
		en:"OpenType Features (V " + _global["version"] + ")",
		de:"OpenType-Funktionen (V " + _global["version"] + ")",
		fr:"Fonctionnalités OpenType (V " + _global["version"] + ")"
	};
	
	_global.testGoBackLabel = { 
		en:"Test OpenType features",
		de:"OpenType-Funktionen testen",
		fr:"Test des fonctionnalités OpenType"
	};
	
	_global.displayHelpTipCheckboxLabel = {
		en:"Show OTF help texts",
		de:"OTF-Hilfstexte anzeigen",
		fr:"Afficher les conseils d'aide OTF"
	};

	_global.cancelButtonLabel = {
		en:"Close",
		de:"Schlie\u00dfen",
		fr:"Fermer"
	};
	
	_global.refreshButtonLabel = {
		en:"Refresh",
		de:"Aktualisieren",
		fr:"Actualiser"
	};
	
	_global.cStyleButtonLabel = {
		en:"Character Style",
		de:"Zeichenformat",
		fr:"Style de caractère"
	};

	_global.applyStyleToSelectionCheckboxLabel = {
		en:"Selection",
		de:"Auswahl",
		fr:"Sélection"
	};

	_global.applyStyleToSelectionCheckboxHelpTip = {
		en:"Apply Style to Selection",
		de:"Format auf Auswahl anwenden",
		fr:"Afficher le texte d'aide"
	};

	_global.cStyleButtonHelpTip = {
		en:"Create character style with selected OpenType features.",
		de:"Zeichenformat mit ausgew\u00e4hlten OpenType-Eigenschaften erstellen.",
		fr:"Créer un style de caractère avec les caractéristiques OpenType sélectionnées."
	};

	_global.closeButtonHelpTip = {
		en:"Close Window",
		de:"Fenster schlie\u00dfen",
		fr:"Fermer la fenêtre"
	};
	
	_global.refreshButtonHelpTip = {
		en:"Refresh display",
		de:"Anzeige aktualisieren",
		fr:"Rafraîchir l'affichage"
	};

	_global.invalidSelectionAlert = {
		en:"Please select some text!",
		de:"Bitte eine Textstelle ausw\u00e4hlen!",
		fr:"Veuillez sélectionner un texte !"
	};
	
	_global.windowNotAvailableAlert = {
		en:"Dialog window not available",
		de:"Dialogfenster nicht ver\u00fcgbar!",
		fr:"La fenêtre de dialogue n'est pas disponible"
	};

	_global.fontNotEvaluableAlert = {
		en:"Font not evaluable!",
		de:"Schrift nicht auswertbar!",
		fr:"Écriture non évaluable !"
	};
	
	_global.fontNotAvaliableAlert = {
		en:"Not avaliable",
		de:"Nicht verf\u00fcgbar",
		fr:"Non disponible"
	};

	_global.selectionNotValidAlert = {
		en:"Selection not valid!",
		de:"Auswahl nicht verf\u00fcgbar!",
		fr:"Sélection non valide !"
	};

	_global.multipleFeatureValuesAlert = {
		en:"The selection has different values for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Werte f\u00fcr diese OpenType-Funktion auf.",
		fr:"La sélection a différentes valeurs pour cette fonction OpenType."
	};

	_global.multipleFeatureAvailabilityAlert = {
		en:"The selection has a different availability for this OpenType feature.",
		de:"Die Auswahl weist unterschiedliche Verf\u00fcgbarkeiten f\u00fcr diese OpenType-Funktion auf.",
		fr:"Cette fonction OpenType n'est pas uniformément disponible dans la sélection."
	};

	_global.oftGeneralFeaturePanelLabel = {
		en:"General",
		de:"Allgemein",
		fr:"Général"
	};

	_global.oftSpecialFeaturePanelLabel = {
		en:"Special",
		de:"Speziell",
		fr:"Spécial"
	};
	
	_global.ligatureCheckboxLabel = {
		en:"Ligatures",
		de:"Ligaturen",
		fr:"Ligatures"
	};

	_global.otfDiscretionaryLigatureCheckboxLabel = {
		en:"Discretionary Ligatures",
		de:"Bedingte Ligaturen",
		fr:"Ligatures conditionnelles"
	};

	_global.otfFractionCheckboxLabel = {
		en:"Fractions",
		de:"Br\u00fcche",
		fr:"Fractions"
	};

	_global.otfOrdinalCheckboxLabel = {
		en:"Ordinal",
		de:"Ordinalzeichen",
		fr:"Ordinal"
	};

	_global.otfSwashCheckboxLabel = {
		en:"Swash",
		de:"Schwungschrift",
		fr:"Lettre italique ornée"
	};

	_global.otfTitlingCheckboxLabel = {
		en:"Titling Alternates",
		de:"Titelschriftvarianten",
		fr:"Variantes de titrage"
	};

	_global.otfContextualAlternateCheckboxLabel = {
		en:"Contextual Alternates",
		de:"Kontextbedingte Varianten",
		fr:"Variantes contextuelles"
	};

	_global.capitalizationCheckboxLabel = {
		en:"All Small Caps",
		de:"Alles in Kapit\u00e4lchen",
		fr:"Tout en petites capitales"
	};

	_global.otfSlashedZeroCheckboxLabel = {
		en:"Slashed Zero",
		de:"Null mit Schr\u00e4gstrich",
		fr:"Zéro barré"
	};

	_global.otfHistoricalCheckboxLabel = {
		en:"Historical Forms",
		de:"Historische Varianten",
		fr:"Variantes historiques"
	};

	_global.otfRomanItalicsCheckboxLabel = {
		en:"Roman Italics",
		de:"Roman Italics",
		fr:"Roman Italics"
	};

	_global.otfLocaleCheckboxLabel = {
		en:"Localized forms",
		de:"Lokalisierte Formen",
		fr:"Formes localisées"
	};

	_global.otfOverlapSwashCheckboxLabel = {
		en:"Overlapping Swash",
		de:"\u00dcberlappende Schwungschrift",
		fr:"Lettre italique ornée avec chevauchement"
	};

	_global.otfMarkCheckboxLabelCheckboxLabel = {
		en:"Mark Positioning",
		de:"Markierte Positionierung",
		fr:"Positionnement de marque"
	};

	_global.otfProportionalMetricsCheckboxLabel = {
		en:"Proportional Metrics",
		de:"Proportionale Metriken",
		fr:"Métriques proportionnelles"
	};

	_global.otfJustificationAlternateCheckboxLabel = {
		en:"Justification Alternates",
		de:"Ausrichtungsvarianten",
		fr:"Variantes d'alignement"
	};

	_global.otfStretchedAlternateCheckboxLabel = {
		en:"Stretched Alternate",
		de:"Skalierte Varianten",
		fr:"Variantes étirées"
	};

	_global.otfStylisticAlternateCheckboxLabel = {
		en:"Stylistic Alternates",
		de:"Stilistische Varianten",
		fr:"Variantes stylistiques"
	};

	_global.otfHVKanaCheckboxLabel = {
		en:"H/V Kana Alternates",
		de:"H/V Kana-Varianten",
		fr:"Variantes de Kana (h/v)"
	};

	_global.otfPositionPanelLabel = {
		en:"Position",
		de:"Position",
		fr:"Position"
	};

	_global.positionSuperscriptCheckboxLabel = {
		en:"Superscript/Superior",
		de:"Hochgestellt",
		fr:"Exposant/Supérieur"
	};

	_global.positionSubscriptCheckboxLabel = {
		en:"Subscript/Inferior",
		de:"Tiefgestellt",
		fr:"Indice/Inférieur"
	};
	
	_global.positionNumeratorCheckboxLabel = {
		en:"Numerator",
		de:"Z\u00e4hler",
		fr:"Numérateur"
	};
	
	_global.positionDenominatorCheckboxLabel = {
		en:"Denominator",
		de:"Nenner",
		fr:"Dénominateur"
	};
	
	_global.otfDigitPanelLabel = {
		en:"Digit",
		de:"Ziffern",
		fr:"Chiffres"
	};

	_global.digitTabularLiningCheckboxLabel = {
		en:"Tabular Lining",
		de:"Versalziffern f\u00fcr Tabellen",
		fr:"Chiffres alignés tabulaires"
	};

	_global.digitProportionalOldstyleCheckboxLabel = {
		en:"Proportional Oldstyle",
		de:"Proportionale Medi\u00e4valziffern",
		fr:"Chiffres elzéviriens proportionnels"
	};

	_global.digitProportionalLiningCheckboxLabel = {
		en:"Proportional Lining",
		de:"Proportionale Versalziffern",
		fr:"Chiffres alignés proportionnels"
	};

	_global.digitTabularOldstyleCheckboxLabel = {
		en:"Tabular Oldstyle",
		de:"Medi\u00e4valziffern f\u00fcr Tabellen",
		fr:"Chiffres elzéviriens tabulaires"
	};

	_global.digitDefaultFigureStyleCheckboxLabel = {
		en:"Default Figure Style",
		de:"Standardzahlenformat",
		fr:"Style de chiffre par défault"
	};

	_global.setValueAlert = {
		en:"Value could not be set",
		de:"Wert konnte nicht gesetzt werden",
		fr:"La valeur n'a pas pu être définie"
	};

	_global.otfStylisticSetPanelLabel = {
		en:"Stylistic Sets",
		de:"Formats\u00e4tze",
		fr:"Jeux stylistiques"
	};

	_global.otfStylisticSetCheckboxLabel = {
		en:"Set %1",
		de:"Satz %1",
		fr:"Jeu %1"
	};

	_global.positionalFormLabel = {
		en:"Positional Forms",
		de:"Positionalform",
		fr:"Formes positionnelles"
	};

	_global.positionalFormsGeneralCheckboxLabel = {
		en:"General Form",
		de:"Allgemeine Form",
		fr:"Forme générale"
	};

	_global.positionalFormsAutomaticCheckboxLabel = {
		en:"Automatic Form",
		de:"Automatische Form",
		fr:"Forme automatique"
	};

	_global.positionalFormsInitialCheckboxLabel = {
		en:"Inital Form",
		de:"Initialform",
		fr:"Forme initiale"
	};

	_global.positionalFormsMedialCheckboxLabel = {
		en:"Medial Form",
		de:"Medialform",
		fr:"Forme médiane"
	};

	_global.positionalFormsFinalCheckboxLabel = {
		en:"Final Form",
		de:"Finalform",
		fr:"Forme finale"
	};

	_global.positionalFormsIsolatedCheckboxLabel = {
		en:"Isolated Form",
		de:"Isoloierte Form",
		fr:"Forme isolée"
	};

	_global.ligaturesFeatureDesc = {
		en:"If selected, replaces specific character combinations (e.g., fl, fi) with ligature characters.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden spezielle Zeichenkombinationen (z.B. fl, fi) durch Ligaturzeichen ersetzt.",
		fr:"Si cette option est sélectionnée, remplace des combinaisons de caractères spécifiques (par exemple, fl, fi) par des caractères de ligature."
	};

	_global.otfDiscretionaryLigatureFeatureDesc = {
		en:"If selected, uses discretionary ligatures in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden in OpenType-Schriften bedingte Ligaturen verwendet.",
		fr:"Si cette option est sélectionnée, utilise les ligatures conditionnelles (des polices OpenType)."
	};

	_global.otfFractionFeatureDesc = {
		en:"If selected, uses fractions in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Br\u00fcche in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise les fractions dans les écritures OpenType."
	};

	_global.otfOrdinalFeatureDesc = {
		en:"If selected, uses ordinals in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Ordnungszahlen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise les ordinaux dans les écritures OpenType."
	};

	_global.otfSwashFeatureDesc = {
		en:"If selected, uses swash forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Schwungbuchstaben in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise les lettres italiques ornées les écritures OpenType."
	};

	_global.otfTitlingFeatureDesc = {
		en:"If selected, uses titling forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Titelschriftvarianten in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise des formes de titrage dans les écritures OpenType."
	};

	_global.otfContextualAlternateFeatureDesc = {
		en:"If selected, uses contextual alternate forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden kontextbedingte Alternativen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise les formes alternatives contextuelles dans les écritures OpenType."
	};

	_global.capitalizationFeatureDesc = {
		en:"If selected, uses small capitals in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Kapit\u00e4lchen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, les petites capitales sont utilisées dans les écritures OpenType."
	};

	_global.otfSlashedZeroFeatureDesc = {
		en:"If selected, use a slashed zeroes in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, wird eine Null mit Schr\u00e4gstrich in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise le zéro barré (des polices OpenType)."
	};

	_global.otfHistoricalFeatureDesc = {
		en:"If selected, use historical forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden historische Alternativen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilisez les formes historiques dans les écritures OpenType."
	};

	_global.otfRomanItalicsFeatureDesc = {
		en:"If selected, applies italics to half-width alphanumerics.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Roman-Glyphen durch entsprechende Italic-Glyphen in OpenType-Schriften ersetzt.",
		fr:"Si cette option est sélectionnée, elle applique l'italique aux caractères alphanumériques de demi-largeur."
	};

	_global.otfLocaleFeatureDesc = {
		en:"If selected, uses localized forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden lokalisierte Formen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise les formes localisées dans les écritures OpenType."
	};

	_global.otfOverlapSwashFeatureDesc = {
		en:"If selected, use overlapping swash forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden \u00fcberlappende Schwungbuchstaben in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilise des lettres italiques ornées avec chevauchement."
	};

	_global.otfMarkFeatureDesc = {
		en:"If selected, uses mark positioning in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden in OpenType-Schriften markierte Glyphen in Bezug auf Basisglyphen positioniert.",
		fr:"Si cette option est sélectionnée, utilise le positionnement des marques dans les écritures OpenType."
	};

	_global.otfProportionalMetricsFeatureDesc = {
		en:"If selected, kerns according to proportional CJK metrics in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, erfolgt das Kerning in OpenType-Schriften entsprechend den proportionalen CJK-Metriken.",
		fr:"Si cette option est sélectionnée, les grains sont conformes à la métrique CJK proportionnelle dans les écritures OpenType."
	};

	_global.otfJustificationAlternateFeatureDesc = {
		en:"If selected, use alternate justification forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden alternative Ausrichtungsformen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilisez des formes de justification alternatives dans les écritures OpenType."
	};

	_global.otfStretchedAlternateFeatureDesc = {
		en:"If selected, use stretched alternate forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden skalierte Alternativformen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilisez les formes alternatives étirées dans les écritures OpenType."
	};

	_global.otfStylisticAlternateFeatureDesc = {
		en:"If selected, use stylistic alternate forms in OpenType fonts.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden stilistische Alternativformen in OpenType-Schriften verwendet.",
		fr:"Si cette option est sélectionnée, utilisez des formes stylistiques alternatives dans les écritures OpenType."
	};

	_global.otfHVKanaFeatureDesc = {
		en:"If selected, standard kana (hiragana and katakana) are replaced with forms specifically designed for horizontal or vertical writing.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden standardm\u00e4\u00dfige Kana (Hiragana und Katakana) durch Formen ersetzt, die speziell f\u00fcr das horizontale oder vertikale Schreiben entwickelt wurden.",
		fr:"Si cette option est sélectionnée, les kana standard (hiragana et katakana) sont remplacés par des formes spécifiquement conçues pour l'écriture horizontale ou verticale."
	};

	_global.positionSuperscriptFeatureDesc = {
		en:"If selected, raised glyphs are used that are sized correctly relative to the surrounding characters.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden hochgestellte Glyphen verwendet, die im Verh\u00e4ltnis zu den umgebenden Zeichen korrekt dimensioniert sind.",
		fr:"Si cette option est sélectionnée, des glyphes en relief sont utilisés et sont correctement dimensionnés par rapport aux caractères environnants."
	};

	_global.positionSubscriptFeatureDesc = {
		en:"If selected, lowered glyphs are used that are sized correctly relative to the surrounding characters.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden abgesenkte Glyphen verwendet, die im Verh\u00e4ltnis zu den umgebenden Zeichen korrekt dimensioniert sind.",
		fr:"Si cette option est sélectionnée, les glyphes abaissés sont utilisés et sont correctement dimensionnés par rapport aux caractères environnants."
	};

	_global.positionNumeratorFeatureDesc = {
		en:"If selected, the text is shrunk but the top of the characters keeps aligned with the top of the main text. Valid only for numeric characters.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, wird der Text verkleinert, wobei der obere Rand der Zeichen am oberen Rand des Haupttextes ausgerichtet wird. Gilt nur f\u00fcr numerische Zeichen.",
		fr:"Si cette option est sélectionnée, le texte est rétréci mais le haut des caractères reste aligné avec le haut du texte principal. Valable uniquement pour les caractères numériques."
	};
	
	_global.positionDenominatorFeatureDesc = {
		en:"If selected, the text is shrunk but keeps on the main text baseline.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, wird der Text verkleinert, bleibt aber auf der Grundlinie des Haupttextes. Gilt nur f\u00fcr numerische Zeichen.",
		fr:"Si cette option est sélectionnée, le texte est rétréci mais reste sur la ligne de base du texte principal."
	};

	_global.digitDefaultFigureStyleFeatureDesc = {
		en:"If selected, the default figure style of the OpenType font will be used.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Standardzahlen verwendet.",
		fr:"Si cette option est sélectionnée, le style de chiffre par défaut sera utilisé."
	};

	_global.digitProportionalOldstyleFeatureDesc = {
		en:"If selected, proportional width oldstyle figures of the OpenType font will be used.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden proportionale Medi\u00e4valzahlen der OpenType-Schrift mit Glyphen-spezifischer (proportionaler) Breite verwendet.",
		fr:"Si cette option est sélectionnée, les chiffres elzéviriens proportionnels seront utilisés."
	};

	_global.digitProportionalLiningFeatureDesc = {
		en:"If selected, proportional width lining figures of the OpenType font will be used.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden proportionale Zahlen der OpenType-Schrift mit Glyphen-spezifischer (proportionaler) Breite verwendet.",
		fr:"Si cette option est sélectionnée, les chiffres alignés proportionnels seront utilisés."
	};

	_global.digitTabularOldstyleFeatureDesc = {
		en:"If selected, monospaced oldstyle figures of the OpenType font will be used.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Medi\u00e4valzahlen der OpenType-Schrift mit einheitlicher (tabellarischer) Breite verwendet.",
		fr:"Si cette option est sélectionnée, les chiffres elzéviriens tabulaires seront utilisés."
	};

	_global.digitTabularLiningFeatureDesc = {
		en:"If selected, monspaced lining figures of the OpenType font will be used.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Tabellenzahlen der OpenType-Schrift mit einheitlicher (tabellarischer) Breite verwendet.",
		fr:"Si cette option est sélectionnée, les chiffres alignés tabulaires seront utilisés."
	};

	_global.positionalFormsGeneralFeatureDesc = {
		en:"If selected, the default characters are used regardless of their position.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden die Standardzeichen unabh\u00e4ngig von ihrer Position verwendet.",
		fr:"Si cette option est sélectionnée, les caractères par défaut sont utilisés quelle que soit leur position."
	};

	_global.positionalFormsAutomaticFeatureDesc = {
		en:"If selected, characters are automatically replaced by special glyphs at certain positions, e.g. at the beginning or end of a word.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Zeichen automatisch an bestimmten Position durch alternative Formen ersetzt, z.B. am Anfang oder Ende eines Wortes.",
		fr:"Si cette option est sélectionnée, les caractères sont automatiquement remplacés par des glyphes spéciaux à certains endroits, par exemple au début ou à la fin d'un mot."
	};

	_global.positionalFormsInitialFeatureDesc = {
		en:"If selected, glyphs for characters that have applicable joining properties will be replaced with an alternate form when occurring in an initial context.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Zeichen an einer einleitenden Position (am Anfang eines Wortes) durch alternative Formen ersetzt.",
		fr:"Si cette option est sélectionnée, les glyphes des caractères qui ont des propriétés de jonction applicables seront remplacés par une autre forme lorsqu'ils apparaissent dans un contexte initial."
	};

	_global.positionalFormsMedialFeatureDesc = {
		en:"If selected, glyphs for characters that have applicable joining properties will be replaced with an alternate form when occurring in a medial context.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Zeichen an einer mittleren Position (in der Mitte eines Wortes) durch alternative Formen ersetzt.",
		fr:"Si cette option est sélectionnée, les glyphes des caractères qui ont des propriétés de jonction applicables seront remplacés par une autre forme lorsqu'ils apparaissent dans un contexte médian."
	};

	_global.positionalFormsFinalFeatureDesc = {
		en:"If selected, glyphs for characters that have applicable joining properties will be replaced with an alternate form when occurring in a final context.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Zeichen an einer abschlie\u00dfenden Position (am Ende eines Wortes) durch alternative Formen ersetzt.",
		fr:"Si cette option est sélectionnée, les glyphes des caractères qui ont des propriétés de jonction applicables seront remplacés par une autre forme lorsqu'ils apparaissent dans un contexte final."
	};

	_global.positionalFormsIsolatedFeatureDesc = {
		en:"If selected, glyphs for characters that have applicable joining properties will be replaced with an alternate form when occurring in a isolate (non-joining) context.",
		de:"Wenn diese Option ausgew\u00e4hlt ist, werden Zeichen an einer isolierten Position (au\u00dferhalb eines Wortes) durch alternative Formen ersetzt.",
		fr:"Si cette option est sélectionnée, les glyphes des caractères qui ont des propriétés de jonction applicables seront remplacés par une autre forme lorsqu'ils apparaissent isolément."
	};
	
} /* END function __defineLocalizeStrings */