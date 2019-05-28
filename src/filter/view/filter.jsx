import React from 'react';
import { filterDict } from '@config/dict';
import FilterTo from './filterTo';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="filter-contain">
        <FilterTo filter={filterDict.ALL}>{filterDict.ALL}</FilterTo>
        <FilterTo filter={filterDict.COMPLETED}>{filterDict.COMPLETED}</FilterTo>
        <FilterTo filter={filterDict.UNCOMPLETED}>{filterDict.UNCOMPLETED}</FilterTo>
      </div>
    )
  }
}

export default Filter;