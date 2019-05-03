import Link from 'next/link'

const Header = () => (
    <nav>
      <ul>
        <Link href='/'>
          <a>
            <span className='site-title'>Hacker Next</span>
          </a>
        </Link>
      </ul>
    </nav>
)

export default Header
