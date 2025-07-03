import React from 'react';
import { LogOut, User, ShoppingCart, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  title: string;
  showCart?: boolean;
  cartCount?: number;
  onCartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showCart = false, cartCount = 0, onCartClick }) => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">QuickEats</span>
            </div>
            <div className="ml-8">
              <h1 className="text-lg font-medium text-gray-900">{title}</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {showCart && (
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            )}
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">{user?.full_name}</span>
                {user?.role === 'student' && user?.registration_number && (
                  <span className="text-sm text-gray-500">({user.registration_number})</span>
                )}
              </div>
              <button
                onClick={signOut}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;