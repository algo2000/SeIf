import React, { useState } from 'react'
import Layout from '../components/Layout'
import Input from '../components/textbox/Input'
import Touch from '../components/textbox/Touch'
import Textbox from '../components/textbox/Textbox'
import Challenge from '../components/com/Challenge'
import { Counter } from '../features/counter/Counter'
import { TestSlick } from '../features/slick/TestSlick'
import Sqaure from '../components/animation/ChangingSquare'

const IndexPage = () => {
  const [value, setValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  // useProhibitZoom();

  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <Input
      type="email"
      label="email"
      value={value}
      onChange={(val: string)=> setValue(val)}
    />
    <Input
      type="name"
      label="name"
      value={name}
      onChange={(val: string)=> setName(val)}
    />
    <Textbox/>
    <Sqaure/>
    <br/><br/><br/>
    <Counter/>
    <TestSlick/>
  </Layout>
)}

export default IndexPage