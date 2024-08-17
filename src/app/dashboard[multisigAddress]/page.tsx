import React from 'react'
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Home from '../components/Dashboard/Home';



export default function page() {
  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
}
