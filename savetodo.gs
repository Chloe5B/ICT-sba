function doPost(e) {
    // const action = e.parameter.action; // 獲取動作參數

    // if (action === 'saveTodo') {
        return saveTodoToSheet(e);
    // }
}

function saveTodoToSheet(e) {
    const todo = e.parameter.todo;
    Logger.log({e,todo})

    // 獲取待辦事項工作表
    const sheet = SpreadsheetApp.openById('1O7RHHgKxrRfxd8yvXOINc-vHO0G3xz6L-6tNexOyRm4').getActiveSheet();
    
    // 將待辦事項附加到工作表中
    sheet.appendRow([todo, new Date()]); // 將待辦事項和當前時間戳附加到工作表

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
        // .setMimeType(ContentService.MimeType.JSON);
}