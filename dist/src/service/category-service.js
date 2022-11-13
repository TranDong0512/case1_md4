"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAllC = async () => {
            let category = await this.categoryRepository.find();
            return category;
        };
        this.saveCategory = async (req, res) => {
            let category = req.body;
            await this.categoryRepository.save(category);
            res.redirect(301, '/scenery');
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
        console.log('connect database!!!!');
    }
}
exports.CategoryService = CategoryService;
exports.default = new CategoryService();
//# sourceMappingURL=category-service.js.map