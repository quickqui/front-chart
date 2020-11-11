import React from "react";
import { List ,ListController} from "react-admin";

import ChartCard from "./ChartCard";
const ChartCardView = props => {
  const { model, functionModel, presentation } = props;
  const resource = functionModel.resource;
  const filter = functionModel.query?.filter;

  const location = { pathname: resource };
  const basePath = "/" + resource;
  return (
    <ListController
      location={location}
      basePath={basePath}
      resource={resource}
      filter={filter}
      {...props}
    >
      {(controllerProps) => (
        <ChartCard
          icon={props.functionModel?.parameters?.["icon"]}
          {...props}
          {...controllerProps}
        />
      )}
    </ListController>
  );
};
export default ChartCardView;
