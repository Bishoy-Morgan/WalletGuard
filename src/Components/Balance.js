import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const trans = transactions.map((item) => item.amount )
    const balance = trans.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 >$ {balance}</h1>
        </>
    )
}

export default Balance
