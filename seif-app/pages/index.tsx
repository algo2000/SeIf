import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Textbox from '../components/textbox/Textbox'
import { Counter } from '../features/counter/Counter'
import { TestSlick } from '../features/slick/TestSlick'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
const IndexPage = () => {
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Title>abc</Title>
    <Counter/>
    <TestSlick/>
    <TestSlick/>
    <Counter/>
    <Textbox/>
  </Layout>
)}

export default IndexPage
