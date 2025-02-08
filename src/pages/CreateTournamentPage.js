import { useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Label, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateCreateTournamentForms } from "../utils/tournaments/validateCreateTournamentForm";
import PlaceAutocompleteComponent from "../components/google/PlacesAutoComplete";

// ✅ Google API Key (Use Environment Variables in Production)
const GOOGLE_API_KEY = "AIzaSyDsb32EFWC9jVcxoQe6chZ55HRU6ibVC6Y"; // Replace with your actual API key

const CreateATournament = () => {
  const autocompleteRef = useRef(null); // Input field reference
  const autocompleteInstance = useRef(null); // Google Autocomplete instance
  let setFieldValueRef = useRef(null); // Formik's setFieldValue reference
  let infoWindow;
  // ✅ Load Google Places API **Once** on Component Mount
  useEffect(() => {
    
    // const loadGoogleMapsScript = () => {
    //   if (window.google && window.google.maps) {
    //     initializeAutocomplete();
    //     return;
    //   }

    //   const script = document.createElement("script");
    //   script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    //   script.async = true;
    //   script.defer = true;
    //   script.onload = initializeAutocomplete;
    //   document.body.appendChild(script);
    // };


    // const initializeAutocomplete = () => {
    //   if (!autocompleteRef.current || autocompleteInstance.current) return;

    //   autocompleteInstance.current = new window.google.maps.places.Autocomplete(
    //     autocompleteRef.current,
    //     { types: ["geocode"] } // Suggests addresses
    //   );

    //   autocompleteInstance.id = "place-autocomplete-input";

    //   autocompleteInstance.current.addListener("place_changed", async ({ place }) => {
    //     console.log('%csrc/pages/CreateTournamentPage.js:45 place', 'color: #007acc;', place);
    //     await place.fetchFields({
    //         fields: ["displayName", "formattedAddress", "location"],
    //       });
    //   });
    // };

    // loadGoogleMapsScript();
  }, []);

  return (
    <div className="ts-form">
      <h1 className="mb-5">Create A Tournament</h1>
      <Formik
        initialValues={{
          name: "",
          date: new Date(),
          time: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Form values:", values);
          resetForm();
        }}
        
      >
        {({ values, setFieldValue }) => {
          // ✅ Store setFieldValue in ref so Google Autocomplete can use it
          setFieldValueRef.current = setFieldValue;

          return (
            <Form>
              {/* Tournament Name */}
              <FormGroup>
                <Label htmlFor="name">Tournament Name</Label>
                <Field name="name" className="form-control bg-transparent text-white" />
                <ErrorMessage name="name">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Date Picker */}
              <FormGroup>
                <Label htmlFor="date">Date</Label>
                <DatePicker
                  showIcon
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  className="form-control bg-transparent text-white"
                />
                <ErrorMessage name="date">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Time Selection */}
              <FormGroup>
                <Label htmlFor="time">Start Time</Label>
                <Field name="time" as="select" className="form-control bg-transparent text-white">
                  <option value="">Select Time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                </Field>
                <ErrorMessage name="time">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Google Places Autocomplete Input */}
              <FormGroup>
                <Label htmlFor="address">Address</Label>
                <PlaceAutocompleteComponent/>
                <ErrorMessage name="address">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Hidden Fields for City, State, ZIP */}
              <Field type="hidden" name="city" />
              <Field type="hidden" name="state" />
              <Field type="hidden" name="zip" />

              {/* Submit Button */}
              <FormGroup className="mt-3 float-end" color="primary">
                <Button type="submit" color="primary">
                  Create Tournament
                </Button>
              </FormGroup>
              <div className="clearfix"></div>
              <p className="mt-4">
                Don't have an account? <a href="/sign-up">Sign up here</a>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateATournament;