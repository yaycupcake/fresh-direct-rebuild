import React, { useEffect } from 'react'
import { signOut } from '../../services/user'

const AdminSignOut = (props) => {
  useEffect(() => {
    const { history, clearUser, user } = props
    signOut(user)
      .then(() => clearUser(null))
      .finally(() => history.push('/admin'))
  }, [])

  return ''
}

export default AdminSignOut