import { HERO_STORY } from '../actionTypes';
const initState = {
  isRequesting: false,
  story: null
};

function heroStoryReducer(state = initState, action = {}) {
  switch (action.type) {
    case HERO_STORY.GET.REQUEST:
      return {
        isRequesting: true
      }
    case HERO_STORY.GET.SUCCESS:
      return {
        isRequesting: false,
        story: action.payload
      }
    case HERO_STORY.GET.FAILURE:
      return {
        isRequesting: false,
        error: action.error
      }
    default:
      return {
        ...state
      }
  };
};

export default heroStoryReducer;
