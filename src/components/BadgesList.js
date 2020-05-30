import React from 'react';
import "./styles/BadgesList.css";
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Not badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <img className="BadgesListItem__avatar" 
              src={badge.avatarUrl} 
              alt="Avatar"
              />
              <p >
                <span className="span">{badge.firstName} {badge.lastName}</span> <br/>
                {badge.jobTitle} <br/>
                @{badge.twitter}
              </p>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default BadgesList;