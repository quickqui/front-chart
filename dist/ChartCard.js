"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var compose_1 = __importDefault(require("recompose/compose"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var styles_1 = require("@material-ui/core/styles");
var react_admin_1 = require("react-admin");
var react_chartjs_2_1 = require("react-chartjs-2");
var randomcolor_1 = require("randomcolor");
var styles = {
    main: {
        flex: "1",
        // marginRight: "1em",
        // marginTop: 20
    },
    card: {
        overflow: "inherit",
        textAlign: "right",
        padding: 16,
        minHeight: 52,
    },
};
var ChartCard = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var data = props.data, classes = props.classes, functionModel = props.functionModel, ids = props.ids;
    var chartType = (_b = (_a = functionModel.parameters) === null || _a === void 0 ? void 0 : _a["chartType"]) !== null && _b !== void 0 ? _b : "Bar";
    var sources = (_c = functionModel.parameters) === null || _c === void 0 ? void 0 : _c["sources"];
    //TODO 实现更多的sources可能性。
    /*
    NOTE 不同的type有不一样的sources格式
    sources 的格式：
    sources:
      -
          label： labelfield
          x: fieldx
          y: fieldy
          r: fieldr
      -
          ...
    */
    var labelsField = (_e = (_d = sources[0]) === null || _d === void 0 ? void 0 : _d.label) !== null && _e !== void 0 ? _e : "id";
    var yField = (_g = (_f = sources[0]) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : "count";
    var cdata = {
        labels: (_h = ids === null || ids === void 0 ? void 0 : ids.map(function (id) { var _a; return (_a = data[id]) === null || _a === void 0 ? void 0 : _a[labelsField]; })) !== null && _h !== void 0 ? _h : [],
        datasets: [
            {
                data: (_j = ids === null || ids === void 0 ? void 0 : ids.map(function (id) { var _a; return (_a = data[id]) === null || _a === void 0 ? void 0 : _a[yField]; })) !== null && _j !== void 0 ? _j : [],
                backgroundColor: randomcolor_1.randomColor({ count: (_k = ids === null || ids === void 0 ? void 0 : ids.length) !== null && _k !== void 0 ? _k : 0, alpha: 0.5 }),
            },
        ],
    };
    var com = react_chartjs_2_1.Bar;
    if (chartType === "Doughnut")
        com = react_chartjs_2_1.Doughnut;
    return (react_1.default.createElement("div", { className: classes.main },
        react_1.default.createElement(Card_1.default, { className: classes.card }, react_1.default.createElement(com, { data: cdata }))));
};
var enhance = compose_1.default(styles_1.withStyles(styles), react_admin_1.translate);
exports.default = enhance(ChartCard);
