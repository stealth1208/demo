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
  GET: createRequestTypes('HERO_LIST.GET')
};

export const HERO_DETAIL = {
  GET: createRequestTypes('HERO_DETAIL.GET')
};

export const HERO_STORY = {
  GET: createRequestTypes('HERO_STORY.GET')
};
