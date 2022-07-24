import AlertError from 'components/alerts/error.alert';
import AlertValidation from 'components/alerts/validation.alert';
import AlertSuccess from 'components/alerts/success.alert';
import { useAppDispatch, useAppSelector } from 'rtk/hooks';
import { resetRequest, selectRequest } from 'request/request.slice';

function Alert() {
  const { isFailure, isValidationError, saveSuccess, deletedSuccess, message } = useAppSelector(selectRequest);
  const dispatch = useAppDispatch();

  function onClose(): void {
    dispatch(resetRequest());
  }

  return (
    <>
      {isFailure && (
        <div>
          <AlertError message={message} onClose={onClose} />
        </div>
      )}

      {isValidationError && <AlertValidation message={message} onClose={onClose} />}

      {saveSuccess && <AlertSuccess message={message} onClose={onClose} />}

      {deletedSuccess && <AlertSuccess message={message} onClose={onClose} />}
    </>
  );
}

export default Alert;
