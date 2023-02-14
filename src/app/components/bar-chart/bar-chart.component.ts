import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chart: any
  ngOnInit(): void {
    this.createChart()
  }

  createChart() {

    Chart.defaults.color = "#fafafa";

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['10', '11', '12', '13',
          '14', '15', '16', '17',],
        datasets: [
          {
            label: "Sales",
            data: ['145', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#8687E7',
            borderRadius: 5,
            borderSkipped: false
          },
          {
            label: "Profit",
            data: ['121', '542', '536', '327', '173',
              '243', '538', '541'],
            backgroundColor: '#FF4949',
            borderRadius: 5,
            borderSkipped: false
          }
        ]
      },
      options: {
        aspectRatio: 2,
        color: '#fafafa'
      },

    });
  }
}
