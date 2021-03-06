import styled from '@emotion/styled'
import React from 'react'
import Social from './social'
import Tech from './tech'

const BasicInfoStyles = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  min-height: 80vh;
  /* height: calc(100% - 100px); */
  text-align: left;

  h2 {
    text-align: center;
  }

  h1 > span {
    border-bottom: 3px solid var(--primary);
    transition: var(--transitionThreeMs);

    &:hover {
      border-bottom: 3px solid var(--coral);
    }
  }

  p {
    max-width: 50rem;
    line-height: 1.5;
    font-size: 22px;
  }
`

const BasicInfo: React.FC = () => (
  <BasicInfoStyles>
    <h1>
      Hello, I'm <span>René M.S.</span>
    </h1>
    <h2>Software engineer</h2>
    <p>
      I'm a software engineer who enjoys building useful things and learning new technologies. I
      enjoy working with React, Node, GraphQL and Python.
    </p>
    <Social />
    <Tech />
  </BasicInfoStyles>
)

export default BasicInfo
