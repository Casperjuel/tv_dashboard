import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const defaultOptions = {
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

export default class ChartRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { chartData } = this.props;

    return (
      <div>
        <Line options={defaultOptions} data={chartData} id="myChart" />
      </div>
    );
  }
}

ChartRender.propTypes = {
  chartData: PropTypes.array,
};
