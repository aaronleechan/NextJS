import Head from 'next/head'
import {RegularList,BoxList} from '../common'
import {pageList} from '../data/pageList'

const LeftCompnent  = () =>{
  return <div><h1> Left</h1></div>
}

const Rightcomponent = () =>{
  return <div><h1> Right </h1></div>
}

export default function Home() {

  return (
    <div>
      <h1>This is Demo Practice</h1>
      <RegularList 
        items={pageList}
        resourceName="list" 
        itemComponent={BoxList}
      />
    </div>

  )
}
