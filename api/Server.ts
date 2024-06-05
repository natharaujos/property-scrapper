import express, { Application } from "express";
import configureDI from "./src/config/configure-di";
import { SetupApplication } from "./src/config/SetupApplication";

class Server {
  static start(): void {
    const app = express();
    const diContainer = configureDI(app);
    const appExpress = diContainer.resolve<Application>("app");
    const application = new SetupApplication(3333, appExpress, diContainer);
    application.init();
    application.start();
  }
}

Server.start();
