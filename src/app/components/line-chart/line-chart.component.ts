import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any
  ngOnInit(): void {
    this.createChart()
  }

  createChart() {

    this.chart = new Chart("LineChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['10', '11', '12', '13',
          '14', '15', '16', '17',],
        datasets: [
          {
            label: "Sales",
            data: ['145', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#8687E7',
            borderColor: '#8687E7',
            tension: 0.4
          },
          {
            label: "Profit",
            data: ['121', '542', '536', '327', '173',
              '243', '538', '541'],
            borderColor: '#FF4949',
            backgroundColor: '#FF4949',
            tension: 0.4
          }
        ]
      },
      options: {
        aspectRatio: 2,
        color: '#fafafa'
      }

    });
  }
}
