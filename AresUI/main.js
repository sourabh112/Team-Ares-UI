const electron= require('electron');
const app= electron.app;
const url=require("url");
const {BrowserWindow,Menu,ipcMain}=electron;
const path=require('path');
let win1;

app.on('ready',function(){
  // Create new window
  win1= new BrowserWindow({
        width:3000,
        height:2000,
        title:"Rover Dashboard",
        webPreferences: {
            
            nodeIntegration: true,
            enableRemoteModule:true,
        }

    });
  // Load html in window
  win1.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file",
        slashes:true,
    }));
  // Quit app when closed
  win1.on('closed', function(){
    app.quit();
  });
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

ipcMain.on('Changing',function(e,item){
    win1.loadURL(url.format({
        pathname:path.join(__dirname,"stream.html"),
        protocol:"file",
        slashes:true,
    }));
    win1.on('closed',()=>{
        app.quit();
    });
})
