import { autoUpdater } from "electron-updater";
import log from "electron-log"

export default class AutoUpdater {
    constructor(){
        log.transports.file.level = "debug"

        autoUpdater.logger = log

        autoUpdater.checkForUpdatesAndNotify()
    }
}