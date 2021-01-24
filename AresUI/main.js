const electron= require('electron');
const app= electron.app;
const url=require("url");
const {BrowserWindow}=electron;
const path=require('path');
let win1;
function createWindow()
{
    win1= new BrowserWindow({
        width:3000,
        height:2000,
        title:"Rover Dashboard",
        webPreferences: {
            
            nodeIntegration: true,
            enableRemoteModule:true,
        }

    });
    win1.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file",
        slashes:true,
    }));

    //win1.webContents.openDevTools();
   // console.log(win1.webContents.getTitle())
    win1.on('closed',()=>{
        win1=null;
    });
}

app.on('ready',createWindow);