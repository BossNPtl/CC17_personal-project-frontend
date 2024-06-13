import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import PageHome from '../pages/PageHome'
import PageAlbum from '../pages/PageAlbum'
import PageAboutUs from '../pages/PageAboutUs'
import PageLogin from '../pages/PageLogin'
import PageRegister from '../pages/PageRegister'
import PageAdminEdit from '../pages/PageAdminEdit'

import Album1 from '../pages-sub/Album-1'

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
            { path: '/album/1', element: <Album1 /> },
            { path: '/admin/edit', element: <PageAdminEdit /> }
        ]
    }
])

export default function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}