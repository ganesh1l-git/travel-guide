import React, { useState, useMemo } from 'react';
import { Plane, Train, Bus, MapPin, Clock, IndianRupee, ArrowRight, Loader2 } from 'lucide-react';

// Haversine distance in km
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ============================================================
// FLIGHT DATA
// ============================================================
const majorAirports = {
  agra: { code: "AGR", name: "Agra Airport (Kheria)" },
  goa: { code: "GOI", name: "Goa International Airport" },
  jaipur: { code: "JAI", name: "Jaipur International Airport" },
  kerala: { code: "COK", name: "Cochin International Airport" },
  ladakh: { code: "IXL", name: "Kushok Bakula Rimpochee Airport, Leh" },
  varanasi: { code: "VNS", name: "Lal Bahadur Shastri Airport" },
  tirupati: { code: "TIR", name: "Tirupati Airport" },
  ellora: { code: "IXU", name: "Chikkalthana Airport, Aurangabad" },
  mysore: { code: "MYQ", name: "Mysore Airport" },
  amritsar: { code: "ATQ", name: "Sri Guru Ram Dass Jee International Airport" },
  shimla: { code: "SLV", name: "Shimla Airport (Jubbarhatti)" },
  jaisalmer: { code: "JSA", name: "Jaisalmer Airport" },
  manali: { code: "KUU", name: "Bhuntar Airport, Kullu" },
  delhi: { code: "DEL", name: "Indira Gandhi International Airport" },
  hyderabad: { code: "HYD", name: "Rajiv Gandhi International Airport" },
  bengaluru: { code: "BLR", name: "Kempegowda International Airport" },
  chennai: { code: "MAA", name: "Chennai International Airport" },
  kolkata: { code: "CCU", name: "Netaji Subhas Chandra Bose Airport" },
  srinagar: { code: "SXR", name: "Sheikh ul-Alam International Airport" },
  pune: { code: "PNQ", name: "Pune Airport" },
  kochi: { code: "COK", name: "Cochin International Airport" },
  mahabaleshwar: { code: "PNQ", name: "Pune Airport (nearest)" },
  kodaikanal: { code: "IXM", name: "Madurai Airport (nearest)" },
  cherrapunji: { code: "SHL", name: "Shillong Airport (nearest)" },
};

const airlines = ["IndiGo", "Air India", "SpiceJet", "Vistara", "Akasa Air", "Go First"];

function generateFlights(distKm, destName) {
  if (distKm < 150) {
    return { available: false, message: `${destName} is only ${Math.round(distKm)} km away — flights are not practical for this distance. Consider train or road travel.` };
  }
  const baseFare = Math.round(1800 + distKm * 3.2);
  const flights = [
    { class: "Economy", price: `₹${baseFare.toLocaleString('en-IN')}`, airlines: [airlines[0], airlines[2]], duration: `${Math.max(1, Math.round(distKm / 700))}h ${Math.round(Math.random() * 40 + 10)}m`, frequency: "12+ daily" },
    { class: "Premium Economy", price: `₹${Math.round(baseFare * 1.6).toLocaleString('en-IN')}`, airlines: [airlines[1], airlines[3]], duration: `${Math.max(1, Math.round(distKm / 700))}h ${Math.round(Math.random() * 40 + 10)}m`, frequency: "6+ daily" },
    { class: "Business", price: `₹${Math.round(baseFare * 3.2).toLocaleString('en-IN')}`, airlines: [airlines[1]], duration: `${Math.max(1, Math.round(distKm / 700))}h ${Math.round(Math.random() * 30 + 5)}m`, frequency: "2-4 daily" },
  ];
  return { available: true, flights };
}

