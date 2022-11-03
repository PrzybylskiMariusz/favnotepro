import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="articles" element={<Articles />} />
        <Route path="twitters" element={<Twitters />} />
      </Routes>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
