import Head from 'next/head'
import Image from 'next/image'
import ProjectItem from '../src/components/Project'
import LinkSmoothScroll from '../src/components/LinkSmoothScroll'


export default function Home() {
  return (
    <div className="text-white">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <section className="relative h-section w-full bg-primary px-10 content-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative h-full">
          <header className="w-full">
            <ul className="flex text-xs md:text-sm font-bold py-4 space-x-4 justify-center md:space-x-10 md:justify-end font-mono">
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
                  <LinkSmoothScroll href="/#contact">
                    <a>CONTACT</a>
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
                <p className="text-6xl font-bold tracking-wider">Mariana</p>
                <p className="ml-24 text-6xl font-bold tracking-wider">Lopez</p>
              </span>
              <p className="text-lg">Fullstack developer</p>
              <a className="bg-secondary mr-auto cursor-pointer text-white rounded-sm px-10 py-2 text-xs font-bold">
                DOWNLOAD CV
              </a>
            </div>
            <div className="invisible sm:visible absolute right-0 -bottom-7">
              <Image 
              className="object-contain"
              src="/images/profile.png" width={300} height={500}/>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="h-section w-full bg-primary-light overflow-hidden">
        <div className="px-4 md:px-0 max-w-3xl mx-auto relative h-full pt-10">
          <h2 className="text-secondary font-bold">ABOUT ME</h2>
          <div class="flex pt-10 sm:pt-0">
            <div className="invisible md:visible sm:flex-1">
            </div>
            <div className="flex-1 flex space-y-7 flex-col">
              <h1 className="text-lg md:text-3xl font-bold">Why hire me for your next project ?</h1>
              <p className="text-sm md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s </p>
              <button className="text-xs hover:bg-secondary hover:text-white font-bold text-secondary border-2 border-secondary mr-auto rounded-sm px-3 py-1">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="w-full h-section bg-primary overflow-hidden">
        <div className="px-4 md:px-0 max-w-3xl mx-auto relative h-full pt-10">
          <h2 className="text-secondary font-bold">WORKS</h2>
          <div className="flex pt-5 space-x-7 overflow-x-auto pr-2">
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
          </div>
        </div>
      </section>
      <section id="skills" className="w-full h-section bg-primary-light overflow-h">
        <div className="px-4 md:px-0 max-w-3xl mx-auto relative h-full pt-10">
            <h2 className="text-secondary font-bold">SKILLS</h2>
        </div>
      </section>
    </div>
  )
}
