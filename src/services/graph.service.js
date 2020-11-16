import { prepareGraphAuctions, prepareGraphHistory } from '@helpers/graph.helpers';

export const getDesignerChartOptions = (history) => {
  const options = {
    title: {
      text: '',
    },
    chart: {
      height: 160,
      width: 1220,
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: false,
        },
      },
    },
    yAxis: {
      title: '',
      labels: {
        formatter(params) {
          return `${params.value}E`;
        },
      },
    },
    series: [{
      data: prepareGraphAuctions(history),
    }],
  };

  return options;
};

export const getMainPageChartOptions = (history) => {
  const options = {
    title: {
      text: '',
    },
    chart: {
      height: 175,
      width: 825,
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: false,
        },
      },
    },
    yAxis: {
      title: '',
      labels: {
        formatter(params) {
          return `${params.value}E`;
        },
      },
    },
    series: [{
      data: prepareGraphAuctions(history),
    }],
  };
  return options;
};

export const getAuctionInformationChartOptions = (history) => {

  const options = {
    title: {
      text: '',
    },
    chart: {
      width: 490,
      height: 100,
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: true,
        },
      },
    },
    yAxis: {
      lineColor: '#BABABA',
      lineWidth: 1,
      title: '',
      labels: {
        formatter(params) {
          return `${params.value}E`;
        },
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },
    series: [{
      data: prepareGraphHistory(history),
    }],
  };
  return options;
};

export const getCardProductChartOptions = (history) => {
  const options = {
    title: {
      text: '',
    },
    chart: {
      height: 105,
      width: 573,
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: false,
        },
      },
    },
    yAxis: {
      lineColor: '#BABABA',
      lineWidth: 1,
      title: '',
      labels: {
        formatter(params) {
          return `${params.value}E`;
        },
      },
    },
    series: [{
      data: prepareGraphHistory(history),
    }],
  };
  return options;
};