// ============================================================
// TRAIN DATA
// ============================================================
const majorStations = {
  agra: "AGC - Agra Cantt",
  goa: "MAO - Madgaon Jn",
  jaipur: "JP - Jaipur Jn",
  kerala: "ERS - Ernakulam Jn",
  varanasi: "BSB - Varanasi Jn",
  tirupati: "TPTY - Tirupati",
  ellora: "AWB - Aurangabad",
  hampi: "HPT - Hospet Jn",
  darjeeling: "NJP - New Jalpaiguri",
  mysore: "MYS - Mysore Jn",
  rishikesh: "RKSH - Rishikesh",
  amritsar: "ASR - Amritsar Jn",
  udaipur: "UDZ - Udaipur City",
  shimla: "SML - Shimla",
  delhi: "NDLS - New Delhi",
  manali: "CHMR - Chandigarh (nearest)",
  mahabaleshwar: "PUNE - Pune Jn (nearest)",
  kodaikanal: "KQ - Kodaikanal Road",
  cherrapunji: "GHY - Guwahati (nearest)",
  jaisalmer: "JSM - Jaisalmer",
  kolkata: "HWH - Howrah Jn",
  chennai: "MAS - Chennai Central",
  hyderabad: "SC - Secunderabad Jn",
  bengaluru: "SBC - Bengaluru City Jn",
  pune: "PUNE - Pune Jn",
  kochi: "ERS - Ernakulam Jn",
  srinagar: "JAMMU - Jammu Tawi (nearest)",
  puri: "PURI - Puri",
};

const trainNames = [
  "Rajdhani Express", "Shatabdi Express", "Vande Bharat Express",
  "Duronto Express", "Garib Rath Express", "Superfast Express"
];

function generateTrains(distKm, destName) {
  if (distKm < 30) {
    return { available: false, message: `${destName} is too close (${Math.round(distKm)} km) for long-distance trains. Use local transport.` };
  }
  const baseFare = Math.round(300 + distKm * 0.8);
  const trains = [
    { class: "Sleeper (SL)", price: `₹${baseFare.toLocaleString('en-IN')}`, trains: [trainNames[4], trainNames[5]], duration: `${Math.round(distKm / 55)}h`, frequency: "4-8 daily" },
    { class: "AC 3-Tier (3A)", price: `₹${Math.round(baseFare * 2.5).toLocaleString('en-IN')}`, trains: [trainNames[0], trainNames[5]], duration: `${Math.round(distKm / 60)}h`, frequency: "3-6 daily" },
    { class: "AC 2-Tier (2A)", price: `₹${Math.round(baseFare * 3.8).toLocaleString('en-IN')}`, trains: [trainNames[0], trainNames[3]], duration: `${Math.round(distKm / 65)}h`, frequency: "2-4 daily" },
    { class: "AC 1st Class (1A)", price: `₹${Math.round(baseFare * 6).toLocaleString('en-IN')}`, trains: [trainNames[0]], duration: `${Math.round(distKm / 65)}h`, frequency: "1-2 daily" },
  ];
  return { available: true, trains };
}

// ============================================================
// BUS DATA
// ============================================================
const busOperators = ["KSRTC", "MSRTC", "UPSRTC", "RSRTC", "VRL Travels", "SRS Travels", "Orange Tours", "Neeta Travels", "Paulo Travels", "RedBus Select"];

function generateBuses(distKm, destName) {
  if (distKm > 1200) {
    return { available: false, message: `${destName} is ${Math.round(distKm)} km away — bus travel is not recommended for distances over 1200 km. Consider flights or trains.` };
  }
  if (distKm < 20) {
    return { available: false, message: `${destName} is only ${Math.round(distKm)} km away. Use local auto/taxi services.` };
  }
  const baseFare = Math.round(200 + distKm * 0.9);
  const buses = [
    { class: "Ordinary / Non-AC", price: `₹${baseFare.toLocaleString('en-IN')}`, operators: [busOperators[0], busOperators[1]], duration: `${Math.round(distKm / 40)}h`, frequency: "Frequent" },
    { class: "AC Seater", price: `₹${Math.round(baseFare * 1.8).toLocaleString('en-IN')}`, operators: [busOperators[4], busOperators[5]], duration: `${Math.round(distKm / 50)}h`, frequency: "4-8 daily" },
    { class: "AC Sleeper", price: `₹${Math.round(baseFare * 2.5).toLocaleString('en-IN')}`, operators: [busOperators[7], busOperators[8]], duration: `${Math.round(distKm / 50)}h`, frequency: "2-4 daily (night)" },
    { class: "Volvo Multi-Axle", price: `₹${Math.round(baseFare * 3.2).toLocaleString('en-IN')}`, operators: [busOperators[9], busOperators[6]], duration: `${Math.round(distKm / 55)}h`, frequency: "1-3 daily" },
  ];
  return { available: true, buses };
}

