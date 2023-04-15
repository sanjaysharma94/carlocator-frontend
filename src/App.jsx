import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as React from 'react'
import './App.css'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/navbar/Navbar'
import SimpleSidebar from './components/sidebar/Sidebar'
import SearchBar from './components/searchbar/Searchbar.jsx'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      
      
      <SimpleSidebar/>
      <SearchBar/>
      
      
    </ChakraProvider>
  )
}



export default App
