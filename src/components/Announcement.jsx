import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color:teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: bold;
`

const Announcement = () => {
  return (
    <div>
      <Container>
      Don’t wait. The time will never be just right.
      </Container>
    </div>
  )
}

export default Announcement
