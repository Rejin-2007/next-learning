import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import React from 'react'

const Header = async () => {
  
  const client = createClient()
  const setting = await client.getSingle("settings")
  return (
    <div>
      <Link href="/"><h1>{setting.data.title}</h1></Link>
      <nav>
        <ul>
          {setting.data.navitems.map((item, index) => (
            <li key={index}>
              <PrismicNextLink field={item.link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header