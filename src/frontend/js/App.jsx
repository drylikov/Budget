import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import '~/src/frontend/css/app.scss'
import Header from '~/src/frontend/js/components/Header'
import Footer from '~/src/frontend/js/components/Footer'
import Transactions from '~/src/frontend/js/components/Transactions'
import CreateAndUpdate from '~/src/frontend/js/components/CreateAndUpdate'
import Statistics from '~/src/frontend/js/components/Statistics'
import { MainContext, MainProvider } from '~/src/frontend/js/context/MainContext'

const Main = () => {
  const { state } = useContext(MainContext)
  const { selectedPage } = state
  const pages = {
    transactions: Transactions,
    create: CreateAndUpdate,
    update: CreateAndUpdate,
    statistics: Statistics
  }
  const Page = pages[selectedPage]

  return <Page />
}

const App = () => {
  return (
    <MainProvider>
      <Header />
      <Main />
      <Footer />
    </MainProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
