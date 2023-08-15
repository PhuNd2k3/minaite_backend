const { DateTime } = require('luxon');

function getCurrentDateTime() {
    const vietnamTime = DateTime.now().setZone('Asia/Ho_Chi_Minh')
    return vietnamTime.toFormat('yyyy-MM-dd HH:mm:ss')
}

function toLocaleString(datetime) {
    const date = new Date(datetime)
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')
}

module.exports = {
    getCurrentDateTime: getCurrentDateTime,
    toLocaleString: toLocaleString,
}
