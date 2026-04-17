import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Utensils, Star, MapPin, DollarSign } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { foodAPI, type Food, type Restaurant } from '../api/travelApi';
import { dummyFoods, dummyRestaurants } from '../utils/dummyData';

export function FoodGuide() {
  const [foods, setFoods] = useState<Food[]>(dummyFoods as unknown as Food[]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(dummyRestaurants as Restaurant[]);
  const [tips, setTips] = useState<{
    etiquette: string[];
    streetFood: {
      bestAreas: string[];
      popularItems: string[];
      priceRange: string[];
    };
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadFoods() {
      try {
        setLoading(true);
        setError(null);
        const response = await foodAPI.getAll();

        if (!active) {
          return;
        }

        setFoods(response.dishes);
        setRestaurants(response.restaurants);
        setTips(response.tips);
      } catch {
        if (active) {
          setError('We could not load live cuisine data right now.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadFoods();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Rwandan Cuisine</h1>
              <p className="text-gray-600">Food content now comes from the backend, with dishes enriched from external sources at request time.</p>
            </div>
          </div>
        </div>

        {loading && foods.length === 0 && <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-600">Loading live food recommendations...</div>}
        {!loading && error && <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-700">{error}</div>}

        {(!loading || foods.length > 0) && !error && (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional Dishes You Must Try</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foods.map((food) => (
                  <div key={food.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <ImageWithFallback src={food.image} alt={food.name} className="w-full h-full object-cover" />
                      {food.mustTry && (
                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          Must Try
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <h3 className="font-bold text-gray-900">{food.name}</h3>
                        <span className="text-orange-600 font-semibold">{food.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{food.category}</p>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">{food.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {food.ingredients.slice(0, 3).map((ingredient) => (
                          <span key={ingredient} className="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-700">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Restaurants</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                  <div key={restaurant.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-orange-600 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{restaurant.price}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{restaurant.specialty}</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: Math.round(restaurant.rating) }).map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {tips && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dining Etiquette</h3>
                  <ul className="space-y-2 text-gray-700">
                    {tips.etiquette.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Street Food Guide</h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Best Areas</p>
                      <p>{tips.streetFood.bestAreas.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Popular Items</p>
                      <p>{tips.streetFood.popularItems.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Typical Prices</p>
                      <p>{tips.streetFood.priceRange.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
