import Link from 'next/link'

import { ButtonHTMLAttributes } from 'react'

type Props = {
  href: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, href, ...props }: Props) => {
  return (
    <Link href={href} passHref>
      <button
        className="transition duration-500 ease-in-out bg-pink-custom transform hover:scale-105 h-12 w-40 rounded-md text-sm text-white font-bold uppercase shadow-md"
        {...props}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
