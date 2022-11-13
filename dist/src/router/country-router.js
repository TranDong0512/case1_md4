"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCountry = void 0;
const express_1 = require("express");
const country_controller_1 = __importDefault(require("../controller/country-controller"));
exports.routerCountry = (0, express_1.Router)();
exports.routerCountry.get('/countris', country_controller_1.default.findAll);
//# sourceMappingURL=country-router.js.map