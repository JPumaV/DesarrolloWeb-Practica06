import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', job: '' };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm() {
    if (this.state.name && this.state.job) {
      this.props.onSubmit({ name: this.state.name, job: this.state.job });
      this.setState({ name: '', job: '' });
    }
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Job:
          <input type="text" name="job" value={this.state.job} onChange={this.handleChange} />
        </label>
        <input type="button" value="Add Character" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
