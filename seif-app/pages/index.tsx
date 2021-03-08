import Link from 'next/link'
import Layout from '../components/Layout'
import { Counter } from '../features/counter/Counter'

const IndexPage = () => {
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Counter/>
  </Layout>
)}

export default IndexPage
