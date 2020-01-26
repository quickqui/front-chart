import React from "react";
import { ListController } from "react-admin";

import ChartCard from "./ChartCard";
//FIXME 分离没有成功，jsx没有被compile到dist中， 所以也没有办法被resolve。
const ChartCardView = props => {
  const resource = props["functionModel"].resource;
  const filter = props["functionModel"]?.query?.filter;

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
      {controllerProps => (
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
