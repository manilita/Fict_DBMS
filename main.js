const { app, BrowserWindow } = require('electron'); // importing modules. What else is new?

// making the window
const createWindow = () => {
    const win = new BrowserWindow({ // window size
        width: 700,
        height: 500
    });

    win.loadFile('index.html'); // loading the html file, which shows the content of the window
}

app.whenReady().then(() => { // this is the api to use when the app is ready to be made. 
    createWindow();          // calling the function to create the window
});

app.on('window-all-closed', () => { // this is the api to use when all windows are closed.
    if (process.platform !== 'darwin') app.quit(); // if the platform is not macOS, quit the app. On macOS, apps usually stay active until the user quits explicitly with Cmd + Q.
});