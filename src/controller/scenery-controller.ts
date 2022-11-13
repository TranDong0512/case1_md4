import {SceneryService} from "../service/scenery-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";


export class SceneryController {
    private sceneryService: SceneryService;
    private categoryService: CategoryService;

    constructor() {
        this.sceneryService = new SceneryService();
        this.categoryService = new CategoryService()
    }

    getAll = async (req: Request, res: Response) => {
        let listScenery = await this.sceneryService.findAll(req, res);
        let category = await this.categoryService.findAllC();
        res.render('scenery/list', {
            listScenery: listScenery, categories: category
        })
    }
    showFormCreate = async (req: Request, res: Response) => {
        let categories = await this.categoryService.categoryRepository.find();
        res.render('scenery/create', {
            categories: categories
        })
    }
    creatScenery = async (req: Request, res: Response) => {
        await this.sceneryService.saveScenery(req, res)
    }
    deleteScenery = async (req: Request, res: Response) => {
        await this.sceneryService.deleteScenery(req, res)
    }

    showFormEdit = async (req: Request, res: Response) => {
        if (!isNaN(+req.params.id)) {
            let scenery = await this.sceneryService.findById(req, res);
            let categories = await this.categoryService.findAllC();
            res.render('scenery/edit', {scenery: scenery, categories: categories});
        }
    }
    editS = async (req: Request, res: Response) => {
        await this.sceneryService.editScenery(req, res)
    }
    searchS = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAllC();
        let scenery = await this.sceneryService.searchScenery(req.body.name)
        res.render('scenery/list', {listScenery: scenery, categories: categories})
    }
    searchCategory = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAllC();
        let scenery=await this.sceneryService.findProductByIdCategory(req.params.id)
        res.render('scenery/list', {listScenery: scenery, categories: categories})
    }

}

export default new SceneryController()


