import { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Alert from 'components/alerts/alert';

interface SubpageContainerInterface {
  title: string;
  addUrl?: string;
  showAdd?: boolean;
  children: ReactNode;
}

/**
 * Dashboard layout
 * @param title - page title
 * @param addUrl - Add resource link
 * @param children - other component children
 * @param showAdd - whether to show the add button or not
 * @param showActions - whether to show the actions buttons
 * @param deploy - deploy callback
 * @param redeploy - redeploy callback
 */
function SubpageContainer({ title, addUrl, children, showAdd = false }: SubpageContainerInterface) {
  return (
    <>
      <main className="flex-1 relative overflow-y-auto focus:outline-none max-w-full">
        <div className="py-6">
          <div className={`flex justify-between mx-auto px-4 sm:px-6 ${title ? 'mb-3' : 'mb-0'}`}>
            <h1 className="text-2xl flex flex-col justify-end font-semibold text-gray-900">{title}</h1>
            {showAdd && (
              <div className="flex justify-end">
                <Link to={addUrl ? addUrl : ''}></Link>
              </div>
            )}
          </div>
          <div className="mx-auto px-4 sm:px-6">
            <Outlet />
            <Alert />
            {children}
            {/*<ConfirmDialog />*/}
          </div>
        </div>
      </main>
    </>
  );
}

export default SubpageContainer;
