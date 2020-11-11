import React from "react";
import compose from "recompose/compose";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { translate } from "react-admin";
import { Bar, Doughnut } from "react-chartjs-2";
import { randomColor } from "randomcolor";
var styles = {
    main: {
        flex: "1",
    },
    card: {
        overflow: "inherit",
        textAlign: "right",
        padding: 16,
        minHeight: 52,
    },
};
var ChartCard = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var data = props.data, classes = props.classes, functionModel = props.functionModel, ids = props.ids;
    var chartType = (_b = (_a = functionModel.parameters) === null || _a === void 0 ? void 0 : _a["chartType"]) !== null && _b !== void 0 ? _b : "Bar";
    var sources = (_d = (_c = functionModel.parameters) === null || _c === void 0 ? void 0 : _c["sources"]) !== null && _d !== void 0 ? _d : ["count"];
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
    var labelsField = (_f = (_e = sources[0]) === null || _e === void 0 ? void 0 : _e.label) !== null && _f !== void 0 ? _f : "id";
    var yField = (_h = (_g = sources[0]) === null || _g === void 0 ? void 0 : _g.y) !== null && _h !== void 0 ? _h : "count";
    var cdata = {
        labels: (_j = ids === null || ids === void 0 ? void 0 : ids.map(function (id) { var _a; return (_a = data[id]) === null || _a === void 0 ? void 0 : _a[labelsField]; })) !== null && _j !== void 0 ? _j : [],
        datasets: [
            {
                data: (_k = ids === null || ids === void 0 ? void 0 : ids.map(function (id) { var _a; return (_a = data[id]) === null || _a === void 0 ? void 0 : _a[yField]; })) !== null && _k !== void 0 ? _k : [],
                backgroundColor: randomColor({ count: (_l = ids === null || ids === void 0 ? void 0 : ids.length) !== null && _l !== void 0 ? _l : 0, alpha: 0.5 }),
            },
        ],
    };
    var com = Bar;
    if (chartType === "Doughnut")
        com = Doughnut;
    return (React.createElement("div", { className: classes.main },
        React.createElement(Card, { className: classes.card }, React.createElement(com, { data: cdata }))));
};
var enhance = compose(withStyles(styles), translate);
export default enhance(ChartCard);
