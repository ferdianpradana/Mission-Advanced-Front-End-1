import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { Dashboard } from "./pages/dashboard/dashboard";

function App() {
    const [myList, setMyList] = useState([]);

    const handleToggleList = (movie) => {
        setMyList((prev) => {
            const exists = prev.some((item) => item.id === movie.id);
            if (exists) {
                return prev.filter((item) => item.id !== movie.id);
            }
            return [...prev, { ...movie, watched: false }];
        });
    };

    const handleToggleWatched = (id) => {
        setMyList((prev) =>
            prev.map((item) => (item.id === id ? { ...item, watched: !item.watched } : item))
        );
    };

    const handleRemoveFromList = (id) => {
        setMyList((prev) => prev.filter((item) => item.id !== id));
    };

    const myListIds = new Set(myList.map((item) => item.id));

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <Dashboard
                            myList={myList}
                            myListIds={myListIds}
                            onToggleList={handleToggleList}
                            onToggleWatched={handleToggleWatched}
                            onRemoveFromList={handleRemoveFromList}
                        />
                    }
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
