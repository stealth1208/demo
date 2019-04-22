import { HERO_DETAIL } from '../actionTypes';

const initState = {
  isRequesting: false,
  heroDetail: {}
};

function heroDetailReducer(state = initState, action = {}) {
  switch (action.type) {
    case HERO_DETAIL.GET.REQUEST:
      return {
        isRequesting: true,
        heroDetail: {}
      }
    case HERO_DETAIL.GET.SUCCESS:
      return {
        isRequesting: false,
        heroDetail: action.payload
      }

    case HERO_DETAIL.GET.FAILURE:
      return {
        isRequesting: false,
        error: action.error
      }
    default:
      return {
        ...state
      }
  }
}

export default heroDetailReducer;
