# OpenType features Dialog

The idea behind this script is to test the OpenType features of an installed font in InDesign - without flyouts, dropdowns, and the like.

<img width="1441" alt="basic_features" src="https://user-images.githubusercontent.com/19747449/150305148-a3856d90-1b29-4a19-8dad-42cf777ef2a3.png">

Some of the OpenType features are also not accessible from the English or German user interface of InDesign.[^1] Some features are only accessible via script.

[^1]:To get full functionality for Japanese/CJK or Arabic OpenType features in InDesign, read [this article](https://ken-lunde.medium.com/adobe-indesign-tips-japanese-cjk-functionality-english-ui-redux-539528e295c6).

# Script usage

Download the script via `Code` ‣ `Download ZIP`

<img width="930" alt="download_zip" src="https://user-images.githubusercontent.com/19747449/150357885-c60fa14e-faf7-4b4f-88c6-f6429c3d2f7b.png">

Put the script into the script folder of InDesign and start it from the script panel via double click. By selecting a checkbox, the corresponding OpenType feature is enabled in the current selection of your document.

Here are some short short Video on how to use the [»Basic Features«](https://vimeo.com/606686469), the [»Extended Features«](https://vimeo.com/667300122) and [search for a font](https://vimeo.com/666012220) with specific OpenType features.

## Selection

**Insertion Point**: If the insertion point is placed in a paragraph, the feature is enabled in the entire paragraph.

**Text Frame**: If a text frame is selected, the feature is enabled in its entire text content.

**Text**: If a range of text is selected, the feature is enabled in this text only.

# Tab: Basic Features

All OpenType features in Tab »Basic Features« are also accessible via InDesign user interface (albeit deeply hidden in the panel menus ) and can be saved in a character style.  
## Different Values

If the current selection contains different values for the same OpenType feature, the background of the checkbox is highlighted in red. In the help text of the checkbox, this fact is pointed out again.

## Different Availability

If the fonts contained in the selection have different availabilities for the same OpenType feature, the background of the checkbox is grayed out.

## ALT + Click

If a checkbox is grayed out (Mode »enable«), it is possible to activate it with an ALT + click.

This is sometimes useful when values are assigned but this OpenType feature is not available for the font in the selection or this feature should be included in the character style.

## Refresh UI

The user interface of the script is updated when the selection in the active document changes. If this is not done correctly, the update can be triggered by pressing the `Refresh` button.

## Character Style

The selected features can be transferred to a character style. To do this, enter the desired name in the input field (bottom right) and click on the "Character Style" button.

# Tab: Extended Features

The OpenType features on tab »Advanced Features« can only be applied via script. Unfortunately, they cannot be saved in a character style.

**Please note:** The setting via "Extended features" tab has priority and overwrites the "Basic features". Thus, in case of same functionality, assigning or removing a "Basic Feature" no longer has any effect.

<img width="1436" alt="extended_features" src="https://user-images.githubusercontent.com/19747449/150305102-a29fd301-8b43-49da-89fe-b98187db4623.png">

If more than one text style range is selected, they will be displayed in the right list separated by a blank line.
## Filter

At the bottom of the tab there are two filters that can be used to limit the displayed features. Multiple tags are separated by spaces, e.g. `hlig liga cv84`

## Change List Entry

By double-clicking on one of the entries in the list on the left, you can change the feature value (shown in the *Value* column). Only positive integers are allowed as values.

## Apply Feature to Text

1. Select the desired text in your document 
2. Mark one or more features in the list on the left
3. Click on the `Apply` button 

**Hint:** If you activate the button for style overrides in the paragraph style panel in the InDesign user interface, these text passages are highlighted in the normal document view.

<img width="917" alt="style_overrides" src="https://user-images.githubusercontent.com/19747449/150302952-a1854b69-538c-4fd9-8ea0-b240cd9b5e61.png">

## Remove All Features

1. Select the relevant text in document 
2. Click on the button `Clear`

# Tab: Font Search

The "Font Search" tab can be used to search for fonts with specific OpenType features. 

<img width="1437" alt="font_search" src="https://user-images.githubusercontent.com/19747449/150305207-869b41ed-e71f-4117-8f9e-5989d77fd824.png">

The list on the left shows the available features. After selecting one or more entries, the script analyzes all available fonts. The matching fonts are displayed in the list on the right.

---

## Error Messages

Error messages are displayed in the title bar of the dialog.

## Credits

Thanks for tips and discussion to [Dirk Becker](https://twitter.com/dirkbecker)/[IxtaTypeUI](https://twitter.com/IxtaTypeUI) and [Ken Lunde](https://twitter.com/ken_lunde).

## Support
If you want to support the development of the script: 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=roland%2edreger%40a1%2enet&lc=AT&item_name=Roland%20Dreger%20%2f%20Donation%20for%20script%20development%20OpenType-Feature-Dialog&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
