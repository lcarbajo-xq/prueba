import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchEntities } from '../../action/index';
import * as actions from '../../action/index';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit')
    this.props.actions.searchAsyncEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
