"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const scenery_router_1 = require("./scenery-router");
const category_router_1 = require("./category-router");
exports.router = (0, express_1.Router)();
exports.router.use('', scenery_router_1.routerScenery);
exports.router.use('', category_router_1.routerCategory);
//# sourceMappingURL=router.js.map