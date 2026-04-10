import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from 'app/App.tsx'
import {QueryProvider} from "app/providers/QueryProvider.tsx";
import {worker} from '../mocks/browser.ts';

const enableMocking = async () => {
    if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === 'true') {
        await worker.start()
    }
}

enableMocking();

createRoot(document.getElementById('root')!).render(
        <QueryProvider>
            <App />
        </QueryProvider>
)
