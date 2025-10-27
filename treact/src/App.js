import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line


import ComponentRenderer from "ComponentRenderer.js";
import SaaSProductLnadingPage from "demos/SaaSProductLandingPage.js";
import Blog from "pages/BlogIndex.js";
import AboutUs from "pages/AboutUs.js";
import ContactUs from "pages/ContactUs.js";
import Pricing from "pages/Pricing.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
                  <Route path="/" element={<SaaSProductLnadingPage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}
