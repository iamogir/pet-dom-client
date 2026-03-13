import './styles/App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "app/routes/router.tsx";

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
