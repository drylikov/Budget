import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Footer = () => {
  const { state, setState } = useContext(MainContext)
  const { selectedPage } = state

  const changePage = selectedPage => {
    setState({ selectedPage })
  }

  const activeButtons = {
    transactions: selectedPage === 'transactions' || selectedPage === 'update' ? ' active' : '',
    create: selectedPage === 'create' ? ' active' : '',
    statistics: selectedPage === 'statistics' ? ' active' : ''
  }

  return (
    <footer>
      <div
        onClick={() => changePage('transactions')}
        className={`footerButton${activeButtons.transactions}`}
      >
        <i className='icon icon-format_list_bulleted' />
      </div>
      <div
        onClick={() => changePage('create')}
        className={`footerButton${activeButtons.create}`}
      >
        <i className='icon icon-add_circle' />
      </div>
      <div
        onClick={() => changePage('statistics')}
        className={`footerButton${activeButtons.statistics}`}
      >
        <i className='icon icon-bar_chart' />
      </div>
    </footer>
  )
}

export default Footer
