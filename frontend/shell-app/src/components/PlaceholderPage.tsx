import React from "react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  name: string;
  mfeName: string;
  port: number;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  name,
  mfeName,
  port,
  description,
}) => {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="text-7xl mb-4">⏳</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-500">Coming Soon</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            Micro Frontend Status
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">MFE Name:</span>
              <span className="font-mono text-blue-700">{mfeName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Port:</span>
              <span className="font-mono text-blue-700">{port}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-yellow-600 font-semibold">
                Not Built Yet
              </span>
            </div>
          </div>
        </div>

        {description && (
          <p className="text-gray-600 mb-6 text-center">{description}</p>
        )}

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">
            When will this be available?
          </h4>
          <p className="text-gray-600 text-sm">
            This micro frontend will be built in upcoming tasks. Module
            Federation is configured and ready to load this remote as soon as
            it's deployed.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
