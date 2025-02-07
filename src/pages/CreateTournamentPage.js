
import {
    FormGroup,
    Label,
    Button,
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateCreateTournamentForms } from '../utils/tournaments/validateCreateTournamentForm';

const CreateATournament = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <div className="ts-form">
            <h1 className="mb-5">Create A Tournament</h1>
            <Formik
                initialValues={{
                    name: '',
                    date: new Date(), // Initialize with today's date
                    time: '',
                }}
                onSubmit={handleSubmit}
               
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <FormGroup>
                            <Label htmlFor='name'>Tournament Name</Label>
                            <Field name="name" className='form-control bg-transparent text-white' />
                            <ErrorMessage name="name">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        {/* Date Picker */}
                        <FormGroup>
                            <Label htmlFor='date'>Date</Label>
                            <DatePicker
                                showIcon
                                selected={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                                className="form-control bg-transparent text-white"
                            />
                            <ErrorMessage name="date">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        {/* Time Selection */}
                        <FormGroup>
                            <Label htmlFor='time'>Start Time</Label>
                            <Field name="time" as="select" className='form-control bg-transparent text-white'>
                                <option value="">Select Time</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                            </Field>
                            <ErrorMessage name="time">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        {/* Location TODO: Needs to connect with Google Places*/}
                        <FormGroup>
                            <Label htmlFor='location'>Tournament Location</Label>
                            <Field name="location" className='form-control bg-transparent text-white'/>
                            <ErrorMessage name="time">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                         {/* Location TODO: Needs to connect with Google Places*/}
                         <FormGroup>
                            <Label htmlFor='tournament-type'>Tournament Type</Label>
                            <Field name="tournament-type" className='form-control bg-transparent text-white'/>
                            <ErrorMessage name="tournament-type">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        


                        {/* Playoff Type */}
                        <FormGroup>
                            <Label htmlFor='playoff-type'>Playoff Type</Label>
                            <Field name="playoff-type" as="select" className='form-control bg-transparent text-white'>
                                <option value="">Playoff Type</option>
                                <option value="Single">Single Elimination</option>
                                <option value="Double">Double Elimination</option>
                            </Field>
                            <ErrorMessage name="playoff-type">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        {/* Submit Button */}
                        <FormGroup className="mt-3 float-end" color="primary">
                            <Button type='submit' color='primary'>
                                Create Tournament
                            </Button>
                        </FormGroup>
                        <div className="clearfix"></div>
                        <p className="mt-4">Don't have an account? <a href="/sign-up">Sign up here</a></p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateATournament;
