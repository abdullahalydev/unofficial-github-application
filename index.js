const electron = require("electron");

const ElectronApplication = require("./application/index");

const Application = electron.app;

Application.whenReady().then(() => {
	ElectronApplication.createElectronWindow();

	
  Application.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
});

Application.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		Application.quit();
	}
});
