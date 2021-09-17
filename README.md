# Test OpenType features

The idea behind this script is to test the OpenType features of an installed font in InDesign - without flyouts, dropdowns, and the like.

<img width="1444" alt="otf_script_screenshot" src="https://user-images.githubusercontent.com/19747449/133749014-584aa060-c4bc-4d36-9ad8-d7726c6fa74a.png">

Some of the OpenType features are also not accessible from the English or German user interface of InDesign. (Section »Special« in the Script dialog)

To get full functionality for Japanese/CJK or Arabic OpenType features in InDesign, read [this article](https://ken-lunde.medium.com/adobe-indesign-tips-japanese-cjk-functionality-english-ui-redux-539528e295c6).

## Script usage

Put the script into the script folder of InDesign and start it from the script panel via double click. By selecting a checkbox, the corresponding OpenType feature is enabled in the current selection of your document.

Here is a [short Video](https://vimeo.com/606686469) on how to use it.

### Selection

**Insertion Point**: If the insertion point is placed in a paragraph, the feature is enabled in the entire paragraph.

**Text Frame**: If a text frame is selected, the feature is enabled in its entire text content.

**Text**: If a range of text is selected, the feature is enabled in this text only.

### Different Values

If the current selection contains different values for the same OpenType feature, the background of the checkbox is highlighted in red. In the help text of the checkbox, this fact is pointed out again.

### Different Availability

If the fonts contained in the selection have different availabilities for the same OpenType feature, the background of the checkbox is grayed out.

### ALT + Click

If a checkbox is grayed out (Mode »enable«), it is possible to activate it with an ALT + click.

This is sometimes useful when values are assigned but this OpenType feature is not available for the font in the selection or this feature should be included in the character style.

### Refresh UI

The user interface of the script is updated when the selection in the active document changes. If this is not done correctly, the update can be triggered by pressing the Refresh button.

### Character Style

The selected features can be transferred to a character style. To do this, enter the desired name in the input field (bottom right) and click on the "Character Style" button.


### Error Messages

Error messages are displayed in the title bar of the dialog.

### What's missing?

Yes, OpenType features are a wide field to get lost in. This is the first version of the script, maybe I will add more functions in the future. Let's see ...

## Credits

Thanks for tips and discussion to [Dirk Becker](https://twitter.com/dirkbecker)/[IxtaTypeUI](https://twitter.com/IxtaTypeUI) and [Ken Lunde](https://twitter.com/ken_lunde).

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)