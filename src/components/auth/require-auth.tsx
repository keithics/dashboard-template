import { useAppSelector } from 'rtk/hooks';
import { selectUserData } from 'components/user/user.slice';
import { clearAllData } from 'lib/cookie.helper';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAppSelector(selectUserData);
  if (isLoggedIn) {
    return children;
  } else {
    clearAllData();
    window.location.href = '/';

    return <></>;
  }
}
