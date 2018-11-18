import React, { Component } from 'react';

import './App.scss';
import Search from './components/Search/Search';
import TeamDetails from './components/Team/Details';
import TeamList from './components/Team/List';

import teams from './data/football.json';

class App extends Component {
  
  state = {
    filtered: teams.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0),
    teams: teams.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0),
    showTeamDetail: false,
    selectedTeam: null
  }

  constructor (props){
    super(props);
  
    this.searchChange = this.searchChange.bind(this);
    this.teamClick = this.teamClick.bind(this);
  
  }
  
  searchChange (event) {
    const search = event.target.value.toLowerCase();
    this.setState( { filtered: this.state.teams.filter(team => team.name.toLowerCase().startsWith(search)) });  
    if (search === "") {
      this.setState({ selectedTeam: null, showTeamDetail: false });
    }
  }

  teamClick (name, event) {
    const selectedTeam = this.state.teams.find(team => team.name === name );

    console.log(selectedTeam);
    this.setState({ selectedTeam: selectedTeam, showTeamDetail: true });
  }
  
  render() {
    const {showTeamDetail, selectedTeam} = this.state;
    // TODO: make this name consistent
    const filteredTeams = this.state.filtered;
    // TODO: break out detail into component
    return (
      <div className="App">
        <Search change={this.searchChange} />
        
          {showTeamDetail ? ( <TeamDetails team={selectedTeam}></TeamDetails> ) : ( <TeamList filteredTeams={filteredTeams} teamClick={this.teamClick}></TeamList> )}

      </div>
    );
  }
}

export default App;
