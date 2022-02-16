import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
export default class Finances extends Component {
    state = {
        option: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        }
    }
    render() {
        const { option } = this.state;
        return (
            <ReactEcharts option={option} style={{ width: 400, height: 300 }}></ReactEcharts>
        );
    }
}
