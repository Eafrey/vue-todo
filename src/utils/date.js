function getDateString(timeStrap) {
    const month = parseInt(timeStrap.getMonth(), 10) + 1;
    const timeString =
        timeStrap.getFullYear() +
        '-' +
        month +
        '-' +
        timeStrap.getDate() +
        ' ' +
        timeStrap.getHours() +
        ':' +
        timeStrap.getMinutes() +
        ':' +
        timeStrap.getSeconds();
    return timeString;
}

function getDateStringWithoutHour(timeStrap) {
    const month = parseInt(timeStrap.getMonth(), 10) + 1;
    const timeString =
        timeStrap.getFullYear() +
        '-' +
        month +
        '-' +
        timeStrap.getDate();
    return timeString;
}

export {getDateString, getDateStringWithoutHour}