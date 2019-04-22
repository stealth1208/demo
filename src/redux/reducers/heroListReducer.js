import { HERO_LIST } from '../actionTypes';

const initState = {
  isRequestingList: null,
  heroList: []
}
function heroListReducer(state = initState, action = {}) {
  switch (action.type) {
    case HERO_LIST.GET.REQUEST:
      return {
        isRequestingList: true,
        heroList: [
          ...state.heroList
        ]
      };

    case HERO_LIST.GET.SUCCESS:
      return {
        isRequestingList: false,
        heroList: [
          ...state.heroList,
          ...action.data
        ]
      };

    case HERO_LIST.GET.FAILURE:
      return {
        isRequestingList: false,
        heroList: action.error
      };
    default:
      return {
        ...state
      };
  }
}

export default heroListReducer;
