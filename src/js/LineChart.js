import VueCharts from 'vue-chartjs'
const { reactiveProp } = VueCharts.mixins

export default {
  extends: VueCharts.Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}
