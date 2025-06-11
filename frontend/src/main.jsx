import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowseRouter} from "react-router-dom";
import React from "react"
import ReactDOM from "react-dom/client"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowseRouter>
        <ChakraProvider>
      
      <App />

      </ChakraProvider>
    </BrowseRouter>

  </StrictMode>,
)



