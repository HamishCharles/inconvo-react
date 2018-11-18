import React, { Component } from 'react';

class TeamDetails extends Component {
 
  render() {
    const {name} = this.props.team;
    return (
      <div className="team-detail">
        {name}
      </div>
    )
  }
}

export default TeamDetails;