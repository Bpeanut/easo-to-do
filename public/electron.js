const path = require("path");
const { app, BrowserWindow } = require("electron");
// const { isDev } = require("../src/util/util");

let win;
function createBrowser() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (process.env.NODE_ENV !== "production") {
        win.loadURL("http://localhost:5946");
    } else {
        win.loadFile(path.join(__dirname, "../build/index.html"));
    }

    win.webContents.openDevTools();
    win.on("closed", () => {
        win = null;
    })
}

app.on("ready", createBrowser);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if(win === null) {
        createBrowser();
    }
});
