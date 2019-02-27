import React, { Component } from 'react';

import LegendItem from './LegendItem.jsx'

class Legend extends Component {
    
    filterUniqueContentByType = (content) => {
      let unqiueItems = content.reduce((a, e) => {
        let pos = content.map(el => el.type).indexOf(e);
        console.log(pos)
        return a
      }, [])
    } 

    render() {
      this.filterUniqueContentByType(this.props.content)
        return (
            <div className="legend">
              <ul className="legend-list">
                {this.filterUniqueContentByType(this.props.content).map((e) => {
                  return <LegendItem type={e.type} color={e.color}/>
                })}
              </ul>
            </div>
        );
    }
}

export default Legend;
