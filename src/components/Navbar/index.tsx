import Image from 'next/image'
import Link from 'next/link'
import CartIcon from '../../assets/images/icon-cart.svg'
import Avatar from '../../assets/images/image-avatar.png'
import Logo from '../../assets/images/logo.svg'

export function Navbar() {
  return (
    <header className='w-full h-28 flex items-center justify-center'>
      <nav className='w-[85%] h-full flex items-center justify-between border-b-[1px] border-grayish-blue mx-auto'>
        <div className='flex items-center justify-center gap-10'>
          <Link href={'/'}>
            <Image src={Logo} width={138} height={20} alt='Sneakers' />
          </Link>
          <ul className='h-5 flex gap-10'>
            <li>
              <Link
                className='text-dark-grayish-blue transition-colors hover:text-very-dark-blue'
                href='#'
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                className='text-dark-grayish-blue transition-colors hover:text-very-dark-blue'
                href='#'
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className='text-dark-grayish-blue transition-colors hover:text-very-dark-blue'
                href='#'
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className='text-dark-grayish-blue transition-colors hover:text-very-dark-blue'
                href='#'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='text-dark-grayish-blue transition-colors hover:text-very-dark-blue'
                href='#'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-10'>
          <button className='cursor-pointer'>
            <Image src={CartIcon} alt='Cart Icon' width={22} height={20} />
          </button>
          <Image
            src={Avatar}
            alt='Avatar'
            width={100}
            height={100}
            className='rounded-full w-10 h-10 cursor-pointer'
          />
        </div>
      </nav>
    </header>
  )
}
