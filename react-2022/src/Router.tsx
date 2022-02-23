import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Carrinho } from './pages/Carrinho'
import { Catalog } from './pages/Catalog'

export function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </Router>
    )
}