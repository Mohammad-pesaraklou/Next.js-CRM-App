import Head from 'next/head';
import Navbar from './Navbar';
// styles
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>CRM APP</title>
                <meta name="description" content="Crm web app created by NextJs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                Next.js CRM App | CRM Project &copy;
            </footer>
        </div>
    );
};

export default Layout;