interface DevUrlsInterface {
  service: string;
  url: string;
}

/**
 * Dev use only, if you want to mix and match dev and testing server
 */
const devUrls: DevUrlsInterface[] = [{ service: 'users', url: 'http://localhost:8081' }];

/**
 * Get API URL, for dev use, add another service in devUrls
 * @param urlName : string - url where the first url segment is the service name
 */
export function getApiUrl(urlName: string): string {
  const productionUrl = import.meta.env.VITE_REACT_APP_API + urlName;
  const apiService = urlName.split('/')[1];
  const devUrl = devUrls.find(({ service }) => service === apiService)?.url;

  if (import.meta.env.DEV) {
    return devUrl ? devUrl + urlName.replace(apiService + '/', '') : productionUrl;
  }
  return productionUrl;
}
