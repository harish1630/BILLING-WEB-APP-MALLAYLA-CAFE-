function doGet(e) {
  return saveOrder_(e);
}

function doPost(e) {
  return saveOrder_(e);
}

function saveOrder_(e) {
  try {
    var parameters = e && e.parameter ? e.parameter : {};
    var sheet = getOrdersSheet_();

    sheet.appendRow([
      new Date(),
      parameters.customerName || "",
      parameters.mobile || "",
      parameters.instructions || "",
      parameters.orderItems || "",
      parameters.totalAmount || ""
    ]);

    return jsonResponse_({ success: true });
  } catch (error) {
    console.error("Unable to save order: " + error);
    return jsonResponse_({ success: false });
  }
}

function getOrdersSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    var properties = PropertiesService.getScriptProperties();
    var spreadsheetId = properties.getProperty("ORDERS_SPREADSHEET_ID");

    if (spreadsheetId) {
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    } else {
      spreadsheet = SpreadsheetApp.create("Orders");
      properties.setProperty("ORDERS_SPREADSHEET_ID", spreadsheet.getId());
    }
  }

  var sheet = spreadsheet.getSheetByName("Orders");
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Orders");
    sheet.appendRow([
      "Timestamp",
      "Customer Name",
      "Mobile Number",
      "Instructions",
      "Ordered Items",
      "Total Amount"
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Customer Name",
      "Mobile Number",
      "Instructions",
      "Ordered Items",
      "Total Amount"
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
  }

  return sheet;
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
