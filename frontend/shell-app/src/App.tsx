import React from "react";
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-2">
            🎥 Surveillance System
          </h1>
          <p className="text-gray-600">Shell App - Module Federation Host</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Shell App! 🚀
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold">React 18 + TypeScript</h3>
                  <p className="text-gray-600 text-sm">
                    Modern React with type safety
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold">Webpack Module Federation</h3>
                  <p className="text-gray-600 text-sm">
                    Ready to load remote MFEs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold">Tailwind CSS</h3>
                  <p className="text-gray-600 text-sm">Utility-first styling</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-yellow-500 text-xl">⏳</span>
                <div>
                  <h3 className="font-semibold">Next Steps</h3>
                  <p className="text-gray-600 text-sm">
                    Task 6: Configure Module Federation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
