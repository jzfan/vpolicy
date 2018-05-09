<template>
  <div>
  <barChart :data='history'></barChart>
  </div>
</template>
<script>
import barChart from './barChart'
import {getSsqHistoryData} from '../api'
export default {
  components: { barChart },
  data () {
    return {
      history: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
        datasets: [
          {
            label: '蓝球',
            backgroundColor: '#f87979',
            data: [11, 22, 33, 44, 55, 66, 40, 40, 39, 10, 40, 39, 80, 40, 40, 39]
          }
        ]
      }
    }
  },
  created () {
    getSsqHistoryData((data) => this.history.datasets.data = data)
  }
}
</script>