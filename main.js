//Importing two electron modules
//app - controls app lifecycle
//BrowserWindow - creates and manages app windows
const path = require("path");
const { app, BrowserWindow } = require("electron");

//Creates a window object
//loads web page into a new BrowserWindow instance
const createWindow = () => {
  const mainWin = new BrowserWindow({
    title: "On-Time",
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  mainWin.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});
