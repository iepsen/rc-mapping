"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __importDefault(require("./colors"));
exports.colors = colors_1.default;
var navigation_1 = __importDefault(require("./navigation"));
exports.navigation = navigation_1.default;
var numbers_1 = __importDefault(require("./numbers"));
exports.numbers = numbers_1.default;
var exit = function () { return window.close(); };
exports.exit = exit;
exports.default = { colors: colors_1.default, navigation: navigation_1.default, numbers: numbers_1.default, exit: exit };
