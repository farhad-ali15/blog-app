import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'


function Bank() {

    const amount = useSelector((state) => state)
   const [val,setVal]=useState(0)
    const dispatch = useDispatch()


    const handleDeposit = () => {
        dispatch({
            type: 'DEPOSIT',
            payload:  Number(val)
        })

    }
    const handleWithdraw = () => {
        dispatch({
            type: 'WITHDRAW',
            payload: Number(val)
        })

    }


    return (
        <div>
            <Header />
            <input type='text' onChange={(e)=>setVal(e.target.value)}></input>
            <button onClick={handleDeposit}>Deposit $10</button>
            <span className='ms-4 me-4'><strong>${amount}</strong></span>
            <button onClick={handleWithdraw}>Withdraw $10</button>

        </div>
    )
}

export default Bank