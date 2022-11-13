"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerScenery = void 0;
const express_1 = require("express");
const scenery_controller_1 = __importDefault(require("../controller/scenery-controller"));
exports.routerScenery = (0, express_1.Router)();
exports.routerScenery.get('/scenery', scenery_controller_1.default.getAll);
exports.routerScenery.get('/create', scenery_controller_1.default.showFormCreate);
exports.routerScenery.post('/create', scenery_controller_1.default.creatScenery);
exports.routerScenery.get('/delete/:id', scenery_controller_1.default.deleteScenery);
exports.routerScenery.get('/edit/:id', scenery_controller_1.default.showFormEdit);
exports.routerScenery.post('/edit/:id', scenery_controller_1.default.editS);
exports.routerScenery.post('/scenery', scenery_controller_1.default.searchS);
exports.routerScenery.get('/category/:id', scenery_controller_1.default.searchCategory);
exports.routerScenery.post('/category', scenery_controller_1.default.searchS);
//# sourceMappingURL=scenery-router.js.map