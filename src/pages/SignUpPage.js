
import {
    Form,
    FormGroup,
    Input,
    Label,
    FormText,
    Button,
  } from 'reactstrap';
  
  const Signup = () => {
    return (
        <div className="ts-form">
            <h1 className="mb-5">Sign Up</h1>
            <Form>
                <FormGroup>
                    <Label for="firstName">
                    First Name
                    </Label>
                    <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">
                    Last Name
                    </Label>
                    <Input
                    id="lastName"
                    name="lasttName"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    />
                </FormGroup>
                <FormGroup className="mt-2">
                    <Label for="password">
                    Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    type="password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">
                        Confirm Password
                    </Label>
                    <Input
                    id="confirmPassword"
                    name="password"
                    type="password"
                    />
                </FormGroup>
                
                <Button className="mt-3 float-end" color="primary">
                    Sign Up
                </Button>
                <div class="clearfix"></div>
            </Form>
            <p className="mt-4">Have an account? <a href="/login">Log in here</a> </p>
        </div>
        
    )
}

export default Signup;