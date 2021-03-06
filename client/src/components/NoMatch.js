import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NoMatch = () => (
  <Header as='h2' textAlign='center'>
    Page Not Found Return
    <Link to='/'>Home</Link>
  </Header>
)

export default NoMatch;