import React, { Component } from 'react';
import './App.css';
const fetch = require('node-fetch');

let dataSource=`https://sheets.googleapis.com/v4/spreadsheets/15EjulSafzvsyoGKjuKMPCUKS4PHAU8q36h0r4125E6I/values/Sheet1!A1:D500?key=${process.env.REACT_APP_GKEY}`


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataMaster: [],
      filterTier: [1,2,3],
      filterName: '',
    };
   this.filterNameChange = this.filterNameChange.bind(this);
   this.filterTierChange = this.filterTierChange.bind(this);
   this.copyCommandText = this.copyCommandText.bind(this);
  }

  componentDidMount(){
    fetch(dataSource)
    .then(response => response.json())
    .then(r => {
      this.setState({
        dataMaster: r.values || [],
      })
    })
    .catch()
    }

filterNameChange(e) {
  this.setState({
    filterName: e.target.value
      });
  }
filterTierChange(e) {
  let tier = parseInt(e.target.value)
  let updateTiers = [...this.state.filterTier]
  if(updateTiers.indexOf(tier) >= 0){
    updateTiers.splice(updateTiers.indexOf(tier),1)
  }
  else{
    updateTiers.push(tier)
  }
  this.setState({
    filterTier: updateTiers
      });
  }
  copyCommandText(e) {
      if(e.target.value === 'Copied To Clipboard!') return;
      e.target.select();
      e.target.setSelectionRange(0, 99999); // mobile
      document.execCommand("Copy");

      let valueHolder = e.target.value
      let tempTarget = e.target
      e.target.value ='Copied To Clipboard!'
      setTimeout(()=> { tempTarget.value = valueHolder }, 2000);
  }

render() {
  let imgRegex = /(\d+)(?=\/)/
  let dataDisplay = [...this.state.dataMaster]
    .filter( (i,j) => {
    if(j > 0 && i[0] === this.state.dataMaster[j-1][0]) return false //Remove Duplicates
    for(let k = 0; k <= this.state.filterTier.length; k++){
      if(i[1] === `TIER ${this.state.filterTier[k]}`
          && i[0].toLowerCase().startsWith(this.state.filterName.toLowerCase())){
        return true
      }
    }
    return false;
    })
    .sort()
    .map( (i,j) => {
      let tier = i[1]
      let cost = tier === 'TIER 1' ? '6,000' : tier === 'TIER 2' ? '12,000' : '20,000'
      return(
      <div className='itemContainer' key={i[0]}>
        <div className='itemContainerBack'>
          <a href={i[3]} target='_blank' rel="noopener noreferrer" className='itemName'>{i[0]}</a>
          <div className='itemImage' style={ { backgroundImage: `url(${process.env.PUBLIC_URL + '/legit.jpg'})`  } } >
            <textarea rows="2" onClick={this.copyCommandText} value={`!redeem game${tier.replace('TIER ','')} ${i[0]}` } readOnly="readonly"/>
          </div>
          <div className='itemInfo'>
            <p className='itemTier'>{tier}</p>
            <p className='itemCost'>{cost} <i className="fas fa-puzzle-piece">'s</i></p>
          </div>
        </div>
        <div className='itemContainerFront'>
          <p className='itemName'>{i[0]}</p>
            <div className='itemImage' style={ { backgroundImage: `url(https://steamcdn-a.akamaihd.net/steam/apps/${imgRegex.exec(i[3])[0]}/header.jpg)`  } } />
          <div className='itemInfo'>
            <p className='itemTier'>{tier}</p>
            <p className='itemCost'>{cost} <i className="fas fa-puzzle-piece">'s</i></p>
          </div>
       </div>
     </div>
    )

    })

  return (
    <div id="appContainer">
      <h1 id="appHeader">
        CHARLIE'S STREAM STORE AVAILABILITY
      </h1>
      <h2 id="appSubHeader">EARN PIECES by watching & chatting on Twitch</h2>
      <nav id='filterControl'>
        <input type="text" placeholder="Filter By Name" value={this.state.filterName} onChange={this.filterNameChange} />
        <span>
        <label><input type="checkbox" value='1' name="tier" onChange={this.filterTierChange} checked={this.state.filterTier.some(i => i === 1)}/>Tier 1</label>
        <label><input type="checkbox" value='2' name="tier" onChange={this.filterTierChange} checked={this.state.filterTier.some(i => i === 2)}/>Tier 2</label>
        <label><input type="checkbox" value='3' name="tier" onChange={this.filterTierChange} checked={this.state.filterTier.some(i => i === 3)}/>Tier 3</label>
        </span>
      </nav>
      <content id="contentContainer">
          {!this.state.dataMaster.length ? <p>Loading...</p>
            : dataDisplay.length ? dataDisplay
            : <p>No Games Found With These Filters</p>}
      </content>
    </div>
  )};
};
