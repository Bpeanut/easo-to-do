const electron = require("electron");

function isDev() {
    let _app = electron.app || electron.remote.app;
    let isEnvSet = "ELECTRON_IS_DEV" in process.env;
    const getFromEnv = parseInt(`${process.env.ELECTRON_IS_DEV}`, 10) === 1;
    return isEnvSet ? getFromEnv : _app.isPackaged;
}

module.exports = {
    isDev
}