/**
 * PRIVATE ROUTE COMPONENT - Route protection wrapper
 *
 * HACKTOBERFEST TODO:
 * This component protects routes that require authentication.
 *
 * CONTRIBUTOR TASKS:
 * 1. Check if user is authenticated using useAuth hook
 * 2. If authenticated, render children
 * 3. If not authenticated, redirect to login page
 * 4. Show loading state while checking auth
 * 5. Optionally check for specific roles (admin, user)
 *
 * USAGE:
 * <Route path="/submit" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
 * <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * TODO: IMPLEMENT PRIVATE ROUTE COMPONENT
 *
 * Props:
 * - children: React elements to render if authorized
 * - role: Required role (optional)
 *
 * Logic:
 * 1. Get user, loading, isAuthenticated from useAuth
 * 2. If loading, show loading spinner
 * 3. If not authenticated, redirect to /login
 * 4. If role is specified and user doesn't have role, redirect to /
 * 5. If authorized, render children
 * */