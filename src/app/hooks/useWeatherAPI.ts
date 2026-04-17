import { useState, useEffect } from 'react';
import { utilityAPI } from '../api/travelApi';

// Free weather API - No key required for basic usage
// For production, get your free API key from https://openweathermap.org/api

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export function useWeatherAPI(city: string = 'Kigali') {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await utilityAPI.getWeather(city);
        setWeather({
          temperature: data.temperature,
          description: data.description,
          humidity: data.humidity,
          windSpeed: data.windSpeed
        });
        setError(null);
      } catch {
        setWeather({
          temperature: 22,
          description: 'Partly cloudy',
          humidity: 65,
          windSpeed: 12
        });
        setError('Using backend fallback weather data');
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}
