import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { LanguageChatbot } from '../components/LanguageChatbot';
import { Compass, MapPin, Utensils, ArrowRight, Sparkles, MessageCircle, ChevronLeft, ChevronRight, TreePine, Mountain, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export function Home() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
const heroImages = [
  { url: '/images/hero/hero-1.jpg', title: 'Discover the Land...' },
  { url: '/images/hero/hero-2.jpg', title: 'Meet Majestic Gorillas...' },
  { url: '/images/hero/hero-3.jpg', title: 'Relax at Lake Kivu...' },
  { url: '/images/hero/hero-4.jpg', title: 'Explore Kigali...' },
];

  const features = [
    {
      icon: MapPin,
      title: 'Explore Places',
      description: 'Discover Rwanda\'s most beautiful destinations and attractions',
      link: '/places',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Utensils,
      title: 'Rwandan Cuisine',
      description: 'Explore traditional foods and where to find them',
      link: '/food-guide',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Compass,
      title: 'Trip Planner',
      description: 'AI-powered personalized recommendations for your budget',
      link: '/trip-planner',
      color: 'from-blue-500 to-cyan-600'
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Slideshow */}
      <div className="relative h-[600px] bg-gradient-to-r from-green-900 to-green-700 overflow-hidden">
        {/* Slideshow Images */}
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        ))}

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">AI-Powered Travel Assistant</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {heroImages[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Plan your perfect Rwanda adventure with AI-powered recommendations, trip planning, language learning, and comprehensive travel guides—all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/trip-planner"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/places"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-green-900 transition-colors shadow-lg"
              >
                Explore Places
              </Link>
              <button
                onClick={() => setShowChatbot(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Learn Kinyarwanda
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Your Trip</h2>
          <p className="text-xl text-gray-600">
            Our all-in-one platform helps you plan, learn, and experience Rwanda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={feature.link}
                  className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-200 h-full group"
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="flex items-center text-green-700 font-semibold">
                    Explore
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Why Rwanda Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Visit Rwanda?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mountain Gorillas</h3>
                    <p className="text-gray-600">One of the last places on Earth to see endangered mountain gorillas in their natural habitat</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Stunning Landscapes</h3>
                    <p className="text-gray-600">From volcanic mountains to pristine lakes and lush tea plantations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rich Culture</h3>
                    <p className="text-gray-600">Experience warm hospitality and vibrant traditions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Safe & Clean</h3>
                    <p className="text-gray-600">Known as one of Africa's safest and cleanest countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="/images/attractions/parks/volcanoes-park.jpg"
                alt="Gorilla"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <ImageWithFallback
                src="/images/attractions/cities/kigali.jpg"
                alt="Kigali city"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <ImageWithFallback
                src="/images/attractions/lakes/lake-kivu.jpg"
                alt="Lake Kivu"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
              <ImageWithFallback
                src="/images/attractions/parks/nyungwe-forest.jpg"
                alt="Tea plantations"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Let our AI help you create the perfect Rwanda experience tailored to your budget and interests
          </p>
          <Link
            to="/trip-planner"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Language Chatbot */}
      {showChatbot && <LanguageChatbot onClose={() => setShowChatbot(false)} />}

      {/* Floating Chatbot Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:from-green-700 hover:to-green-800 transition-all z-40 flex items-center gap-2 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Learn Kinyarwanda
          </span>
        </button>
      )}
    </div>
  );
}
