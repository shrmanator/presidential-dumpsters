'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string, details?: google.maps.places.PlaceResult) => void;
  onSelectionChange?: (wasSelected: boolean) => void;
  placeholder?: string;
  className?: string;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelectionChange,
  placeholder = "Enter delivery address",
  className
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (!inputRef.current) return;

      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'US' }
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          onChange(place.formatted_address, place);
          onSelectionChange?.(true);
        }
      });

      setIsLoaded(true);
    }).catch((error) => {
      console.error('Error loading Google Maps API:', error);
    });
  }, [onChange, onSelectionChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        onSelectionChange?.(false);
      }}
      placeholder={isLoaded ? placeholder : "Loading address lookup..."}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-70'}`}
      disabled={!isLoaded}
    />
  );
}