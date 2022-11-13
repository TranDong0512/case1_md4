"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let category = await this.categoryRepository.findAll();
            return category;
        };
        this.showFormCategoryCreate = async (req, res) => {
            let category = await this.categoryRepository.find();
            res.render('category/createC', {
                categories: category
            });
        };
        this.saveCategory = async (req, res) => {
            let category = req.body;
            await this.categoryRepository.save(category);
            res.redirect(301, '/scenery');
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.categoryRepository = connection.getRepository(category_1.Category);
            console.log('connect database!!!!');
        });
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map