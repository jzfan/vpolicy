<template>
  <div>
  <barChart :chart-data='chartDataBlue'></barChart>
  <barChart :chart-data='chartDataRed'></barChart>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import barChart from './barChart'
import {getWinNumberCountByCode} from '../api'
export default {
  extends: Bar,
  components: { barChart },
  data () {
    return {
      chartDataBlue: null,
      chartDataRed: null
    }
  },
  created () {
    getWinNumberCountByCode('ssq', (data) => {
      data.blue.sort((a,b) => a.number - b.number)
      data.red.sort((a,b) => a.number - b.number)
      this.chartDataBlue = {
          labels: data.blue.map(i => i.number),
          datasets: [
            {
              label: '蓝球',
              backgroundColor: '#3374dd',
              data: data.blue.map(i => i.count)
            }
          ]
        }
        this.chartDataRed = {
            labels: data.red.map(i => i.number),
            datasets: [
              {
                label: '红球',
                backgroundColor: '#FF0000',
                data: data.red.map(i => i.count)
              }
            ]
          }
      })
  }
}
</script>