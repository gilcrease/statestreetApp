import React, { PureComponent } from "react";
import '../index.css';

export class TrasactionDetails extends PureComponent {
  state={
    trasactionData: {}
  }
  componentDidMount(){
    this.setState({
      trasactionData: JSON.parse(this.props.params.data)
    })
  }
  render() {
    return (
      <div className='history-details'>
        <div>
          <h1>Trasaction {this.state.trasactionData.account}</h1>
          <hr />
        </div>
        <div>
          <p><b>Account No.:</b> {this.state.trasactionData.account}</p>
          <p><b>Account Name:</b> {this.state.trasactionData.accountName}</p>
          <p><b>Currency Code:</b> {this.state.trasactionData.currencyCode}</p>
          <p><b>Amount:</b> {this.state.trasactionData.amount}</p>
          <p className='text-capitalize'><b>Transaction Type:</b> {this.state.trasactionData.transactionType}</p>
        </div>
      </div>
    );
  }
}
