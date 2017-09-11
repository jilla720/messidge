
import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
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
