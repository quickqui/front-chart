function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { ListController } from "react-admin";
import ChartCard from "./ChartCard"; //FIXME 分离没有成功，jsx没有被compile到dist中， 所以也没有办法被resolve。

const ChartCardView = props => {
  var _props$functionModel, _props$functionModel$;

  const resource = props["functionModel"].resource;
  const filter = (_props$functionModel = props["functionModel"]) === null || _props$functionModel === void 0 ? void 0 : (_props$functionModel$ = _props$functionModel.query) === null || _props$functionModel$ === void 0 ? void 0 : _props$functionModel$.filter;
  const location = {
    pathname: resource
  };
  const basePath = "/" + resource;
  return React.createElement(ListController, _extends({
    location: location,
    basePath: basePath,
    resource: resource,
    filter: filter
  }, props), controllerProps => {
    var _props$functionModel2, _props$functionModel3;

    return React.createElement(ChartCard, _extends({
      icon: (_props$functionModel2 = props.functionModel) === null || _props$functionModel2 === void 0 ? void 0 : (_props$functionModel3 = _props$functionModel2.parameters) === null || _props$functionModel3 === void 0 ? void 0 : _props$functionModel3["icon"]
    }, props, controllerProps));
  });
};

export default ChartCardView;