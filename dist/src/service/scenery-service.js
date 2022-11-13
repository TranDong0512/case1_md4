"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneryService = void 0;
const data_source_1 = require("../data-source");
const scenery_1 = require("../model/scenery");
class SceneryService {
    constructor() {
        this.findAll = async (req, res) => {
            let scenery = await this.sceneryRepository.find();
            return scenery;
        };
        this.saveScenery = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let scenery = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                scenery.image = '/storage/' + image.name;
                await this.sceneryRepository.save(scenery);
                res.redirect(301, '/scenery');
            }
        };
        this.findById = async (req, res) => {
            let id = +req.params.id;
            return this.sceneryRepository.findOneBy({ id: id });
        };
        this.deleteScenery = async (req, res) => {
            let id = +req.params.id;
            await this.sceneryRepository.delete(id);
            res.redirect(301, '/scenery');
        };
        this.editScenery = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let scenery = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                scenery.image = '/storage/' + image.name;
                await this.sceneryRepository.update({ id: id }, scenery);
                res.redirect(301, '/scenery');
            }
        };
        this.searchScenery = async (key) => {
            return await this.sceneryRepository.query(`select * from scenery where name like '%${key}%'`);
        };
        this.findProductByIdCategory = async (id) => {
            return await this.sceneryRepository.query(`select *from scenery where idCountryId='${id}'`);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.sceneryRepository = connection.getRepository(scenery_1.Scenery);
            console.log('connect database!!!!');
        });
    }
}
exports.SceneryService = SceneryService;
exports.default = new SceneryService();
//# sourceMappingURL=scenery-service.js.map