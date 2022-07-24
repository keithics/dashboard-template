
export function getAllQueryString() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const dateToTime = (date: Date) => date.toLocaleString('en-US');

export const localDate = (date: string) => dateToTime(new Date(date));

export function showComponent(show: boolean, component: React.ReactNode) {
  return show ? component : null;
}

/**
 * snakeCase to Capitalized Words
 * eg: firstName = First Name, homeFirstName = Home First Name
 * @param string
 */
export function snakeToCapitalize(string: string) {
  return string
    .replace(/([A-Z])/g, function (match) {
      return ' ' + match;
    })
    .replace(/^./, function (match) {
      return match.toUpperCase();
    });
}
