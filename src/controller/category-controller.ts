import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {Category} from "../model/category";

export class CategoryController {
    private categoryRepository : any;
    constructor() {
        AppDataSource.initialize().then(connection =>{
            this.categoryRepository = connection.getRepository(Category);
            console.log('connect database!!!!')
        })
    }
    findAll = async (req: Request,res: Response) =>{
        let category = await this.categoryRepository.findAll()
        return category;
    }
    showFormCategoryCreate  = async (req, res )=>{
        let category = await  this.categoryRepository.find()
        res.render('/category/createC',{
            category : category
        })
    }

}
export default new CategoryController();