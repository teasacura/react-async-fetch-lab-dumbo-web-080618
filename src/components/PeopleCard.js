import React, { Component } from 'react';

function PeopleCard(props){
    return (
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{props.person.name}</div>
            <div class="meta">Astronaut</div>
            <div class="description">
              {props.person.name} is stationed in {props.person.craft}.
            </div>
          </div>
        </div>
      </div>
      )
}

export default PeopleCard;
