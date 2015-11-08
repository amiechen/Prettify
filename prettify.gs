function onOpen(e) {
 DocumentApp.getUi().createAddonMenu()
      .addItem('Add Code Block', 'pretty')
      .addToUi();
}

function pretty () {
 var selection = DocumentApp.getActiveDocument().getSelection(),
     body = DocumentApp.getActiveDocument().getBody();


  if (selection) {
    var elements = selection.getRangeElements(),
        text = [],
        tableStyle = {},
        cellStyle = {};

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i].getElement().editAsText().getText();
      text.push(element);
    }

    tableStyle[DocumentApp.Attribute.BORDER_COLOR] = '#d9d9d9';
    tableStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Consolas';
    tableStyle[DocumentApp.Attribute.FONT_SIZE] = 9;
    cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#f5f5f5';

    var table = body.appendTable(),
        cell = table.appendTableRow().appendTableCell([[text]]);

    table.setAttributes(tableStyle);
    cell.setAttributes(cellStyle);
  }
}