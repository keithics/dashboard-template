import { ReactNode } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Link, Outlet } from 'react-router-dom';
import FormButton from 'components/forms/form-button';
import Alert from 'components/alerts/alert';
import ConfirmDialog from 'components/dialogs/confirm.dialog';
import FunnelButtonsWrapper from 'components/funnels/deploy-buttons/funnel-buttons.wrapper';

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
function SubpageContainer({
  title,
  addUrl,
  children,
  showAdd = false,
  showActions = false,
  deploy,
  redeploy,
  ...props
}: {
  title: string;
  addUrl?: string;
  showAdd?: boolean;
  showActions?: boolean;
  deploy?: (e) => Promise<void>;
  redeploy?: (e) => Promise<void>;
  children: ReactNode;
}) {
  return (
    <>
      <main className="flex-1 relative overflow-y-auto focus:outline-none max-w-full">
        <div className="py-6">
          <div className={`flex justify-between mx-auto px-4 sm:px-6 ${title ? 'mb-3' : 'mb-0'}`}>
            <h1 className="text-2xl flex flex-col justify-end font-semibold text-gray-900">{title}</h1>
            {showAdd && (
              <div className="flex justify-end">
                <Link to={addUrl ? addUrl : ''}>
                  <FormButton
                    buttonLabel={`Add ${title?.split(' ')?.slice(-1)?.join('')?.slice(0, -1)}`}
                    leadingIcon={<PlusCircleIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />}
                    {...props}
                  />
                </Link>
              </div>
            )}
            {showActions && <FunnelButtonsWrapper deploy={deploy} redeploy={redeploy} />}
          </div>
          <div className="mx-auto px-4 sm:px-6">
            <Outlet />
            <Alert />
            {children}
            <ConfirmDialog />
          </div>
        </div>
      </main>
    </>
  );
}

export default SubpageContainer;
