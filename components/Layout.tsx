import Header from './Header'
import Footer from './Footer';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)

export default Layout