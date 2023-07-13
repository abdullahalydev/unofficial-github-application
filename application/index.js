const electron = require("electron");
const path = require("path");

class ElectronApplication {
	static createElectronWindow() {
		const Window = new electron.BrowserWindow({
			width: 1280,
			height: 800,
			minWidth: 360,
			minHeight: 300,
			autoHideMenuBar: true,
			title: "Github",
			titleBarOverlay: true,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
				preload: path.join(__dirname, "../preload.js"),
			},
		});

		this.loadGithubURL(Window);
	}

	static loadGithubURL(Window) {
		Window.loadURL("https://github.com/");
	}
	
}


module.exports = ElectronApplication;