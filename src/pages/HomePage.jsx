import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 ">
            Explore & Learn UI Design with Live Code
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            A playground for beginners and creators to experiment with HTML components,
            buttons, cards, and more — right from your browser.
          </p>
          <Link
            to="/buttons"
            className="bg-yellow-600 hover:bg-grey-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Get Started with Buttons
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-800 py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Interactive Editor</h3>
            <p className="text-gray-300 text-sm">Write and preview HTML in real-time. Instant feedback, no setup required.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Curated Templates</h3>
            <p className="text-gray-300 text-sm">Start with handpicked UI patterns like buttons, cards, navbars and more.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
            <p className="text-gray-300 text-sm">Understand how design works by experimenting directly in code.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        Made with ♥ by Learners • © 2025 DesignPlayground
      </footer>
    </div>
  );
};

export default HomePage;
