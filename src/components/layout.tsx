import React, { ReactNode } from 'react';
import Navbar from './navbar'
import Footer from './footer'

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {

    return (
        <>
            <Navbar />
            <main className='bg-slate-200'>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
