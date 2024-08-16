import React from 'react'
import Home from "@/components/Dashboard/Home";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export default function page() {
  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
}
