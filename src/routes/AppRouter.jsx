import { lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Navbar = lazy(() => import ('../layouts/Navbar'));
const PageHome = lazy(() => import ('../pages/PageHome'));
const PageAlbum = lazy(() => import ('../pages/PageAlbum'));
const PageAboutUs = lazy(() => import ('../pages/PageAboutUs'));
const PageLogin = lazy(() => import ('../pages/PageLogin'));
const PageRegister = lazy(() => import ('../pages/PageRegister'));
const PageAdminEdit = lazy(() => import ('../pages/PageAdminEdit'));
const Album = lazy(() => import ('../pages-sub/Album'));

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <Navbar />
                <div className='pt-[88px]'>
                    <Outlet />
                </div>
            </>,
        children: [
            { path: '/', element: <PageHome /> },
            { path: '/album', element: <PageAlbum /> },
            { path: '/aboutUs', element: <PageAboutUs /> },
            { path: '/auth/login', element: <PageLogin /> },
            { path: '/auth/register', element: <PageRegister /> },
            { path: '/album/:albumId', element: <Album /> },
            { path: '/admin/edit', element: <PageAdminEdit /> }
        ]
    }
])

export default function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}