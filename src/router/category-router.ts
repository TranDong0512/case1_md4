import {Router} from "express";
import categoryController from "../controller/category-controller";


export const routerCategory = Router()
routerCategory.get('/category', categoryController.findAll)
routerCategory.get('/createC',categoryController.showFormCategoryCreate)
routerCategory.post('/createC',categoryController.saveCategory)
