import { useAppDispatch } from 'rtk/hooks';
import { logout } from 'components/user/user.slice';

function GenericError() {
  const dispatch = useAppDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>
        <main
          className="min-h-screen bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("/500.png")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 text-center sm:px-6 sm:py-2 lg:px-16 lg:py-16">
            <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">500 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
              Uh oh! I think something went wrong!
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              We have sent a message to our space monkeys to fix this asap.
              <br />
              In the meantime, try logging out if this fixes the problem.
            </p>
            <div className="mt-6">
              <a
                href="/dashboard/settings"
                className="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                text-black bg-black bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Go back
              </a>
              <button
                onClick={() => logoutUser()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                text-white bg-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default GenericError;
