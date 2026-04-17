import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Calendar, Plus, Trash2, MapPin, Clock, DollarSign, Download, Heart } from 'lucide-react';

interface ItineraryItem {
  id: string;
  day: number;
  title: string;
  location: string;
  time: string;
  cost: string;
  notes: string;
}

interface WishlistItem {
  id: string;
  title: string;
  location: string;
  type: string;
}

export function MyItinerary() {
  const [items, setItems] = useState<ItineraryItem[]>([
    {
      id: '1',
      day: 1,
      title: 'Arrival in Kigali',
      location: 'Kigali International Airport',
      time: '14:00',
      cost: '$0',
      notes: 'Hotel transfer included'
    },
    {
      id: '2',
      day: 1,
      title: 'Kigali Genocide Memorial',
      location: 'Kigali',
      time: '16:00',
      cost: 'Free',
      notes: 'Respectful attire required'
    },
    {
      id: '3',
      day: 2,
      title: 'Gorilla Trekking',
      location: 'Volcanoes National Park',
      time: '07:00',
      cost: '$1,500',
      notes: 'Bring hiking boots and rain jacket'
    },
  ]);

  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    { id: '1', title: 'Lake Kivu Kayaking', location: 'Lake Kivu', type: 'Activity' },
    { id: '2', title: 'Nyungwe Canopy Walk', location: 'Nyungwe Forest', type: 'Activity' },
    { id: '3', title: 'Bisate Lodge', location: 'Volcanoes NP', type: 'Accommodation' },
  ]);

  const [activeTab, setActiveTab] = useState<'itinerary' | 'wishlist'>('itinerary');

  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    day: 1,
    title: '',
    location: '',
    time: '',
    cost: '',
    notes: ''
  });

  const addItem = () => {
    if (newItem.title && newItem.location) {
      const item: ItineraryItem = {
        id: Date.now().toString(),
        ...newItem
      };
      setItems([...items, item]);
      setNewItem({ day: 1, title: '', location: '', time: '', cost: '', notes: '' });
      setShowAddForm(false);
    }
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<number, ItineraryItem[]>);

  const totalCost = items.reduce((sum, item) => {
    const cost = item.cost.replace(/[^0-9]/g, '');
    return sum + (cost ? parseInt(cost) : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">My Itinerary</h1>
                <p className="text-gray-600">Plan and organize your Rwanda adventure</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Activity
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Total Days</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {Object.keys(groupedItems).length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Activities</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{items.length}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm font-medium">Estimated Cost</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">${totalCost.toLocaleString()}</p>
          </div>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Activity</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                <input
                  type="number"
                  min="1"
                  value={newItem.day}
                  onChange={(e) => setNewItem({ ...newItem, day: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={newItem.time}
                  onChange={(e) => setNewItem({ ...newItem, time: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity Title *</label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="e.g., Gorilla Trekking"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  value={newItem.location}
                  onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                  placeholder="e.g., Volcanoes National Park"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cost</label>
                <input
                  type="text"
                  value={newItem.cost}
                  onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
                  placeholder="e.g., $50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <input
                  type="text"
                  value={newItem.notes}
                  onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
                  placeholder="Optional notes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={addItem}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Add to Itinerary
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Itinerary Items */}
        {Object.keys(groupedItems).sort((a, b) => parseInt(a) - parseInt(b)).map(day => (
          <div key={day} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{day}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Day {day}</h2>
            </div>

            <div className="space-y-4">
              {groupedItems[parseInt(day)].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        {item.time && (
                          <div className="flex items-center gap-1 text-gray-600 text-sm min-w-[80px]">
                            <Clock className="w-4 h-4" />
                            <span>{item.time}</span>
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                          <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                          {item.cost && (
                            <div className="flex items-center gap-1 text-purple-600 font-semibold text-sm mb-2">
                              <DollarSign className="w-4 h-4" />
                              <span>{item.cost}</span>
                            </div>
                          )}
                          {item.notes && (
                            <p className="text-sm text-gray-600 italic">{item.notes}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                    >
                      <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No activities yet</h3>
            <p className="text-gray-600 mb-6">Start building your perfect Rwanda itinerary</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add First Activity
            </button>
          </div>
        )}

        {/* Export Button */}
        {items.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Itinerary (PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}