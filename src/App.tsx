import { EuiProvider } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_dark.css'
import './App.css'
import DemoPage from './pages/DemoPage'

const App = () => {
  return (
    <EuiProvider colorMode="dark">
      <DemoPage />
    </EuiProvider>
  )
}

export default App
