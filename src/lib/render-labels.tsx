import FormInput from 'components/forms/form-input';
import InputFormShimmer from 'components/funnels/shimmers/site-labels/input-form';
import { ShimmerLabel } from 'components/shimmer/utils';
import { store } from 'rtk/store';
import { requestFailure } from 'request/request.slice';
import { get, snakeToCapitalize } from './helpers';

export const renderLabels = (mergedLabels, isLoading) => {
  const componentsArray = new Set();

  /**
   * recursively loops to a json file and render them, accepts only objects and string types
   * @param object
   * @param parent
   */
  const renderHeaderOrInput = (object, parent: Array<any> = []) => {
    for (const property in object) {
      const currentProperty = object[property];
      if (typeof currentProperty === 'object') {
        const header = (
          <>
            <div className="font-semibold p-4 bg-gray-100 rounded-md">
              {isLoading ? <ShimmerLabel width="w-1/6" /> : snakeToCapitalize(property)}
            </div>
          </>
        );
        componentsArray.add({ component: header, key: property });
        renderHeaderOrInput(currentProperty, [...parent, property]);
      } else if (typeof currentProperty === 'string') {
        const name = parent.length > 0 ? [parent, property].join('.') : [property].join('.');
        const placeholder = get(mergedLabels, name);
        const fields = isLoading ? (
          <InputFormShimmer />
        ) : (
          <FormInput key={name} name={name} label={snakeToCapitalize(property)} placeholder={placeholder} />
        );

        componentsArray.add({ component: fields, key: name });
      } else {
        store.dispatch(requestFailure());
      }
    }
    return [...Array.from(componentsArray)];
  };

  return renderHeaderOrInput(mergedLabels);
};
