import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Counter } from '../features/counter/Counter'


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
  </Layout>
)}

export default IndexPage
