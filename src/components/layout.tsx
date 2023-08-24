import React, { ReactNode } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import { Inter, Work_Sans } from 'next/font/google';

const worksans = Work_Sans({ subsets: ['latin'] });

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {

    return (
        <div className={worksans.className}>
            <Navbar />
            <main className='bg-slate-200'>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout
