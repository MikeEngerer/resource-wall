import React, { Component } from 'react';

import LegendItem from './LegendItem.jsx'

class Legend extends Component {

    filterUniqueContentByType = (content) => {
      let types = {};
      let uniqueItems = [];
      content.forEach(e => {
        return types[e.type] = e.color
      });
      for (let item in types) {
        uniqueItems.push({[item]: types[item]})
      }
      return uniqueItems;
    }

    render() {
      this.filterUniqueContentByType(this.props.content)
        return (
            <div className="legend">
              <ul className="legend-list">
                {this.filterUniqueContentByType(this.props.content).map((e) => {
                  let key = Object.keys(e)
                  return <LegendItem type={key[0]} key={Math.random()} color={e[key[0]]}/>
                })}
              </ul>
            </div>
        );
    }
}

export default Legend;
