import './App.css'
import Header from '@/components/layout/Navigation/Header'
import AppRoutes from '@/config/AppRoutes.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  )
}
export default App
