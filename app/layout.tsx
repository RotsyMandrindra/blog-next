import {ReactNode} from 'react';
import Header from './component/header';
import Footer from './component/footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Header/>
            {
                children
            }
            <Footer/>
        </div>
    );
};

export default Layout;