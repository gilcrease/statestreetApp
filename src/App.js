import React, { Component } from "react";
import { TransactionHistory } from "./components/transactionList";
import { TransactionFilter } from "./components/filterList";
import transactionData from "./data.json";
import "./index.css";

const filterAccountName = [
  "Savings Account",
  "Checking Account",
  "Auto Loan Account",
  "Credit Card Account",
  "Investment Account",
  "Personal Loan Account",
  "Money Market Account",
  "Home Loan Account"
];

const filterTranactionType = ["Deposit", "Withdrawal", "Invoice", "Payment"];

class App extends Component {
  state = {
    transactionData: []
  };
  multiselectfilter = {};
  accountNameFilter =[];
  transactionTypeFilter = [];
  componentDidMount() {
    this.setState({
      transactionData: transactionData.transactions
    });
  }
  filterData = (list, filterName, checked) => {
    let fType = "";
    switch (filterName) {
      case "Account Name":
        fType = "accountName";
        break;
      case "Transaction Type":
        fType = "transactionType";
        break;
    }
    if(checked){
      if(fType === 'accountName'){
        this.accountNameFilter.push(list.toLowerCase())
      } else {
        this.transactionTypeFilter.push(list.toLowerCase())
      }
    } else {
      if(fType === 'accountName'){
        let val = this.accountNameFilter.indexOf(list.toLowerCase());
        this.accountNameFilter.splice(val, 1);
      } else {
        let val = this.transactionTypeFilter.indexOf(list.toLowerCase());
        this.transactionTypeFilter.splice(val, 1);
      }
    }
    let data = null;
    if (list) {
      data = this.filterTransaction(this.accountNameFilter, this.transactionTypeFilter, transactionData.transactions);
      this.setState({ transactionData: data });
    } else {
      this.setState({ transactionData: transactionData.transactions });
    }
  };

  filterTransaction(accountNameFilter, transactionTypeFilter, arrayData) {
    const data = arrayData.filter(element => {
      if(accountNameFilter.length && transactionTypeFilter.length){
        return accountNameFilter.indexOf(element.accountName.toLowerCase()) > -1 && transactionTypeFilter.indexOf(element.transactionType.toLowerCase()) > -1
      } else if (accountNameFilter.length){
        return accountNameFilter.indexOf(element.accountName.toLowerCase()) > -1
      } else if (transactionTypeFilter.length){
        return transactionTypeFilter.indexOf(element.transactionType.toLowerCase()) > -1
      } else {
        return element
      }
    })
    return data
  }
  render() {
    return (
      <div className="main-container">
        <h1>My Transactions</h1>
        <hr />
        <div className="main-screen-transaction">
          <div className="transaction-list-left">
            <h3>Filter</h3>
            <div>
              <TransactionFilter
                filterTitle={"Account Name"}
                filterList={filterAccountName}
                filterData={this.filterData}
              />
            </div>
            <div>
              <TransactionFilter
                filterTitle={"Transaction Type"}
                filterList={filterTranactionType}
                filterData={this.filterData}
              />
            </div>
          </div>
          <div className="transacion-list-right">
            <TransactionHistory data={this.state.transactionData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
