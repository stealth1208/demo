import { getCharList, getCharacterDetail } from '../../api/marvelApi';
import { HERO_LIST, HERO_DETAIL } from '../actionTypes';


export const getHeroListAction = (page) => {
  return async (dispatch) => {
    dispatch({
      type: HERO_LIST.GET.REQUEST
    });
    try {
      const results = await getCharList(page);
      const heroList = createData(results);
      dispatch({
        type: HERO_LIST.GET.SUCCESS,
        data: heroList
      });
    } catch (error) {
      dispatch({
        type: HERO_LIST.GET.FAILURE,
        error
      });
    }
  }
}

const createData = (data) => {
  const { results } = data;
  return results.map(({id, name, description, thumbnail}) => ({id, name, description, thumbnail}));
}

export const getHeroDetail = (id) => {
  return async (dispatch) => {
    dispatch({
      type: HERO_DETAIL.GET.REQUEST
    });
    try {
      const hero = await getCharacterDetail(id);
      dispatch({
        type: HERO_DETAIL.GET.SUCCESS,
        payload: hero.results[0]
      });
    } catch (error) {
      dispatch({
        type: HERO_DETAIL.GET.FAILURE,
        error
      });
    }
  }
}
