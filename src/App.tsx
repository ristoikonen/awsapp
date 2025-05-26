import './App.css'

function App() {


  return (
    <>

        <section className="bg-white py-12 px-6 md:px-16 lg:px-24 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-7xl lg:text-7xl font-black leading-tight mb-8">
                    <div className="text-red-600">.NET Aspire </div><div className="text-indigo-700">Semantic Kernel  </div><div class="text-gray-700">React</div>
                </h1>
            </div>
        </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <div className="text-orange-500 mb-8">
                        <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 00-1.05-9.95l-.65-.18a7.001 7.001 0 00-13.62-2.73 4 4 0 00-2.73 4.62 4 4 0 00-4.62 2.73 7.001 7.001 0 002.73 13.62 4 4 0 004.62-2.73"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10h.01M18 14h.01M18 18h.01"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-5 text-center">.Net Aspire orchestration</h3>
                    <p className="text-gray-700 text-center leading-relaxed text-lg">Cloud solution using AWS Amplify.</p>
                </div>

          <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="text-orange-500 mb-8">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.894.834 5.618 2.306 7.956A11.955 11.955 0 0112 21.056c2.894 0 5.618-.834 7.956-2.306A12.007 12.007 0 0021.056 12c0-2.894-.834-5.618-2.306-7.956z"></path>
                  </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-5 text-center">Future value calculator</h3>
              <p className="text-gray-700 text-center leading-relaxed text-lg">AWS Lambda function. First part of a Lambda finacial libarary</p>
          </div>
          
          </div>
          <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <button className="bg-purple-700 text-white hover:bg-purple-800 font-bold py-5 px-14 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75 text-lg">
                Explore Projects in GitHub
            </button>
          </div>

{/*     <footer className="bg-gray-900 text-gray-400 py-16 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h4 className="text-2xl font-bold text-white mb-6">Pragmatic coding tricks</h4>
                <p className="text-base leading-relaxed font-light">How to deal with preview libraries</p>
            </div>
            <div>
                <h4 className="text-2xl font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-base">
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Press</a></li>
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Legal</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-2xl font-semibold text-white mb-6">Connect</h4>
                <ul className="space-y-4 text-base">
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-12 text-sm font-light">
            &copy; 2025 Risto Ikonen. All rights reserved.
        </div>
    </footer>
 */}

<footer className=" text-center">

        <div className=" border-gray-800 mt-16 pt-12 text-m font-light">
            &copy; 2025 Risto Ikonen. All rights reserved.
        </div>

</footer>

            
    </>
  )
}

export default App
