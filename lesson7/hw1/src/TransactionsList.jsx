//пробрасываем данные в транзакшн и возвращаем в преобразованном виде

import React, { Component } from 'react';
import Transaction from './Transaction';


const TransactionsList=({transactions})=>{
    return (<ul className="transactions">
    {transactions.map(operation =>
    {console.log(operation)
    return <Transaction key={operation.id} {...operation} />})}
       
</ul>)
}

export default TransactionsList