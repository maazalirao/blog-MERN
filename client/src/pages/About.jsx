import React from 'react';

const About = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to BlogApp, your platform for sharing stories and connecting with readers around the world. 
            We believe everyone has a story worth telling, and we're here to help you share yours.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To create a space where writers can freely express their ideas, share their knowledge, 
            and connect with an engaged community of readers and fellow writers.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <span className="text-gray-700">Easy-to-use writing platform</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <span className="text-gray-700">Engaged community of readers</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <span className="text-gray-700">Beautiful, responsive design</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <span className="text-gray-700">Seamless sharing capabilities</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're a seasoned writer or just starting out, BlogApp provides the tools and community you need to succeed.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg 
            transition duration-300 transform hover:scale-105">
            Sign Up Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default About; 