<template>
  <div>
  <barChart :chart-data='chartData'></barChart>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import barChart from './barChart'
import {getSsqHistoryCountData} from '../api'
export default {
  extends: Bar,
  components: { barChart },
  data () {
    return {
      chartData: null
    }
  },
  created () {
    getSsqHistoryCountData((data) => {
      data.sort((a,b) => a.number - b.number)
      this.chartData = {
          labels: data.map(i => i.number),
          datasets: [
            {
              label: '蓝球',
              backgroundColor: '#f87979',
              data: data.map(i => i.count)
            }
          ]
        }
      })
  }
}
</script>