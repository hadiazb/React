import React from 'react';
import header from '../images/badge-header.svg';
import "./styles/badgeNew.css";
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName="Hugo Andrés"
              lastName="Diáz Bernal"
              twitter="@ing_hadiazb"
              jobTitle="Frontend Developer"
              avatarUrl="https://pbs.twimg.com/profile_images/1212971850407567361/RT140sax_400x400.jpg"/>
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeNew;