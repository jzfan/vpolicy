<template>
  <div>
  <selectLimit v-on:getCount='getCount'></selectLimit>
  <barChart :chart-data='chartDataBai'></barChart>
  <barChart :chart-data='chartDataShi'></barChart>
  <barChart :chart-data='chartDataGe'></barChart>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import barChart from './barChart'
import {getWinNumberCountByCode} from '../api'
import selectLimit from './selectLimit'
export default {
  extends: Bar,
  components: { barChart, selectLimit },
  data () {
    return {
      chartDataBai: null,
      chartDataShi: null,
      chartDataGe: null
    }
  },
  created () {
    getWinNumberCountByCode('fc3d', 50, 'select', (data) => {
        this.setAllData(data)
      })
  },
  methods: {
    getCount(n, q) {
      getWinNumberCountByCode('fc3d', n, q, (data) => this.setAllData(data))
    },
    setAllData (data) {
      this.chartDataBai = this.setData(data.bai, '百位')
      this.chartDataShi = this.setData(data.shi, '十位')
      this.chartDataGe = this.setData(data.ge, '个位')
    },
    setData (data, label) {
      data.sort((a,b) => a.number - b.number)
      return {
          labels: data.map(i => i.number),
          datasets: [
            {
              label: label,
              backgroundColor: '#f87979',
              data: data.map(i => i.count)
            }
          ]
        }
    }
  }
}
</script>