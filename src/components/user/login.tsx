import { login } from 'components/user/user.thunks';
import Alert from 'components/alerts/alert';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'rtk/hooks';
import { setUserData } from 'components/user/user.slice';
import { setCookieToken } from 'lib/cookie.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginInterface } from 'components/user/user.interface';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<LoginInterface>();
  const onSubmit: SubmitHandler<LoginInterface> = async (values) => {
    const response = await login(values);

    if (response) {
      const { isAdmin } = response.user;
      dispatch(setUserData(response.user));
      setCookieToken(response.token);
      navigate('/dashboard/');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src="/logo.svg" alt="Logo" />
        </div>

        <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-12 px-8 shadow sm:rounded-lg sm:px-10">
            <h2>Sign in to your account</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Alert />
              <div>
                <label>
                  Email address
                </label>
                <div className="mt-1">
                  <input type="text" {...register('email')} />
                </div>
              </div>

              <div>
                <label>
                  Password
                </label>
                <div className="mt-1">
                  <input type="password" {...register('password')} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link to="/register">
                    Register Here
                  </Link>
                </div>

                <div className="text-sm">
                  <Link to="forgot">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
