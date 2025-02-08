
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Label, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateCreateTournamentForms } from "../utils/tournaments/validateCreateTournamentForm";
import PlaceAutocompleteComponent from "../components/google/PlacesAutoComplete";

const CreateATournament = () => {


  return (
    <div className="ts-form">
      <h1 className="mb-5">Create A Tournament</h1>
      <Formik
        initialValues={{
          name: "",
          date: new Date(),
          location: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Form values:", values);
          resetForm();
        }}
        validate={validateCreateTournamentForms}
      >
        {({ values, setFieldValue }) => {

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
                <Label htmlFor="location">Address</Label>
                <PlaceAutocompleteComponent setFieldValue={setFieldValue}/>
                <ErrorMessage name="location">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Hidden Fields for City, State, ZIP */}
              <Field type="hidden" name="city" />
              <Field type="hidden" name="state" />
              <Field type="hidden" name="zip" />

              {/* Submit Button */}
              <FormGroup className="mt-3 primary-cta float-end" color="primary">
                <Button type="submit" color="primary">
                  Create Tournament
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateATournament;