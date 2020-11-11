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
import React from "react";
import { ListController } from "react-admin";
import ChartCard from "./ChartCard";
var ChartCardView = function (props) {
    var _a;
    var model = props.model, functionModel = props.functionModel, presentation = props.presentation;
    var resource = functionModel.resource;
    var filter = (_a = functionModel.query) === null || _a === void 0 ? void 0 : _a.filter;
    var location = { pathname: resource };
    var basePath = "/" + resource;
    return (React.createElement(ListController, __assign({ location: location, basePath: basePath, resource: resource, filter: filter }, props), function (controllerProps) {
        var _a, _b;
        return (React.createElement(ChartCard, __assign({ icon: (_b = (_a = props.functionModel) === null || _a === void 0 ? void 0 : _a.parameters) === null || _b === void 0 ? void 0 : _b["icon"] }, props, controllerProps)));
    }));
};
export default ChartCardView;
