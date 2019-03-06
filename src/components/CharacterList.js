import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log(props);
  if(props.characters === undefined){
    return(
      <div>
        Loading Characters
      </div>
    )
  }
  return (
    <ul>
      {/* {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })} */}
    </ul>
  );
};

const stateToProps = state => {
  characters: state.characters
}

export default CharacterList;
