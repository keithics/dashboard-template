import Sidebar from 'components/sidebar/sidebar';
import RequireAuth from 'components/auth/require-auth';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'rtk/hooks';
import { selectSidebarOpen } from 'components/sidebar/sidebar.slice';
import Topbar from 'components/topbar/topbar';

function DashboardContainer() {
  const isSidebarOpen = useAppSelector(selectSidebarOpen);
  const width = isSidebarOpen ? 56 : 14;
  const logoSrc = isSidebarOpen ? '/logo-white.png' : '/logo_mini.png';

  return (
    <>
      <RequireAuth>
        <div className="h-screen flex overflow-hidden bg-gray-100">
          <div className="bg-white flex flex-shrink-0">
            <div className={`flex flex-col w-${width} border-r border-r-gray-200`}>
              <div className="flex items-center flex-shrink-0 pl-4">
                <img className={`h-12 ${isSidebarOpen ? 'mr-1' : ''} pt-4`} src={logoSrc} alt="Logo" />
              </div>
              <Sidebar />
            </div>
          </div>
          <Topbar>
            <Outlet />
          </Topbar>
        </div>
      </RequireAuth>
    </>
  );
}

export default DashboardContainer;
