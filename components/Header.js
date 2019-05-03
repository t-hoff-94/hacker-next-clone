import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #f2cf09;
`

const Header = ({ title }) => (
  <StyledHeader>
    <div className='col-full'>
      <h1>{title}</h1>
      <nav>
        <ul>
          <Link href='/'>
            <a>
              <span className='site-title'>Hacker Next</span>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
</StyledHeader>
)

export default Header
