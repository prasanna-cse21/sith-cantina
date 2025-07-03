import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { isSupabaseConfigured } from '../../lib/supabase';

const Loading: React.FC = () => {
  const isConfigured = isSupabaseConfigured();

  if (!isConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Database Not Connected</h2>
          <p className="text-gray-600 mb-4">
            Please connect to Supabase to use the application. Click the "Connect to Supabase" button in the top right corner.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-sm text-orange-700">
              <strong>Note:</strong> You need to set up your Supabase project and configure the environment variables to proceed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <span className="text-lg font-medium text-gray-700">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;