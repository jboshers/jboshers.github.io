import React from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

class WakaPie extends React.Component {
  scrubData = function() {
    var languages = this.props.languages.map(function(language, idx) {
      return language.name
    });
    var percents = this.props.languages.map(function(language) {
      return language.percent
    });

    return {
      labels: languages,
      series: percents
    }
  }
  render() {

    var options = {
      labelInterpolationFnc: function(value, index) {
        value = value == 'JavaScript' ? 'JS' : value
        return index < 4 ? value : '';
      },
      labelOffset: -30,
      chartPadding: 30,
      labelPosition: 'outside'
    }

    var type = 'Pie'

    return (
      <div>
        <h6 className="modal__title">Where I Spend My Time</h6>
        <ChartistGraph className={'ct-square'} data={this.scrubData()} type={type} options={options} />
      </div>
    )
  }
}

const wakaURL ='https://crossorigin.me/https://wakatime.com/share/@lunchbox/c0b6070d-856a-472a-b1ac-ed30c691aa86.json';

fetch('/wakatime.json')
  .then(function(response) {
    return response.json();
  }).then(function(j){
    ReactDOM.render(<WakaPie languages={j.data} />, document.getElementById('languages'));
  });
