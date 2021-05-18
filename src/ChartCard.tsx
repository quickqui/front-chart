import React from "react";
import compose from "recompose/compose";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { translate } from "react-admin";
import { Bar, Doughnut } from "react-chartjs-2";
import { randomColor } from "randomcolor";

const styles = {
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

const ChartCard = (props) => {
  const { data, classes, functionModel, ids } = props;
  const chartType = functionModel.parameters?.["chartType"] ?? "Bar";
  const sources = functionModel.parameters?.["sources"] ;

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
  const labelsField = sources[0]?.label ?? "id";
  const yField = sources[0]?.y ?? "count";
  const cdata = {
    labels: ids?.map((id) => data[id]?.[labelsField]) ?? [],
    datasets: [
      {
        data: ids?.map((id) => data[id]?.[yField]) ?? [],
        backgroundColor: randomColor({ count: ids?.length ?? 0, alpha: 0.5 }),
      },
    ],
  };
  let com = Bar;
  if (chartType === "Doughnut") com = Doughnut;
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        {React.createElement(com, { data: cdata })}
      </Card>
    </div>
  );
};

const enhance = compose(withStyles(styles), translate);

export default enhance(ChartCard);
