import { getMerchantList } from '../../api/merchantApi';
import { MERCHANT_LIST } from '../actionTypes';

export const getHeroListAction = (categoryId) => {
  return async (dispatch) => {    
    dispatch({
      type: MERCHANT_LIST.GET.REQUEST,
      categoryId: categoryId
    });
    
    try {
      const results = await getMerchantList();
      dispatch({
        type: MERCHANT_LIST.GET.SUCCESS,
        data: results,
        categoryId
      });
    } catch (error) {
      dispatch({
        type: MERCHANT_LIST.GET.FAILURE,
        error
      });
    }
  }
}
