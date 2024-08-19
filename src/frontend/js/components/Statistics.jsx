import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Statistics = () => {
  const { state } = useContext(MainContext)
  const { transactions } = state

  let collectIncome = 0
  let collectSpending = 0
  for (const key in transactions) {
    const transaction = transactions[key]
    if (transaction.type === 'income') {
      collectIncome += transaction.price
    } else {
      collectSpending += transaction.price
    }
  }
  const income = collectIncome.toFixed(2)
  const spending = collectSpending.toFixed(2)
  const balance = (income - spending).toFixed(2)

  return (
    <main id='statistics'>
      <div className='statistic'>
        <div className='statisticTitle'>
          Balance
        </div>
        <div className='statisticPrice'>
          {balance} TL
        </div>
      </div>

      <div className='statistic'>
        <div className='statisticTitle'>
          Income
        </div>
        <div className='statisticPrice'>
          {income} TL
        </div>
      </div>

      <div className='statistic'>
        <div className='statisticTitle'>
          Spending
        </div>
        <div className='statisticPrice'>
          {spending} TL
        </div>
      </div>
    </main>
  )
}

export default Statistics
