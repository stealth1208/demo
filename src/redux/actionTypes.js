const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const HERO_LIST = {
  GET: createRequestTypes('CHAR_LIST.GET')
};

export const HERO_DETAIL = {
  GET: createRequestTypes('HERO_DETAIL.GET')
};

