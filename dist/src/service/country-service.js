"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const data_source_1 = require("../data-source");
const country_1 = require("../model/country");
class CountryService {
    constructor() {
        this.findAll = async (req, res) => {
            let scenery = await this.countryRepository.find();
            return scenery;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.countryRepository = data_source_1.AppDataSource.getRepository(country_1.Country);
            console.log('connect database!!!!');
        });
        this.countryRepository = data_source_1.AppDataSource.getRepository(country_1.Country);
    }
}
exports.CountryService = CountryService;
//# sourceMappingURL=country-service.js.map