import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';

import { DonutChartContainer } from './components/DonutChartContainer';
import { BarChartContainer } from './components/BarChartContainer';
import { GridContainer } from './components/GridContainer';
import { PanelBarContainer } from './components/PanelBarContainer';

import '@progress/kendo-theme-material/dist/all.css';
import './App.css';
import 'bootstrap-4-grid/css/grid.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false
    }
  }
  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }
  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog
    }, () => console.log(this.state))
  }

  render() {
    return (
      <Ripple>
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Data Visualization Dashboard</h1>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
              <Button primary={true} onClick={this.handleShare}>Share</Button>
              <Button onClick={this.handlePDFExport}>Export to PDF</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <PanelBarContainer />
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                  <h3>Revisits</h3>
                  <DonutChartContainer />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h3>Hit Count/ Hit Ratio/ Fixation Count</h3>
                  <BarChartContainer />
                </div>

              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h3>Statistics</h3>
                  <GridContainer />
                </div>
              </div>
            </div>
          </div>
          {this.state.showDialog &&
            <Dialog title={"Share this report"} onClose={this.handleShare}>
              <p>Please enter the email address/es of the recipient/s.</p>
              <Input placeholder="example@progress.com" />
              <DialogActionsBar>
                <Button primary={true} onClick={this.handleShare}>Share</Button>
                <Button onClick={this.handleShare}>Cancel</Button>
              </DialogActionsBar>
            </Dialog>
          }
        </div>
      </div>
      </Ripple>
    );
  }
}

export default App;