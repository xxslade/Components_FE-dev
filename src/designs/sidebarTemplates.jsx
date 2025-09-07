const sidebarTemplates = {

    SimpleSidebar: `
  <div className="flex h-screen">
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Profile</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Settings</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Logout</a>
    </aside>
    <main className="flex-1 p-10">
      <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
    </main>
  </div>`,
  
    SidebarWithHeader: `
  <div className="flex h-screen">
    <aside className="w-64 bg-blue-800 text-white flex flex-col p-6 space-y-4">
      <div className="text-3xl font-bold mb-6">MyApp</div>
      <a href="#" className="block hover:bg-blue-700 p-2 rounded">Home</a>
      <a href="#" className="block hover:bg-blue-700 p-2 rounded">Analytics</a>
      <a href="#" className="block hover:bg-blue-700 p-2 rounded">Reports</a>
      <a href="#" className="block hover:bg-blue-700 p-2 rounded">Logout</a>
    </aside>
    <main className="flex-1 p-10">
      <h2 className="text-2xl font-semibold">Dashboard Content</h2>
    </main>
  </div>`,
  
    IconSidebar: `
  <div className="flex h-screen">
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Navigation</h1>
      <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <span>🏠</span><span>Home</span>
      </a>
      <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <span>📊</span><span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <span>⚙️</span><span>Settings</span>
      </a>
      <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <span>🚪</span><span>Logout</span>
      </a>
    </aside>
    <main className="flex-1 p-10">
      <h2 className="text-2xl font-semibold">Main Content Area</h2>
    </main>
  </div>`,
  
    CleanWhiteSidebar: `
  <div className="flex h-screen">
    <aside className="w-64 bg-white text-gray-800 border-r p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">My Panel</h1>
      <a href="#" className="block hover:bg-gray-100 p-2 rounded">Home</a>
      <a href="#" className="block hover:bg-gray-100 p-2 rounded">Projects</a>
      <a href="#" className="block hover:bg-gray-100 p-2 rounded">Team</a>
      <a href="#" className="block hover:bg-gray-100 p-2 rounded">Settings</a>
    </aside>
    <main className="flex-1 p-10">
      <h2 className="text-2xl font-semibold">Project Overview</h2>
    </main>
  </div>`
  };
  
  export default sidebarTemplates;
  