import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen w-full">
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
      <nav className='navbar font-body'>
        <p>Main</p>
      </nav>
        {/* Hero Section */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-beige">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading leading-tight mb-4 text-gray-800">
              Hi, I'm Jacob Payne
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Full-Stack Developer • React Enthusiast • Problem Solver
            </p>
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              {/* Text Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">nGram Explorer</h3>
              <p className="text-sm text-gray-500 italic mb-4">
                React // Flask
              </p>
              <p className="text-gray-600 mb-4">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <a
                href="/ngram_analysis/"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              {/* Text Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">nGram Explorer</h3>
              <div className="flex flex-wrap gap- mb-4">
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  SQL Alchemy
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <a
                href="/ngram_analysis/"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Image */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jQQWdlJX_LTlOXL0" // ✅ replace with your actual image path
                alt="Ngram Explorer Screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              {/* Text Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">nGram Explorer</h3>
              <div className="flex flex-wrap gap- mb-4">
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="bg-accent text-black font-semibold text-sm px-3 py-1 rounded-full">
                  SQL Alchemy
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A word analyzer tool used to understand word frequencies and weights.
              </p>
              <a
                href="/ngram_analysis/"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
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
