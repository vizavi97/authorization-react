import React from 'react'
import '../style.css'
import {ColorModeProvider, CSSReset, ThemeProvider} from "@chakra-ui/core";
import {defaultTheme as theme} from "../config/theme";
import {BrowserRouter} from "react-router-dom";


export const Container = (props) => {
  return (
  <>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset/>
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
      </ColorModeProvider>
    </ThemeProvider>
  </>
  )
}
