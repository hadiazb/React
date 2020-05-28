import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Platzi Comf"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
          <h1>{this.props.firstName }<br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <p>{this.props.jobTitle}</p>
          <div>{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #platzimaster 
        </div>
      </div>
    )
  }

}

export default Badge;