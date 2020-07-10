//пробрасываем данные в транзакшн и возвращаем в преобразованном виде

import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {

    render() {
        return (<ul className="transactions">
            {this.props.transactions.map(operation =>
                <Transaction key={operation.id} {...operation} />)}
        </ul>)
    }
}


export default TransactionsList