import { transform, isArray, isObject, camelCase } from 'lodash';

export const transformSnakeToCs = (obj: any) =>
  transform(obj, (acc: any, value: any, key: any, target: any) => {
    const camelKey = isArray(target) ? key : camelCase(key);

    acc[camelKey] = isObject(value) ? transformSnakeToCs(value) : value;
  });
