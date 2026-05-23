import './styles/App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "app/routes/Router.tsx";
import {AuthProvider} from "features/auth/context";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
