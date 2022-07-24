interface DevUrlsInterface {
  service: string;
  url: string;
}

/**
 * Dev use only, if you want to mix and match dev and testing server
 */
const devUrls: DevUrlsInterface[] = [
  { service: 'amazon', url: 'http://localhost:8081' },
  { service: 'funnels', url: 'http://localhost:8082' },
  { service: 'users', url: 'http://localhost:8083' },
  { service: 'magic-links', url: 'http://localhost:8084' },
  { service: 'rebates-customer', url: 'http://localhost:8085' },
  { service: 'thirdparty', url: 'http://localhost:8088' },
];

/**
 * Get API URL, for dev use, add another service in devUrls
 * @param urlName : string - url where the first url segment is the service name
 * eg: /magic-links/page => service = magic-links
 */
export function getApiUrl(urlName: string): string {
  const productionUrl = import.meta.env.VITE_REACT_APP_API + urlName;
  const apiService = urlName.split('/')[1];
  const devUrl = devUrls.find(({ service }) => service === apiService)?.url;

  if (import.meta.env.VITE_REACT_APP_USE_DEV) {
    return devUrl ? devUrl + urlName.replace(apiService + '/', '') : productionUrl;
  }
  return productionUrl;
}
