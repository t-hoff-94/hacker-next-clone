import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 55px;
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

class Pagination extends React.Component {
  render() {
    const page = this.props.page;
    return (
      <PaginationStyles>
        <Link href={`/?page=${parseInt(page) - 1}`}>
          <a className='button' aria-disabled={page <= 1}>Prev</a>
        </Link>
        <Link href={`/?page=${parseInt(page) + 1}`}>
          <a className='button'>Next</a>
        </Link>
      </PaginationStyles>
    )
  }
}

export default Pagination
