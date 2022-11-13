"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneryController = void 0;
const scenery_service_1 = require("../service/scenery-service");
const category_service_1 = require("../service/category-service");
class SceneryController {
    constructor() {
        this.getAll = async (req, res) => {
            let listScenery = await this.sceneryService.findAll(req, res);
            let category = await this.categoryService.findAllC();
            res.render('scenery/list', {
                listScenery: listScenery, categories: category
            });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await this.categoryService.categoryRepository.find();
            res.render('scenery/create', {
                categories: categories
            });
        };
        this.creatScenery = async (req, res) => {
            await this.sceneryService.saveScenery(req, res);
        };
        this.deleteScenery = async (req, res) => {
            await this.sceneryService.deleteScenery(req, res);
        };
        this.showFormEdit = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let scenery = await this.sceneryService.findById(req, res);
                let categories = await this.categoryService.findAllC();
                res.render('scenery/edit', { scenery: scenery, categories: categories });
            }
        };
        this.editS = async (req, res) => {
            await this.sceneryService.editScenery(req, res);
        };
        this.searchS = async (req, res) => {
            let categories = await this.categoryService.findAllC();
            let scenery = await this.sceneryService.searchScenery(req.body.name);
            res.render('scenery/list', { listScenery: scenery, categories: categories });
        };
        this.searchCategory = async (req, res) => {
            let categories = await this.categoryService.findAllC();
            let scenery = await this.sceneryService.findProductByIdCategory(req.params.id);
            res.render('scenery/list', { listScenery: scenery, categories: categories });
        };
        this.sceneryService = new scenery_service_1.SceneryService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.SceneryController = SceneryController;
exports.default = new SceneryController();
//# sourceMappingURL=scenery-controller.js.map