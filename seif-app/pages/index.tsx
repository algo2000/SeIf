import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Counter } from '../features/counter/Counter'


const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

const IndexPage = () => {
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Title>abc</Title>
    <Circle />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Counter/>
  </Layout>
)}

export default IndexPage
