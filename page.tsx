import React from 'react';

import Hero from "./component/Hero";
import Card from "./component/Card";
import Running from "./component/Running";
import Gear from "../component/Gear";
import Stain from "./component/Stain";
import Essentials from "./component/Essentials";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <Running/>
      <Gear/>
      <Stain/>
      <Essentials/>
    </main>
  );
}