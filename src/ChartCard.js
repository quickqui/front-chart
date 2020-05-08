import React from "react";
import compose from "recompose/compose";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { translate } from "react-admin";
import { Bar, Doughnut } from "react-chartjs-2";
import { randomColor } from "randomcolor";
const styles = {
  main: {
    flex: "1" // marginRight: "1em",
    // marginTop: 20

  },
  card: {
    overflow: "inherit",
    textAlign: "right",
    padding: 16,
    minHeight: 52
  }
};

const ChartCard = props => {
  var _ref, _functionModel$parame, _ref2, _functionModel$parame2, _ref3, _sources$, _ref4, _sources$2, _ref5, _ref6, _ref7;

  const {
    data,
    classes,
    functionModel,
    ids
  } = props;
  const chartType = (_ref = (_functionModel$parame = functionModel.parameters) === null || _functionModel$parame === void 0 ? void 0 : _functionModel$parame["chartType"]) !== null && _ref !== void 0 ? _ref : "Bar";
  const sources = (_ref2 = (_functionModel$parame2 = functionModel.parameters) === null || _functionModel$parame2 === void 0 ? void 0 : _functionModel$parame2["sources"]) !== null && _ref2 !== void 0 ? _ref2 : ["count"]; //TODO 实现更多的sources可能性。

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

  const labelsField = (_ref3 = (_sources$ = sources[0]) === null || _sources$ === void 0 ? void 0 : _sources$.label) !== null && _ref3 !== void 0 ? _ref3 : "id";
  const yField = (_ref4 = (_sources$2 = sources[0]) === null || _sources$2 === void 0 ? void 0 : _sources$2.y) !== null && _ref4 !== void 0 ? _ref4 : "count";
  const cdata = {
    labels: (_ref5 = ids === null || ids === void 0 ? void 0 : ids.map(id => {
      var _data$id;

      return (_data$id = data[id]) === null || _data$id === void 0 ? void 0 : _data$id[labelsField];
    })) !== null && _ref5 !== void 0 ? _ref5 : [],
    datasets: [{
      data: (_ref6 = ids === null || ids === void 0 ? void 0 : ids.map(id => {
        var _data$id2;

        return (_data$id2 = data[id]) === null || _data$id2 === void 0 ? void 0 : _data$id2[yField];
      })) !== null && _ref6 !== void 0 ? _ref6 : [],
      backgroundColor: randomColor({
        count: (_ref7 = ids === null || ids === void 0 ? void 0 : ids.length) !== null && _ref7 !== void 0 ? _ref7 : 0,
        alpha: 0.5
      })
    }]
  };
  let com = Bar;
  if (chartType === "Doughnut") com = Doughnut;
  return React.createElement("div", {
    className: classes.main
  }, React.createElement(Card, {
    className: classes.card
  }, React.createElement(com, {
    data: cdata
  })));
};

const enhance = compose(withStyles(styles), translate);
export default enhance(ChartCard);