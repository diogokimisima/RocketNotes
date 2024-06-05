import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            { user ? <AppRoutes /> : <AuthRoutes/>}
            <ToastContainer />
        </BrowserRouter>
    )
}