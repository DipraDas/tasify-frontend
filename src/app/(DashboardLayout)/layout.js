
import { Layout } from 'antd';
import Sidebar from '../components/ui/Sidebar';
import Contents from '../components/Contents';

const DashboardLayout = ({ children }) => {

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <Contents>
                {children}
            </Contents>
        </Layout>
    );
};
export default DashboardLayout;