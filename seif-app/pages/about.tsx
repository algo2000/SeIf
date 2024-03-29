import Link from 'next/link'
import Layout from '../components/Layout'
import Touch from '../components/textbox/Touch'
import { Counter } from '../features/counter/Counter'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <div>
    <Touch/>
    <Counter/>
      <Link href="/">
        <a>test</a>
      </Link>
    </div>
  </Layout>
)

export default AboutPage
