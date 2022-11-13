import {Router} from "express";
import {routerScenery} from "./scenery-router";
import {routerCategory} from "./category-router";


export const router = Router();
router.use('', routerScenery)
router.use('',routerCategory)

