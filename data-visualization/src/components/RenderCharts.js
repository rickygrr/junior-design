import { DonutChartContainer } from './components/DonutChartContainer';
import { BarChartContainer } from './components/BarChartContainer';
import { GridContainer } from './components/GridContainer';
import { PanelBarContainer } from './components/PanelBarContainer';


render () {
<div className="row">
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
      <PanelBarContainer />
    </div>
    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <DonutChartContainer />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <BarChartContainer />
        </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <GridContainer />
      </div>
    </div>
</div>
}
