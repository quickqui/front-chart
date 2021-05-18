"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var ChartCard_1 = __importDefault(require("./ChartCard"));
var ChartCardView = function (props) {
    var _a;
    var model = props.model, functionModel = props.functionModel, presentation = props.presentation;
    var resource = functionModel.resource;
    var filter = (_a = functionModel.query) === null || _a === void 0 ? void 0 : _a.filter;
    var location = { pathname: resource };
    var basePath = "/" + resource;
    return (react_1.default.createElement(react_admin_1.ListController, __assign({ location: location, basePath: basePath, resource: resource, filter: filter }, props), function (controllerProps) {
        var _a, _b;
        return (react_1.default.createElement(ChartCard_1.default, __assign({ icon: (_b = (_a = props.functionModel) === null || _a === void 0 ? void 0 : _a.parameters) === null || _b === void 0 ? void 0 : _b["icon"] }, props, controllerProps)));
    }));
};
exports.default = ChartCardView;
