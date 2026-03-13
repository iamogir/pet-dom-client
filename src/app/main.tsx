import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from 'app/App.tsx'
import {QueryProvider} from "app/providers/QueryProvider.tsx";

createRoot(document.getElementById('root')!).render(
        <QueryProvider>
            <App />
        </QueryProvider>
)
