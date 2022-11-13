import {Router} from "express";
import sceneryController from "../controller/scenery-controller";
export const routerScenery = Router()
routerScenery.get('/scenery', sceneryController.getAll)
routerScenery.get('/create', sceneryController.showFormCreate)
routerScenery.post('/create',sceneryController.creatScenery)
routerScenery.get('/delete/:id',sceneryController.deleteScenery)
routerScenery.get('/edit/:id',sceneryController.showFormEdit)
routerScenery.post('/edit/:id',sceneryController.editS)
routerScenery.post('/scenery',sceneryController.searchS);
routerScenery.get('/category/:id',sceneryController.searchCategory)
routerScenery.post('/category',sceneryController.searchS)
