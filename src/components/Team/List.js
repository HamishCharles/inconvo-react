import React, { Component } from 'react';
import './List.scss';
import TeamCard from './Card';

class TeamList extends Component {
 
  render() {
    const {filteredTeams, teamClick} = this.props;
    return (
        <div className="team-list">
            {filteredTeams.map((team, idx) => {
            const {name, img} = team;
            return (<TeamCard key={idx} name={name} img={img} teamClick={teamClick}></TeamCard>);
            })}
        </div>
    )
  }
}

export default TeamList;
