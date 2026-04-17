import { useState, useEffect } from 'react';
import { utilityAPI } from '../api/travelApi';

// Free currency exchange API
// No key required: https://api.exchangerate-api.com

interface ExchangeRate {
  usdToRwf: number;
  eurToRwf: number;
  gbpToRwf: number;
  lastUpdated: string;
}

export function useExchangeRateAPI() {
  const [rates, setRates] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await utilityAPI.getExchangeRates();
        setRates({
          usdToRwf: data.usdToRwf,
          eurToRwf: data.eurToRwf,
          gbpToRwf: data.gbpToRwf,
          lastUpdated: new Date(data.lastUpdated).toLocaleDateString()
        });
        setError(null);
      } catch {
        setRates({
          usdToRwf: 1300,
          eurToRwf: 1400,
          gbpToRwf: 1600,
          lastUpdated: new Date().toLocaleDateString()
        });
        setError('Using backend fallback exchange rates');
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, []);

  return { rates, loading, error };
}
