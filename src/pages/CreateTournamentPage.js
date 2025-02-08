
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
          tournamantType: "",
          playoffType: "",
          playoffBracketNumber: "",
          prizes: false,
          additionalNotes: ""
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
              <FormGroup className="mt-5">
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
              <FormGroup className="mt-5">
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
              <FormGroup className="mt-5">
                <Label htmlFor="location">Address</Label>
                <PlaceAutocompleteComponent setFieldValue={setFieldValue}/>
                <ErrorMessage name="location">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="tournamentType">Tournament Type</Label>
                <Field name="tournamentType" className="form-control bg-transparent text-white" placeholder="Example: 3V3, BYO4 etc."/>
                <ErrorMessage name="tournamentType">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="playoffType">Playoff Type</Label>
                <Field name="playoffType" as="select" className="form-control bg-transparent text-white">
                  <option value="">Select Type</option>
                  <option value="single">Single Elimination</option>
                  <option value="double">Double Elimination</option>
                </Field>
                <ErrorMessage name="playoffType">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="playoffBracketNumber">How many playoff brackets?</Label>
                <Field name="playoffBracketNumber" className="form-control bg-transparent text-white"/>
                <ErrorMessage name="playoffBracketNumber">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <label className="form-prizes">
                    <div id="prizes" className="form-label">Will there Be Prizes</div>
                    <div role="group" aria-labelledby="prizes">
                        <label className="form-prizes-yes">
                            <Field type="radio" name="prizes" value={true} checked={values.prizes === true} onChange={() => setFieldValue("prizes", true)}/>
                                <span>Yes</span>
                        </label>
                        <label>
                            <Field type="radio" name="prizes" value={false} checked={values.prizes === false} onChange={() => setFieldValue("prizes", false)}/>
                            <span>No</span>
                        </label>
                    </div>
                </label>

              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="additionalNotes">Additional Notes:</Label>
                <Field name="additionalNotes" component="textarea" className="form-control bg-transparent text-white" placeholder="Example: parking instructions, notes, etc."/>
                <ErrorMessage name="additionalNotes">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>
              {/* Submit Button */}
              <FormGroup className="mt-3 float-end" color="primary">
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