function doPost(e) {
    const username = e.parameter.username;
    const password = e.parameter.password;

    // 獲取 Google Sheets 中的用戶名和密碼
    const sheet = SpreadsheetApp.openById('1B4F9Uyf5-C4JafH33_U0qYixHq2qTgKJYzINv7PNOko').getActiveSheet(); // 替換為您的工作表 ID
    const data = sheet.getDataRange().getValues();

    // 檢查用戶名和密碼
    let isValid = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === username && data[i][1] === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        return ContentService.createTextOutput(JSON.stringify({ success: true, message: "登入成功！", redirectUrl: "YOUR_TODO_PAGE_URL" }))
            // .setMimeType(ContentService.MimeType.JSON);
    } else {
        return ContentService.createTextOutput(JSON.stringify({ success: false, message: "用戶名或密碼錯誤！" }))
            // .setMimeType(ContentService.MimeType.JSON);
    }
}