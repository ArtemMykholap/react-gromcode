import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';
import PropTypes from 'prop-types';

class Weather extends Component {
    componentDidMount() {
      this.props.getWeatherData();
    }
  
    render() {
      return (
               <main className="weather">
               <h1 className="weather__title">Weather data</h1>
               <ul className="cities-list">
                   {this.props.weatherData.weather.map(el => {
                       return (<li key={el.id} className="city">
                           <span className="city__name">{el.name}</span>
                           <span className="city__temperature">{`${el.temperature}F`}</span>
                       </li>)
                   })}
               </ul>
           </main>
      );
    }
  }

const mapState = (state) => {
  return {
    weatherData: state,
  };
};

const mapDispatch = {
  getWeatherData: getWeatherData,
};
Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(Weather);




