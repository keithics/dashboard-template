import {
  isRequestFinished,
  requestFailure,
  requestInProgress,
  resetRequest,
  saveSuccess,
  validationError,
} from './request.slice';
import { store } from 'rtk/store';
import { getApiUrl } from './request.helpers';
import { logout } from 'components/user/user.slice';
import { getToken } from 'lib/cookie.helper';

/**
 * Send a GET request and will always show dispatch "Saved" messages
 * @param url - url of the request
 * @param saveMessage save message texts
 */
export const getFetch = (url: string, saveMessage = 'Saved'): Promise<any> => {
  return fetchRequest(url, null, 'get', true, saveMessage);
};

/**
 * Send a GET request and will always HIDE dispatch "Saved" messages
 * @param url - url of the request
 */
export const getSilentFetch = (url: string): Promise<any> => {
  return fetchRequest(url, null, 'get', false);
};
/**
 * Send a POST request and will always SHOW dispatch "Saved" messages
 * @param url - url of the request
 * @param data - post body data
 * @param saveMessage save message texts
 */
export const postFetch = (url: string, data: unknown | null, saveMessage = 'Saved'): Promise<any> => {
  return fetchRequest(url, data, 'post', true, saveMessage);
};

/**
 * Send a POST request and will always show dispatch "Saved" messages
 * @param url - url of the request
 * @param data - post body data
 */
export const postSilentFetch = (url: string, data: unknown | null): Promise<any> => {
  return fetchRequest(url, data, 'post', false);
};

/**
 * Send a PUT request and will always SHOW dispatch "Saved" messages
 * @param url - url of the request
 * @param data - post body data
 * @param saveMessage save message texts
 */
export const putFetch = (url: string, data: unknown | null, saveMessage = 'Saved'): Promise<any> => {
  return fetchRequest(url, data, 'put', true, saveMessage);
};

/**
 * Send a PUT request and will always show dispatch "Saved" messages
 * @param url - url of the request
 * @param data - post body data
 * @param saveMessage save message texts
 */
export const putSilentFetch = (url: string, data: unknown | null): Promise<any> => {
  return fetchRequest(url, data, 'put', false);
};

/**
 * Send a DELETE request and will always SHOW dispatch "Saved" messages
 * @param url - url of the request
 * @param saveMessage save message texts
 */
export const deleteFetch = (url: string, saveMessage = 'Saved'): Promise<any> => {
  return fetchRequest(url, null, 'delete', true, saveMessage);
};

/**
 * Send a DELETE request and will always show dispatch "Saved" messages
 * @param url - url of the request
 */
export const deleteSilentFetch = (url: string): Promise<any> => {
  return fetchRequest(url, null, 'delete', false);
};

/**
 * wrapper for all requests, automated request in progress and failure state
 * DO NOT USE THIS DIRECTLY, USE THE ABSTRACTION METHODS ABOVE INSTEAD
 * @private
 * @param url - url of the request
 * @param data - post body data
 * @param httpMethod - http method
 * @param dispatchSaveMessage - display save message
 * @param saveMessage = save message texts, default is "Saved"
 */
const fetchRequest = (
  url: string,
  data: unknown = null,
  httpMethod: string | null = null,
  dispatchSaveMessage = true,
  saveMessage: string | null = null
): Promise<any> => {
  const method = httpMethod || (!data ? 'get' : 'post');
  const token = getToken();

  store.dispatch(resetRequest());
  store.dispatch(requestInProgress());

  return fetch(getApiUrl(url), {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : null,
  })
    .then((response) => {
      store.dispatch(isRequestFinished());
      if (response.status === 200) {
        if (dispatchSaveMessage && method != 'get') {
          store.dispatch(saveSuccess({ message: saveMessage }));
        }
        return response.json();
      } else if (response.status === 422) {
        return response.json().then((a) => {
          store.dispatch(validationError({ message: a.message }));
        });
      } else if (response.status === 401) {
        store.dispatch(logout());
      } else {
        store.dispatch(requestFailure());
      }

      return Promise.reject();
    })
    .catch((err) => {
      store.dispatch(isRequestFinished());
      store.dispatch(requestFailure());
      return Promise.reject(err);
    });
};
