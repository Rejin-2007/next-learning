import React from 'react'
import { createClient } from '@/prismicio'
import Link from 'next/link'
import { PrismicNextLink } from '@prismicio/next'

const Footer = async () => {

    const client = createClient()
    const setting = await client.getSingle("settings")
    return (
        <footer>
            <Link href="/"><h1>{setting.data.title}</h1></Link>
            <p>&copy; {new Date().getFullYear()}&nbsp;{setting.data.title}</p>
            <ul>
                {setting.data.navitems.map((item, index) => (
                    <li key={index}>
                        <PrismicNextLink field={item.link} />
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer