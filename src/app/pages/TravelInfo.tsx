import { Navigation } from '../components/Navigation';
import { AlertTriangle, Globe, Info, Mail, MapPin as MapPinIcon, Phone, Plane, Shield, Wallet } from 'lucide-react';

export function TravelInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Travel Information</h1>
              <p className="text-gray-600">Essential info for your Rwanda trip</p>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Quick Facts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-1 text-sm text-gray-600">Capital</p>
              <p className="font-semibold text-gray-900">Kigali</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-600">Language</p>
              <p className="font-semibold text-gray-900">Kinyarwanda, French, English</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-600">Currency</p>
              <p className="font-semibold text-gray-900">Rwandan Franc (RWF)</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-600">Time Zone</p>
              <p className="font-semibold text-gray-900">CAT (UTC+2)</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-600">Electricity</p>
              <p className="font-semibold text-gray-900">230V, 50Hz (Type C, J plugs)</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-600">Calling Code</p>
              <p className="font-semibold text-gray-900">+250</p>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Plane className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Visa & Entry</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Visa on arrival:</strong> Available for most nationalities ($50 for 30 days)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>E-visa:</strong> Apply online before travel at www.migration.gov.rw
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Passport validity:</strong> Must be valid for 6 months beyond entry
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>East Africa Tourist Visa:</strong> $100 for Rwanda, Kenya, Uganda (90 days)
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Health & Safety</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Vaccinations:</strong> Yellow fever required (if coming from endemic area)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Recommended:</strong> Hepatitis A & B, typhoid, tetanus
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Malaria:</strong> Low risk in Kigali, prophylaxis recommended for rural areas
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">&bull;</span>
                <div>
                  <strong>Safety:</strong> Rwanda is one of Africa&apos;s safest countries
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <div className="mb-6 flex items-center gap-2">
            <Wallet className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Money & Banking</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Currency Exchange</h3>
              <p className="mb-2 text-sm text-gray-700">1 USD approximately 1,300 RWF (rates vary)</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&bull; Banks and forex bureaus available</li>
                <li>&bull; Hotels offer exchange (lower rates)</li>
                <li>&bull; USD widely accepted in tourism</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">ATMs & Cards</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&bull; ATMs common in Kigali</li>
                <li>&bull; Visa/Mastercard widely accepted</li>
                <li>&bull; Notify bank before travel</li>
                <li>&bull; Mobile money (MTN, Airtel) popular</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Tipping Guide</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&bull; Restaurants: 10% (if not included)</li>
                <li>&bull; Guides: $10-20 per day</li>
                <li>&bull; Hotel staff: $2-5</li>
                <li>&bull; Taxis: Round up fare</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <div className="mb-6 flex items-center gap-2">
            <Phone className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Communication & Internet</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Mobile Networks</h3>
              <p className="mb-3 text-sm text-gray-700">
                Get a local SIM card at the airport or in town. Major providers:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <div>
                    <strong>MTN:</strong> Best coverage nationwide
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <div>
                    <strong>Airtel:</strong> Good alternative with competitive rates
                  </div>
                </li>
                <li className="text-gray-600">Data: 1GB approximately $2-3, widely available</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Internet Access</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <span>Good 4G coverage in Kigali and major towns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <span>Free Wi-Fi in most hotels, cafes, and restaurants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <span>Internet cafes available in cities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">&bull;</span>
                  <span>Connection may be slower in rural or park areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <p className="mb-1 text-sm text-gray-600">Police</p>
              <p className="text-2xl font-bold text-gray-900">112</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-1 text-sm text-gray-600">Ambulance</p>
              <p className="text-2xl font-bold text-gray-900">912</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-1 text-sm text-gray-600">Fire Service</p>
              <p className="text-2xl font-bold text-gray-900">111</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-white p-4">
            <p className="mb-2 text-sm font-semibold text-gray-900">Tourist Police</p>
            <p className="text-gray-700">Available 24/7 in major tourist areas and at the airport</p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Getting Around</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">In Kigali</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>&bull; Motorcycle taxis (most common)</li>
                <li>&bull; Ride-hailing apps (Yego, Move)</li>
                <li>&bull; Regular taxis (negotiate fare)</li>
                <li>&bull; Public buses (cheap, crowded)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Between Cities</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>&bull; Buses (frequent, affordable)</li>
                <li>&bull; Private car hire with driver</li>
                <li>&bull; Shared taxis</li>
                <li>&bull; Domestic flights (limited)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Tips</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>&bull; Roads are generally good</li>
                <li>&bull; Motorcycle helmets mandatory</li>
                <li>&bull; Agree on prices beforehand</li>
                <li>&bull; Traffic drives on the right</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact SURA RWANDA</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-green-600">
                <Mail className="h-6 w-6" />
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700">info@surarwanda.com</p>
              <p className="text-gray-700">support@surarwanda.com</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-green-600">
                <Phone className="h-6 w-6" />
                <h3 className="font-semibold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-700">+250 788 123 456</p>
              <p className="text-gray-700">+250 788 654 321</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-green-600">
                <MapPinIcon className="h-6 w-6" />
                <h3 className="font-semibold text-gray-900">Address</h3>
              </div>
              <p className="text-sm text-gray-700">
                KG 11 Ave, Kigali
                <br />
                Kigali City Tower, Floor 5
                <br />
                Kigali, Rwanda
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-green-600">
              <Globe className="h-6 w-6" />
              <h3 className="font-semibold text-gray-900">Office Hours</h3>
            </div>
            <div className="grid gap-4 text-sm text-gray-700 md:grid-cols-2">
              <div>
                <p>
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                </p>
              </div>
              <div>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
                <p>
                  <strong>Public Holidays:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
