import React, { Component } from 'react';
import missingLogo from '../../img/missing-logo.svg';

class TeamCard extends Component {

  imgMissing (e) {
    e.target.src = missingLogo;
  }
 
  render() {
    const {name, img, teamClick} = this.props;
    return (
      <div className="team" onClick={(e) => teamClick(name, e)}>
            <img src={img} alt={name + ' logo'} onError={this.imgMissing} onAbort={this.imgMissing}></img>
            <div className="overlay">
                <span className="team-name">{name}</span>
            </div>
      </div>
    )
  }
}

export default TeamCard;
