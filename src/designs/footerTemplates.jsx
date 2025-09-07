const footerTemplates = {

    SimpleCenteredFooter: `
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2025 MyCompany. All rights reserved.</p>
  </footer>`,
  
    FooterWithLinks: `
  <footer className="bg-gray-900 text-white p-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p>&copy; 2025 MyCompany. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
        <a href="#" className="hover:text-blue-400">Terms of Service</a>
        <a href="#" className="hover:text-blue-400">Contact Us</a>
      </div>
    </div>
  </footer>`,
  
    FooterWithSocialIcons: `
  <footer className="bg-gray-800 text-white p-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p>&copy; 2025 SocialSite. All rights reserved.</p>
      <div className="flex space-x-6 text-xl">
        <a href="#" className="hover:text-blue-400">👍</a>
        <a href="#" className="hover:text-blue-400">🐦</a>
        <a href="#" className="hover:text-blue-400">📸</a>
      </div>
    </div>
  </footer>`,
  
    FooterWithGrid: `
  <footer className="bg-gray-900 text-white p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-2">MyBrand</h3>
        <p>Building awesome experiences for the web.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <p>Email: support@mybrand.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>
    <div className="text-center mt-8">&copy; 2025 MyBrand. All rights reserved.</div>
  </footer>`,
  
    MinimalWhiteFooter: `
  <footer className="bg-white border-t text-gray-700 p-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p>&copy; 2025 CleanDesign. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Support</a>
      </div>
    </div>
  </footer>`
  };
  
  export default footerTemplates;
  