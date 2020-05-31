import React from 'react';
import './styles/BadgesEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';
class BadgesEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null})
  
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false, form: data})
    } catch (error) {
      this.setState({ loading: false, error: error})
    } 
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null})
    try {
      await api.badges.update(this.state.form)
      this.setState({ loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error})
    }

  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgesEdit__hero">
          <img className="BadgesEdit__hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST-NAME'}
                lastName={this.state.form.lastName || 'LAST-NAME'}
                twitter={this.state.form.twitter ||'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://pbs.twimg.com/profile_images/1212971850407567361/RT140sax_400x400.jpg"
              />
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesEdit;

