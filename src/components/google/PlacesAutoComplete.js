import { useEffect, useRef, useState } from "react";

const GOOGLE_API_KEY = "AIzaSyDsb32EFWC9jVcxoQe6chZ55HRU6ibVC6Y"; // Store in environment variables

const PlaceAutocompleteComponent = (props) => {
  const {setFieldValue} = props;
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


        const searchBox = new window.google.maps.places.SearchBox(inputSearch.current);

        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          setFieldValue('location', places[0].formatted_address);
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
    <>
    {/* Container for Google Places input */}
    <input name="location" ref={inputSearch} className="form-control bg-transparent text-white"/>

      {/* Display Selected Place Info */}
      {selectedPlace && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Place:</h3>
          <pre>{JSON.stringify(selectedPlace, null, 2)}</pre>
        </div>
      )}
    </>
      
  );
};

export default PlaceAutocompleteComponent;
