import React, { Component, PureComponent } from "react";
import { browserHistory } from "react-router";
import "../index.css";

const tableHeaders = [
  "ACCOUNT NO.",
  "ACCOUNT NAME",
  "CURRENCY",
  "AMOUNT",
  "TRANSACTION TYPE"
];

export class TransactionHistory extends PureComponent {
  navigateToHistory(data) {
    browserHistory.push(`/transactiondetail/${JSON.stringify(data)}`);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.map((data, index) => {
                return (
                  <tr key={index} className="transaction-table-row">
                    <td
                      className="account-link"
                      onClick={this.navigateToHistory.bind(this,data)}
                    >
                      {data.account}
                    </td>
                    <td>{data.accountName}</td>
                    <td>{data.currencyCode}</td>
                    <td>{data.amount}</td>
                    <td className="text-capitalize">{data.transactionType}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
