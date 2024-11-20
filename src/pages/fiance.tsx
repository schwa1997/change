import React from 'react';
import Layout from '@theme/Layout';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import CryptoStats from './components/CryptoStats';

export default function Home(): JSX.Element {
  const chartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Crypto Trading Performance',
      align: 'left'
    },
    subtitle: {
      text: 'Returns and rates by cryptocurrency',
      align: 'left'
    },
    xAxis: {
      categories: ['Return (€)', 'Return Rate (%)'],
      title: {
        text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
    },
    yAxis: [{
      min: 0,
      title: {
        text: 'Return (€)',
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        format: '€{value}'
      },
      gridLineWidth: 0
    }, {
      min: 0,
      title: {
        text: 'Return Rate (%)',
        align: 'high'
      },
      labels: {
        format: '{value}%'
      },
      opposite: true
    }],
    tooltip: {
      formatter: function() {
        const suffix = this.point.category.includes('€') ? '€' : '%';
        return `${this.series.name}: ${this.y}${suffix}`;
      }
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true,
          formatter: function() {
            const suffix = this.point.category.includes('€') ? '€' : '%';
            return `${this.y}${suffix}`;
          }
        },
        groupPadding: 0.1
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'CLV',
      data: [38.83, 38.83]
    }, {
      name: 'TRB',
      data: [190.75, 38.15]
    }, {
      name: 'ETH',
      data: [36.46, 7.29]
    }, {
        name: 'BTC',
        data: [10.08, 6.72]
      }]
  };

  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
        <div className="sectionContent">
          <h2>📈 Crypto Trading</h2>
          <p>
            Track and visualize my cryptocurrency trading performance
            and investment journey.
          </p>
          
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
          <CryptoStats />
        </div>
      </div>
      
    </Layout>
  );
}