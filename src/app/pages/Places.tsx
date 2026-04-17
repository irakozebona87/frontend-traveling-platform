import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { MapPin, Star, Clock, DollarSign, TreePine, Waves, Building2, Mountain, Heart, Hotel } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { attractionsAPI, type Attraction } from '../api/travelApi';
import { dummyPlaces } from '../utils/dummyData';

export function Places() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState<Attraction[]>(dummyPlaces as unknown as Attraction[]);
  const [stats, setStats] = useState({ parks: 4, lakes: 3, culture: 4, hotels: 5 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'All', name: 'All Attractions', icon: MapPin },
    { id: 'Parks', name: 'National Parks', icon: TreePine },
    { id: 'Lakes', name: 'Lakes & Waters', icon: Waves },
    { id: 'Cities', name: 'Cities & Towns', icon: Building2 },
    { id: 'Mountains', name: 'Mountains & Hills', icon: Mountain },
    { id: 'Culture', name: 'Cultural Sites', icon: Heart },
    { id: 'Hotels', name: 'Accommodations', icon: Hotel },
  ];

  useEffect(() => {
    let active = true;

    async function loadPlaces() {
      try {
        setLoading(true);
        setError(null);
        const response = await attractionsAPI.getAll(selectedCategory);

        if (!active) {
          return;
        }

        setPlaces(response.data);
        setStats(response.stats);
      } catch {
        if (active) {
          setError('We could not load live destination data right now.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPlaces();

    return () => {
      active = false;
    };
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Explore Rwanda</h1>
              <p className="text-gray-600">Live destination data is now loaded through the backend instead of hardcoded frontend arrays.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.parks}</p>
            <p className="text-sm text-gray-600">National Parks</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <Waves className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.lakes}</p>
            <p className="text-sm text-gray-600">Major Lakes</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.culture}</p>
            <p className="text-sm text-gray-600">Cultural Sites</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <Hotel className="w-8 h-8 text-violet-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.hotels}</p>
            <p className="text-sm text-gray-600">Top Hotels</p>
          </div>
        </div>

        {loading && places.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-100 rounded" />
                  <div className="h-4 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-6">{error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all hover:transform hover:scale-[1.02] duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback src={place.image} alt={place.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{place.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 mb-2">
                        {place.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{place.description}</p>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>{place.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span>{place.price}</span>
                    </div>
                    {place.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>{place.location.lat.toFixed(2)}, {place.location.lng.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Top activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {place.activities.slice(0, 4).map((activity) => (
                        <span key={activity} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
