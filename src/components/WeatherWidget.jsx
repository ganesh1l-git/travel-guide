import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudDrizzle, CloudRain, Snowflake, CloudLightning, Thermometer, Droplets, Wind } from 'lucide-react';

// Map WMO weather codes to readable descriptions and icons
const getWeatherInfo = (code) => {
  if (code === 0 || code === 1) return { label: 'Clear Sky', icon: Sun, color: '#fbbf24' }; // yellow-400
  if (code === 2 || code === 3 || code === 45 || code === 48) return { label: 'Cloudy', icon: Cloud, color: '#94a3b8' }; // slate-400
  if (code >= 51 && code <= 57) return { label: 'Drizzle', icon: CloudDrizzle, color: '#60a5fa' }; // blue-400
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { label: 'Rain', icon: CloudRain, color: '#3b82f6' }; // blue-500
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { label: 'Snow', icon: Snowflake, color: '#e0f2fe' }; // sky-100
  if (code >= 95) return { label: 'Thunderstorm', icon: CloudLightning, color: '#a78bfa' }; // violet-400
  return { label: 'Unknown', icon: Cloud, color: '#94a3b8' };
};

const WeatherWidget = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!coordinates) return;
    
    let isMounted = true;
    setLoading(true);
    
    const [lat, lon] = coordinates;
    
    // Using Open-Meteo free API
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const data = await res.json();
        
        if (isMounted) {
          setWeatherData({
            current: data.current_weather,
            daily: {
              time: data.daily.time,
              weathercode: data.daily.weathercode,
              maxTemp: data.daily.temperature_2m_max,
              minTemp: data.daily.temperature_2m_min,
            }
          });
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        if (isMounted) setLoading(false);
      }
    };
    
    fetchWeather();
    
    return () => {
      isMounted = false;
    };
  }, [coordinates]);

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="skeleton-line" style={{ width: '40%' }}></div>
        <div className="skeleton-line" style={{ width: '80%' }}></div>
        <div className="skeleton-line" style={{ width: '60%' }}></div>
      </div>
    );
  }

  if (!weatherData) return null;

  const currentInfo = getWeatherInfo(weatherData.current.weathercode);
  const CurrentIcon = currentInfo.icon;
  
  const todayInfo = getWeatherInfo(weatherData.daily.weathercode[0]);
  const TodayIcon = todayInfo.icon;
  
  const tomorrowInfo = getWeatherInfo(weatherData.daily.weathercode[1]);
  const TomorrowIcon = tomorrowInfo.icon;

  return (
    <div className="weather-widget glass-panel-inner">
      <div className="weather-header">
        <h4>Current Weather</h4>
        <div className="current-temp-container">
          <CurrentIcon size={32} color={currentInfo.color} className="weather-icon-main" />
          <div className="temp-details">
            <span className="main-temp">{Math.round(weatherData.current.temperature)}°C</span>
            <span className="condition-label">{currentInfo.label}</span>
          </div>
        </div>
      </div>
      
      <div className="forecast-divider"></div>
      
      <div className="forecast-container">
        <div className="forecast-day">
          <span className="day-label">Today</span>
          <div className="forecast-icon-temp">
            <TodayIcon size={20} color={todayInfo.color} />
            <div className="min-max">
              <span className="max-t">{Math.round(weatherData.daily.maxTemp[0])}°</span>
              <span className="min-t">{Math.round(weatherData.daily.minTemp[0])}°</span>
            </div>
          </div>
        </div>
        
        <div className="forecast-day">
          <span className="day-label">Tomorrow</span>
          <div className="forecast-icon-temp">
            <TomorrowIcon size={20} color={tomorrowInfo.color} />
            <div className="min-max">
              <span className="max-t">{Math.round(weatherData.daily.maxTemp[1])}°</span>
              <span className="min-t">{Math.round(weatherData.daily.minTemp[1])}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
