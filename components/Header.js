import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #f2cf09;
  h1 {
    line-height: 1.1;
    padding: 1rem 0;
  }
`

const Header = ({ title }) => (
  <StyledHeader>
    <div className='col-full'>
      <h1>Hacker Next</h1>
      <nav>
        <ul>
          <Link href='/'>
            <a>
              <span className='site-title'>Home</span>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
</StyledHeader>
)

export default Header
