export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your first Next.js application with Tailwind CSS and shadcn/ui components!
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto border border-gray-100">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white text-2xl font-bold">✨</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Getting Started
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is a simple Hello World page built with modern web technologies. 
              Edit the source code to start building your amazing application!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-200">
            <span className="text-sm font-medium text-gray-700">Built with Next.js</span>
          </div>
          <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-200">
            <span className="text-sm font-medium text-gray-700">Styled with Tailwind CSS</span>
          </div>
          <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-200">
            <span className="text-sm font-medium text-gray-700">UI with shadcn/ui</span>
          </div>
        </div>
      </div>
    </main>
  )
}