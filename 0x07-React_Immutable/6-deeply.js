import { Map } from 'immutable';

const mergeDeeplyElements = (page1, page2) => {
  const object1 = Map(page1);
  const object2 = Map(page2);
  return object1.mergeDeep(object2);
};

export default mergeDeeplyElements;
