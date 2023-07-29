//https://reacttricks.com/nested-dynamic-layouts-in-next-apps/

import App from 'next/app';
import MainLayout from '../layouts/MainLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import { initializeIcons } from '@fluentui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  initializeIcons();

  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
