import { login } from 'components/user/user.thunks';
import { Form } from 'react-final-form';
import Alert from 'components/alerts/alert';
import FormInput from 'components/forms/form-input';
import {LoginInterface} from 'components/user/user.interface';

function Forgot() {
  const onSubmit = async (values : LoginInterface) => {
    await login(values);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src="/logo-white.png" alt="Workflow" />
        </div>

        <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-12 px-8 shadow sm:rounded-lg sm:px-10">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Forgot Password</h2>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <Alert />
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <FormInput name="email" />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
