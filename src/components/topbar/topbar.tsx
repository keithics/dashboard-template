import {ReactNode} from 'react';
import {useAppDispatch, useAppSelector} from 'rtk/hooks';
import {logout, selectUserData} from 'components/user/user.slice';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

function Topbar({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const logoutUser = () => {
    dispatch(logout());
  };



  return (
    <>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <div className={`flex-1 px-6 flex justify-end`}></div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
