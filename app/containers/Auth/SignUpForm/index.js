
import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form } from './styled';

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <Field name="email" component="input" type="text" placeholder="email address" />
      </div>
      <div>
        <Field name="password" component="input" type="text" placeholder="password" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'signUp',
})(SignUpForm);

SignUpForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};
