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
        <h5 className="modal__title">Where I Spend My Time</h5>
        <ChartistGraph className={'ct-square'} data={this.scrubData()} type={type} options={options} />
      </div>
    )
  }
}

const wakaURL ='https://wakatime.com/share/@lunchbox/81b0c78d-ac76-453b-985b-adaa91721093.json';

fetch(wakaURL, {
  mode: 'no-cors'
})
  .then(function(response) {
    return response.json();
  }).then(function(j){
    ReactDOM.render(<WakaPie languages={j.data} />, document.getElementById('languages'));
  });