// ============================================================
// COMPONENT
// ============================================================
const TravelSearch = ({ place, userLocation }) => {
  const [activeTab, setActiveTab] = useState('flight');

  const distKm = useMemo(() => {
    if (!userLocation || !place) return null;
    return getDistanceKm(userLocation[0], userLocation[1], place.coordinates[0], place.coordinates[1]);
  }, [userLocation, place]);

  const tabs = [
    { id: 'flight', label: 'Flights', icon: Plane },
    { id: 'train', label: 'Trains', icon: Train },
    { id: 'road', label: 'Buses', icon: Bus },
  ];

  if (!place) return null;

  const renderNoLocation = () => (
    <div className="travel-no-location">
      <MapPin size={24} />
      <p>Enable location access to see travel options from your current location to <strong>{place.name}</strong>.</p>
    </div>
  );

  const renderUnavailable = (message) => (
    <div className="travel-unavailable">
      <p>{message}</p>
    </div>
  );

  const renderFlights = () => {
    if (!distKm) return renderNoLocation();
    const data = generateFlights(distKm, place.name);
    if (!data.available) return renderUnavailable(data.message);

    const airport = majorAirports[place.id];
    return (
      <div className="travel-results">
        {airport && (
          <div className="travel-airport-info">
            <MapPin size={14} />
            <span>Nearest Airport: <strong>{airport.code}</strong> — {airport.name}</span>
          </div>
        )}
        <div className="travel-distance-badge">
          <span>Distance: ~{Math.round(distKm)} km from your location</span>
        </div>
        <div className="fare-cards">
          {data.flights.map((f, idx) => (
            <div key={idx} className={`fare-card ${idx === 0 ? 'best-value' : ''}`}>
              {idx === 0 && <div className="fare-tag">Best Value</div>}
              <div className="fare-class">{f.class}</div>
              <div className="fare-price">{f.price}</div>
              <div className="fare-meta">
                <span><Clock size={12} /> {f.duration}</span>
                <span>{f.frequency}</span>
              </div>
              <div className="fare-airlines">
                {f.airlines.map((a, i) => <span key={i} className="airline-chip">{a}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTrains = () => {
    if (!distKm) return renderNoLocation();
    const data = generateTrains(distKm, place.name);
    if (!data.available) return renderUnavailable(data.message);

    const station = majorStations[place.id];
    return (
      <div className="travel-results">
        {station && (
          <div className="travel-airport-info">
            <MapPin size={14} />
            <span>Nearest Station: <strong>{station}</strong></span>
          </div>
        )}
        <div className="travel-distance-badge">
          <span>Distance: ~{Math.round(distKm)} km from your location</span>
        </div>
        <div className="fare-cards">
          {data.trains.map((t, idx) => (
            <div key={idx} className={`fare-card ${idx === 0 ? 'best-value' : ''}`}>
              {idx === 0 && <div className="fare-tag">Most Affordable</div>}
              <div className="fare-class">{t.class}</div>
              <div className="fare-price">{t.price}</div>
              <div className="fare-meta">
                <span><Clock size={12} /> ~{t.duration}</span>
                <span>{t.frequency}</span>
              </div>
              <div className="fare-airlines">
                {t.trains.map((tr, i) => <span key={i} className="airline-chip">{tr}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBuses = () => {
    if (!distKm) return renderNoLocation();
    const data = generateBuses(distKm, place.name);
    if (!data.available) return renderUnavailable(data.message);

    return (
      <div className="travel-results">
        <div className="travel-distance-badge">
          <span>Distance: ~{Math.round(distKm)} km from your location</span>
        </div>
        <div className="fare-cards">
          {data.buses.map((b, idx) => (
            <div key={idx} className={`fare-card ${idx === 0 ? 'best-value' : ''}`}>
              {idx === 0 && <div className="fare-tag">Budget Pick</div>}
              <div className="fare-class">{b.class}</div>
              <div className="fare-price">{b.price}</div>
              <div className="fare-meta">
                <span><Clock size={12} /> ~{b.duration}</span>
                <span>{b.frequency}</span>
              </div>
              <div className="fare-airlines">
                {b.operators.map((op, i) => <span key={i} className="airline-chip">{op}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="travel-search-container">
      <div className="travel-tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`travel-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="travel-content">
        {activeTab === 'flight' && renderFlights()}
        {activeTab === 'train' && renderTrains()}
        {activeTab === 'road' && renderBuses()}
      </div>
    </div>
  );
};

export default TravelSearch;
