import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './HeaderComponent';
import { MenuComponent } from './MenuComponent';
import { SidebarComponent } from './SidebarComponent';
import { PostComponent_1 } from './PostComponent_1';
import { PostComponent_2 } from './PostComponent_2';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div class='App-page'>
        
        {/* Menu */}
        <MenuComponent />
        <div class='App-cont'>
          <PostComponent_1/>
          <PostComponent_2/>
        </div>
        {/* Barra lateral */}  
        <SidebarComponent />
      </div>
    </div>
  );
}

export default App;
