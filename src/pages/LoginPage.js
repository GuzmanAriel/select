
import {
    Form,
    FormGroup,
    Input,
    Label,
    FormText,
    Button,
  } from 'reactstrap';
  
  const Login = () => {
    return (
        <div className="ts-form">
            <h1 className="mb-5">Log In</h1>
            <Form>
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
            
            <Button className="mt-3 float-end" color="primary">
                Log In
            </Button>
            <div class="clearfix"></div>
            </Form>
            <p className="mt-4">Don't have an account? <a href="/sign-up">Sign up here</a> </p>
        </div>
        
    )
}

export default Login;