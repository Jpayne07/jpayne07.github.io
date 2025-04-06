import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileImage from './assets/ProfileImage.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen w-full max-w-[90%] mx-auto">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Jacob Payne</h2>
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Home</a>
            <a href="#projects" className="hover:bg-gray-700 px-2 py-1 rounded">Projects</a>
            <a href="#contact" className="hover:bg-gray-700 px-2 py-1 rounded">Contact</a>
          </nav>
        </div>
        <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()}</div>
      </aside> */}
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
      <nav className='navbar font-body font-semibold text-xl'>
        <p>Main</p>
      </nav>
        {/* Hero Section */}
        <section className="gap-x-20 gap-y-10 
                            grid 
                            md:grid-cols-6
                            grid-cols-1
                            grid-rows-1
                            md:grid-rows-3
                            
                            py-10 
                            px-8 
                            md:px-8 
                            lg:px-16 
                            bg-beige 
                            rounded-lg 
                            w-full 
                            content-even">

            <div className="md:col-span-3
                            text-left
                            bg-gray 
                            text-center 
                            rounded-lg">
            <p className='px-10 pt-5 pb-2 text-sm font-body font-semibold'>Linkedin: https://linkedin.com/jacobpayne0707</p>
            <p className='px-10 pb-5 pt-2 text-sm font-body font-semibold'>
            Github: https://github.com/Jpayne07
            </p>
          </div>
          <div className="self-center justify-self-center md:col-start-4 row-start-1 md:row-span-4 md:col-span-3 relative mix-blend-luminosity">
          <div class="absolute inset-0 rounded-full bg-gray w-40 h-40 lg:min-w-100 lg:min-h-100 md:min-w-75 md:min-h-75"></div>
          <img 
            src={ProfileImage}
            alt="Jacob smiling" 
            class="rounded-full object-cover mix-blend-luminosity relative self-center w-40 h-40 lg:min-w-100 lg:min-h-100 md:min-w-75 md:min-h-75"
          />
          </div>
        
          <div className="md:row-start-2 md:col-span-3
                          md:row-span-2 text-left row-span-1 
                          bg-gray max-w-4xl mx-auto 
                          text-center rounded-lg row-start-2">

          <h2 className="font-body font-bold 
          lg:text-2xl md:text-xl
          md:px-10 px-5 pt-10 ">
            I’M JACOB, A FULLSTACK ENGINEER WITH A BACKGROUND IN PERFORMANCE MARKETING
          </h2>

          <p className="font-body p-10 pt-5 md:px-10 px-5 text-base md:text-sm md:row-start-2 ">I am a full-stack software engineer with experience building 
            sites I am a full-stack software engineer with experience building sites 
            I am a full-stack software engineer with experience building sites 
            I am a full-stack software engineer with experience building sites 
          </p>
          </div>
          
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 xl:px-24 bg-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-beige p-6 rounded-lg shadow-md">
            <h3 className="text-3xl md:text-2xl font-heading font-bold mb-2 text-gray text-left pt-10">nGram Explorer</h3>
              <p className="text-sm md:text-xs text-gray text-left font-body mb-2">
                React // Flask
              </p>
              <hr className='border-plum border-2 mb-10'></hr>
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray md:text-sm mb-4 text-left font-body">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-plum text-white py-2 px-4 rounded-lg font-body shadow">
                View Demo
              </button>
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-beige border-plum border-solid border-5 text-plum  py-2 px-4 rounded-lg font-body shadow">
              
                Source
              </button>
              </div>
            </div>
            <div className="bg-gray p-6 rounded-lg shadow-md">
            <h3 className="text-3xl md:text-2xl font-heading font-bold mb-2 text-white text-left pt-10">nGram Explorer</h3>
              <p className="text-sm md:text-xs text-white text-left font-body mb-2">
                React // Flask
              </p>
              <hr className='border-plum border-2 mb-10'></hr>
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-white md:text-sm mb-4 text-left font-body">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-plum text-white py-2 px-4 rounded-lg font-body shadow">
                View Demo
              </button>
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-beige border-plum border-solid border-5 text-plum py-2 px-4 rounded-lg font-body shadow">
              
                Source
              </button>
              </div>
            </div>
            <div className="bg-beige p-6 rounded-lg shadow-md">
            <h3 className="text-3xl md:text-2xl font-heading font-bold mb-2 text-gray text-left pt-10">nGram Explorer</h3>
              <p className="text-sm md:text-xs text-gray text-left font-body mb-2">
                React // Flask
              </p>
              <hr className='border-plum border-2 mb-10'></hr>
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray md:text-sm mb-4 text-left font-body">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-plum text-white py-2 px-4 rounded-lg font-body shadow">
                View Demo
              </button>
              <button
                href="/ngram_analysis/"
                className="flex-1 text-center md:text-sm bg-beige border-plum border-solid border-5 text-plum  py-2 px-4 rounded-lg font-body shadow">
              
                Source
              </button>
              </div>
            </div>

            
            

          </div>

        </section>
        

        {/* Contact Section */}
        <section id="contact" className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-gray-600">Email: jacob@example.com</p>
        </section>
      </main>
    </div>
  )
}

export default App
