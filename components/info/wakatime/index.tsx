import React from 'react'
import ChartistGraph from 'react-chartist'

const CodeChart = ({ data }) => {
  const options = {
    labelInterpolationFnc: function(value, index) {
      // value = value == 'JavaScript' ? 'JS' : value
      // value = value == 'Markdown' ? 'MD' : value
      // value = value == 'TypeScript' ? 'TS' : value
      return index < 4 ? value : ''
    },
    labelOffset: 80,
    chartPadding: 0,
    labelPosition: 'center',
    ignoreEmptyValues: true
  }

  const type = 'Pie'

  return (
    <div className="image__large">
      <ChartistGraph className={'ct-square'} data={data} type={type} options={options} />
    </div>
  )
}

export default CodeChart
