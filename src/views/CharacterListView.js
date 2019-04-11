import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.isLoading) {
      return(
        <h2>Loading</h2>
      )
    }
    console.log(this.props.characters);
    return (
      <div className="CharactersList_wrapper">
        {this.props.characters && (
          <CharacterList characters={this.props.characters.results} />
        )}
        <button onClick={this.props.getChars}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { getChars} )(CharacterListView);
