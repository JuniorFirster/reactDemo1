/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../action';


const FilterTo = ({active, children, activeFilter}) => {
  if (active) {
    return (<b>{children}</b>)
  } else {
    return (
      <a href="#" onClick={activeFilter}>{children}</a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    activeFilter: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTo);