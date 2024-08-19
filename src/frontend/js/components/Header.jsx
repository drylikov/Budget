import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Header = () => {
  const { state } = useContext(MainContext)
  const { selectedPage } = state
  const pages = {
    transactions: 'Transactions',
    create: 'Create',
    update: 'Update',
    statistics: 'Statistics'
  }
  const pageTitle = pages[selectedPage]

  return (
    <header>
      {pageTitle}
    </header>
  )
}

export default Header
