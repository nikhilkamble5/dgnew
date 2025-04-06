import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { MapPin, Map } from 'lucide-react';

const LocationCard = ({ location }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <Card className="card-hover h-full overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={location.image}
          alt={`${location.city} office`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
        <div className="flex items-start gap-2 text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
          <p>{location.address}</p>
        </div>
        
        {location.mapEmbed && (
          <div>
            <button 
              onClick={() => setShowMap(!showMap)} 
              className="flex items-center text-primary hover:text-primary/80 text-sm mb-3"
            >
              <Map className="h-4 w-4 mr-2" />
              {showMap ? 'Hide Map' : 'View Map'}
            </button>
            
            {showMap && (
              <div className="rounded-md overflow-hidden mt-3 border border-gray-200">
                <iframe 
                  src={location.mapEmbed} 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationCard;
