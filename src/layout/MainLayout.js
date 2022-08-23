import Header from '@components/Header';
import Nav from '@common/Nav';
import Footer from '@common/Footer';

export default function MainLayout({children}){
    return(
        <>
            <div className="dark h-1/4">
                <div className="dark:bg-gray-800 min-h-full">
                    <Header />
                    <Nav />
                        <main>
                            <div className="dark:bg-gray-800 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                {children}
                            </div>
                        </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};