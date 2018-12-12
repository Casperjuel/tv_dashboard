import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const options = {
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

const data = {
  datasets: [
    {
      label: 'before',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#55D432',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default class ChartRender extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const { chartData } = this.props;

    return (
      <div>
        <Line options={options} data={data} id="myChart" />
      </div>
    );
  }
}

ChartRender.propTypes = {
  // chartData: PropTypes.array,
};
