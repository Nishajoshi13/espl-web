import { transform, isArray, isObject, snakeCase } from 'lodash';

export const transformCsToSnake = (obj: any) =>
  transform(obj, (acc: any, value: any, key: any, target: any) => {
    const camelKey = isArray(target) ? key : snakeCase(key);

    acc[camelKey] = isObject(value) ? transformCsToSnake(value) : value;
  });
