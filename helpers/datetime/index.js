function getCurrentDateTime() {
    const date = new Date()
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')
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
