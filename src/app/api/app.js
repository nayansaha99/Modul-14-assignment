"use client"

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authenticateUser } from '../middleware/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect unauthenticated users to the login page
    if (!authenticateUser()) {
      router.push('/login'); // Replace with your login page
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

