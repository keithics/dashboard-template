import { register as registerUser } from 'components/user/user.thunks';
import Alert from 'components/alerts/alert';
import { Link } from 'react-router-dom';
import { LoginInterface, RegisterInterface } from 'components/user/user.interface';
import { SubmitHandler, useForm } from 'react-hook-form';

function Register() {
  const { register, handleSubmit } = useForm<RegisterInterface>();
  const onSubmit: SubmitHandler<RegisterInterface> = async (values) => {
    await registerUser(values);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src="/logo.svg" alt="Logo" />
        </div>

        <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-12 px-8 shadow sm:rounded-lg sm:px-10">
            <h2>Create An account</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Alert />
              <div>
                <label>Email address</label>
                <div className="mt-1">
                  <input type="text" {...register('email')} />
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className="mt-1">
                  <input type="password" {...register('password')} />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="mt-1">
                  <input type="password" {...register('repeatPassword')} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link to="/">
                    Login Here
                  </Link>
                </div>

                <div>
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

export default Register;
