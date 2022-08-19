import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

export const Routers = () => {
    return (
        <Routes>
        <Route
            path={`${Path.Users}${Path.Root}`}
            element={
                isAuth ? (
                    <UsersContainer />
                ) : (
                    <Navigate replace to={`${Path.Root}${Path.Login}`} />
                )
            }
        />
            </Routes>
    );
};