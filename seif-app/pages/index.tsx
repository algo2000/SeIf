import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Input from '../components/textbox/Input'
import Textbox from '../components/textbox/Textbox'
import { Counter } from '../features/counter/Counter'
import { TestSlick } from '../features/slick/TestSlick'

const IndexPage = () => {
  const [value, setValue] = useState<string>("");
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <Input
      type="email"
      label="email"
      value={value}
      onChange={(val: string)=> setValue(val)}
    />
    <Textbox/>
    <br/><br/><br/>
    <Counter/>
    <TestSlick/>
  </Layout>
)}

export default IndexPage
