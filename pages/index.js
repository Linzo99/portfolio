import Head from 'next/head'
import Image from 'next/image'
import ProjectItem from '../src/components/Project'
import SocialItem from '../src/components/SocialItem'
import Skills from '../src/components/Skills'
import data from '../public/data.json'

import LinkSmoothScroll from '../src/components/LinkSmoothScroll'
import { useState } from 'react'
import ContactModal from '../src/components/ContactModal'


export default function Home({ data }) {
  const { main, portfolio } = data
  const [show, setShow] = useState(false)

  return (
    <div className="text-white">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <section className="relative h-section w-full bg-primary px-10 content-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative h-full">
          <header className="w-full">
            <ul className="flex text-xs md:text-lg font-bold py-4 space-x-4 justify-center md:space-x-10 md:justify-end font-mono">
              <span className="relative group">
                <li className="hover:text-secondary cursor-pointer">
                  <LinkSmoothScroll href="/#about">
                    <a>ABOUT</a>
                  </LinkSmoothScroll>
                </li>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-lg transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-300"></span>
              </span>
              <span className="relative group">
                <li className="hover:text-secondary cursor-pointer">
                  <LinkSmoothScroll href="/#works">
                    <a>WORKS</a>
                  </LinkSmoothScroll></li>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-lg transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-300"></span>
              </span>
              <span className="relative group">
                <li className="hover:text-secondary cursor-pointer">
                  <LinkSmoothScroll href="/#skills">
                    <a>SKILLS</a>
                  </LinkSmoothScroll>
                </li>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-lg transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-300"></span>
              </span>
              <span className="relative group">
                <li className="hover:text-secondary cursor-pointer">
                  <LinkSmoothScroll href="/#contacts">
                    <a>CONTACTS</a>
                  </LinkSmoothScroll>
                </li>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-lg transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-300"></span>
              </span>
            </ul>
          </header>
          <div className="pt-40 flex">
            <div className="flex flex-col flex-1 space-y-4">
              <h2 className="text-secondary text-xl font-bold tracking-widest">Hello, I'm</h2>
              <span>
                <p className="text-6xl font-bold tracking-wider">{main.first_name}</p>
                <p className="ml-24 text-6xl font-bold tracking-wider">{main.last_name}</p>
              </span>
              <p className="text-lg italic tracking-wider">{main.occupation}</p>
              <a href="/cv.pdf" className="bg-secondary mr-auto cursor-pointer text-white rounded-sm px-10 py-2 text-xs font-bold">
                DOWNLOAD CV
              </a>
            </div>
            <div className="invisible sm:visible absolute right-0 -bottom-7">
              <Image 
              className="object-contain"
              src={`/images/${main.image}`} width={300} height={500}/>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="h-section w-full bg-primary-light overflow-hidden">
        <div className="px-4 md:px-2 lg:px-0 max-w-3xl mx-auto relative h-full pt-10">
          <h2 className="text-secondary font-bold">ABOUT ME</h2>
          <div className="flex pt-10 sm:pt-0">
            <div className="invisible md:visible sm:flex-1">
              <div></div>
            </div>
            <div className="flex-1 flex space-y-7 flex-col">
              <h1 className="text-xl md:text-3xl font-bold">Why hire me for your next project ?</h1>
              <p className="text-sm md:text-lg line-clamp-10">{ main.bio }</p>
              <button className="text-xs hover:bg-secondary hover:text-white font-bold text-secondary border-2 border-secondary mr-auto rounded-sm px-3 py-1">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="w-full h-section bg-primary overflow-hidden">
        <div className="px-4 md:px-2 lg:px-0 max-w-3xl mx-auto relative h-full pt-10">
          <span className="w-full flex justify-between items-center">
            <h2 className="text-secondary font-bold">WORKS</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-secondary animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <div className="flex pt-5 pb-2 space-x-7 overflow-x-auto pr-2 scrollbar-hide">
            { portfolio.projects.map((project, i)=>(
              <ProjectItem key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="w-full h-section bg-primary-light overflow-h">
        <div className="px-7 md:px-2 lg:px-0 w-full md:max-w-3xl mx-auto relative h-full pt-10">
            <h2 className="text-secondary font-bold">SKILLS</h2>
            <div className="flex pt-7 w-full">
              <Skills/>
            </div>
        </div>
      </section>
      <section id="contacts" className="relative w-full h-screen bg-primary overflow-h flex flex-col">
        <div className="w-full flex-1 px-4 md:px-2 lg:px-0 max-w-3xl mx-auto relative h-full pt-10">
            <h2 className="text-secondary font-bold">CONTACTS</h2>
            <div className="bg-primary-light px-2 py-10 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-7 rounded-md mt-5">
              { main.social.map((social, k)=>(
                <SocialItem key={k} social={social}/>
               )
              )}
            </div>
        </div>
        <div className="max-w-3xl mx-auto relative flex-1 flex justify-center items-center flex-col space-y-7">
            <h2 className="text-4xl font-bold tracking-wider">Let's Talk ?</h2>
            <button onClick={()=>setShow(true)} className="text-sm hover:bg-secondary hover:text-white font-bold text-secondary border-2 border-secondary rounded-sm px-4 py-2">CONTACT ME</button>
          <p className="absolute bottom-5 text-sm text-gray-700">@2021 linzo99 sallalioune@, esp</p>
        </div>
        <ContactModal onClose={()=>setShow(false)} show={show}/>
      </section>
      
    </div>
  )
}

export async function getStaticProps(){
  return {
    props:{
      data
    }
  }
}

