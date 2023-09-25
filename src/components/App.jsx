import React from 'react'
import { SideBar } from './index'
import { sideBar } from '../constants';


export default function App() {
  return (
          <div id="wrapper">
                    <SideBar sideBar = {sideBar} />
          </div>
  );
}

