import { useEffect, useRef, useState } from "react";

const GOOGLE_API_KEY = "AIzaSyDsb32EFWC9jVcxoQe6chZ55HRU6ibVC6Y"; // Store in environment variables

const PlaceAutocompleteComponent = () => {
  const autocompleteContainerRef = useRef(null);
  const inputSearch = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    // ✅ Load Google Maps Places API dynamically
    const loadGoogleMaps = async () => {
      if (window.google && window.google.maps) {
        initializeAutocomplete();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeAutocomplete;
      document.body.appendChild(script);
    };

    // ✅ Initialize PlaceAutocompleteElement
    const initializeAutocomplete = async () => {
      try {
        // @ts-ignore
        await window.google.maps.importLibrary("places");
        // console.log('%csrc/components/google/PlacesAutoComplete.js:30 window.google.maps.places', 'color: #007acc;', window.google.maps.places);
        // console.log('%csrc/components/google/PlacesAutoComplete.js:30 window.google.maps.places', 'color: #007acc;', window.google.maps.places.SearchBox);
        // ✅ Create and append the PlaceAutocompleteElement
        // @ts-ignore
        // const placeAutocomplete = new window.google.maps.places.PlaceAutocompleteElement();


        const searchBox = new window.google.maps.places.SearchBox(inputSearch.current);

        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          if (places.length == 0) {
            return;
          }
        });    
      } catch (error) {
        console.error("Google Maps API failed to load:", error);
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <div>
      <h2>Google Places Autocomplete</h2>
      {/* Container for Google Places input */}
      <input ref={inputSearch}/>

      {/* Display Selected Place Info */}
      {selectedPlace && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Place:</h3>
          <pre>{JSON.stringify(selectedPlace, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PlaceAutocompleteComponent;
