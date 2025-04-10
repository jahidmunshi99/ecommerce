import React from 'react'
import SectionTitle from '../../../SharedComponent/SectionTitle'
import PostCard from '../../../SharedComponent/PostCard'

const Blog = () => {
  return (
    <div className='py-5 bg-white'>
      <div className="container">
        <SectionTitle title={'From The Blog'}/>
        <div className='flex flex-col md:flex-row justify-between items-stretch gap-6 overflow-hidden'>
            <PostCard title={"sustainable living through cutting-edge prefabricated homes"} details={'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'} src={"https://serviceapi.spicezgold.com/download/1741759053899_5-2.jpg"}/>

            <PostCard title={"sustainable living through cutting-edge prefabricated homes"} details={'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'} src={"https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg"}/>

            <PostCard title={"sustainable living through cutting-edge prefabricated homes"} details={'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'} src={"https://serviceapi.spicezgold.com/download/1741758867669_7-6.jpg"}/>

            <PostCard title={"sustainable living through cutting-edge prefabricated homes"} details={'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'} src={"https://serviceapi.spicezgold.com/download/1742439558879_4-4.jpg"}/>
        </div>
      </div>
    </div>
  )
}

export default Blog
