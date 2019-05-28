/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../action';


const FilterTo = ({active, children, onClick}) => {
  return (
    <b>{children}</b>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTo);