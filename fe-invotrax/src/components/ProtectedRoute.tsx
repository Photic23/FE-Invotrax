// app/components/ProtectedRoute.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Note: using 'next/navigation' not 'next/router'
import { useAuth } from '@/contexts/AuthContext';
import { ReactNode } from 'react';

export default function ProtectedRoute({ 
    children, 
    requiredRole = null 
  }: { 
    children: ReactNode;
    requiredRole?: string | null;
  }) {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    } else if (requiredRole && user?.role !== requiredRole) {
      router.push('/unauthorized');
    }
  }, [isLoggedIn, user, router, requiredRole]);

  if (!isLoggedIn) {
    return null;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
}