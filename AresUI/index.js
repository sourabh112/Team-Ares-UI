const electron=require('electron');
const BrowserWindow=electron.remote.BrowserWindow;
const path=require('path');
const url=require('url');
const roverControl=document.getElementsByClassName("rover-control");
const cameraStream=document.getElementsByClassName("camera-stream");

cameraStream.addEventListener("click",()=>{
    createNewBrowserWindow();
});

function createNewBrowserWindow()
{
    win2= new BrowserWindow({
        width:3000,
        height:2000,
        title:"Camera Stream",
        webPreferences: {
            
            nodeIntegration: true,
            enableRemoteModule:true,
        }

    });
    win2.loadURL(url.format({
        pathname:path.join(__dirname,"stream.html"),
        protocol:"file",
        slashes:true,
    }));

    //win1.webContents.openDevTools();
    //console.log(win1.webContents.getTitle())
    win2.on('closed',()=>{
        win2=null;
    });
}
