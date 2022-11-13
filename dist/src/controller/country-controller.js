"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const data_source_1 = require("../data-source");
const scenery_1 = require("../model/scenery");
class CountryController {
    constructor() {
        this.findAll = async (req, res) => {
            let scenery = await this.countryRepository.find();
            return scenery;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.countryRepository = data_source_1.AppDataSource.getRepository(scenery_1.Scenery);
            console.log('connect database!!!!');
        });
        this.countryRepository = data_source_1.AppDataSource.getRepository(scenery_1.Scenery);
    }
}
exports.CountryController = CountryController;
exports.default = new CountryController();
//# sourceMappingURL=country-controller.js.map