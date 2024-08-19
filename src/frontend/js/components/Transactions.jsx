import React, { useContext } from 'react'

import categories from '~/src/frontend/js/components/categories'
import { MainContext } from '~/src/frontend/js/context/MainContext'

const dailyTransactions_ = transactions => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dailyTransactions = {}
  for (const key in transactions) {
    const item = transactions[key]

    const getFullDate = new Date(item.createdAt * 1000)
    const getDate = getFullDate.getDate()
    const getMonth = monthNames[getFullDate.getMonth()]
    const getDay = dayNames[getFullDate.getDay()]
    const readableDate = `${getDay}, ${getMonth} ${getDate}`
    if (!Object.prototype.hasOwnProperty.call(dailyTransactions, readableDate)) {
      dailyTransactions[readableDate] = []
    }
    dailyTransactions[readableDate].push(item)
  }

  return dailyTransactions
}

const Transactions = () => {
  const { state, setState } = useContext(MainContext)
  const dailyTransactions = dailyTransactions_(state.transactions)

  const editTransaction = props => {
    const { transactionId } = props
    setState({
      selectedPage: 'update',
      selectedTransactionId: transactionId
    })
  }

  return (
    <main id='transactions'>
      {Object.keys(dailyTransactions).map((day, key1) => {
        const transactions = dailyTransactions[day]

        let balance = 0
        for (const key in transactions) {
          const transaction = transactions[key]
          balance = transaction.type === 'income'
            ? balance + transaction.price
            : balance - transaction.price
        }
        balance = balance.toFixed(2)

        return (
          <div
            key={key1}
            className='dayWrapper'
          >
            <div className='daySection'>
              <div className='day'>
                {day}
              </div>
              <div className='balance'>
                {balance} TL
              </div>
            </div>

            <div className='transactions'>
              {transactions.map((transaction, key2) => {
                const transactionId = transaction.id
                const transactionPriceClassName1 = 'transactionPrice'
                const transactionPriceClassName2 = transaction.type
                const transactionPriceClassName = `${transactionPriceClassName1} ${transactionPriceClassName2}`
                const transactionCategory = categories[transaction.category]
                const transactionPrice1 = transaction.type === 'expense' ? '-' : ''
                const transactionPrice = `${transactionPrice1}${transaction.price}`

                return (
                  <div
                    key={key2}
                    className='transaction'
                    onClick={() => editTransaction({ transactionId })}
                  >
                    <div className='transactionCategory'>
                      {transactionCategory}
                    </div>

                    <div className={transactionPriceClassName}>
                      {transactionPrice} TL
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Transactions
