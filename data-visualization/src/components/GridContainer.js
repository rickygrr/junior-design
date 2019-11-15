import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
import { Sparkline } from '@progress/kendo-react-charts';

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem.PriceHistory}/></td>
const processData = (data) => {
  data.forEach((item) => {
    item.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    return item;
  })
  return data;
}

export const GridContainer = () => (
  <div>
    <Grid style={{ height: '300px' }} data={processData(gridData)}>
      <Column field="ID" title="ID" width="40px" />
      <Column field="Name" title="Name" width="160px" />
      <Column field="EntryTime" title="Entry Time" width="160px" />
      <Column field="DwellTime" title="Dwell Time" width="160px" />
      <Column field="FirstFixation" title="First Fixation" width="160px" />
      <Column field="AverageFixation" title="Average Fixation" width="160px" />
    </Grid>
  </div>
);