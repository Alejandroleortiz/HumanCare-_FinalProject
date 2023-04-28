import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout({includeSidebar, includeHeader, children}) {
    return (
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            {/* Vertical Navbar */}
            {includeSidebar && <Sidebar />}
            {/* Main content */}
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                {/* Header */}
                {includeHeader && <Header />}
                {/* Main */}
                <main className="py-6 bg-surface-secondary">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout