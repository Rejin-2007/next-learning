import { createClient } from '@/prismicio'
import React from 'react'

const Header = async() => {
    const client = createClient()
      const setting = await client.getSingle("settings")
  return (
    <div>{setting.data.title}</div>
  )
}

export default Header