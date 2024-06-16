import { createContainer, asClass, asValue, InjectionMode } from "awilix";
import { scopePerRequest } from "awilix-express";
import { CreateRealty } from "../application/usecases/CreateRealty";
import { GetRealties } from "../application/usecases/GetRealties";
import { RealtyDbAdapter } from "../infrastructure/dbAdapters/RealtyAdapter";
import { RealtyController } from "../presentation/controllers/RealtyController";
import { Application } from "express";

export type AppDIContainer = ReturnType<typeof configureDI>;

export default function configureDI(app: Application) {
  const container = createContainer({
    injectionMode: InjectionMode.CLASSIC,
  });

  // Register dependencies
  container.register({
    realtyDbAdapter: asClass(RealtyDbAdapter),
    createRealty: asClass(CreateRealty),
    getRealties: asClass(GetRealties),
    realtyController: asClass(RealtyController),
    app: asValue(app),
  });

  // Set up per-request dependency injection
  app.use(scopePerRequest(container));

  return container;
}
