import React, { Component, PureComponent } from "react";
import "../index.css";

export class TransactionFilter extends Component {
  render() {
    return (
      <div className="filter-list">
        <h5>{this.props.filterTitle}</h5>
        <ul>
          {this.props.filterList &&
            this.props.filterList.map((list, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={event => {
                      this.props.filterData(
                        list,
                        this.props.filterTitle,
                        event.target.checked
                      );
                    }}
                  />
                  {list}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
