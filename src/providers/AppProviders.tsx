import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
})

const AppProviders = (props: Props) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProviders