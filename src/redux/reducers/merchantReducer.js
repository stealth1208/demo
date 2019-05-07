import { MERCHANT_LIST } from '../actionTypes';
import { cookiesHelper, lodashSort } from '../../helper';

export const initState = {
  isRequestingList: null,
  categories: [],
  stores: [],
  categoryId: 0
};

function merchantReducer(state = initState, action = {}) {
  switch (action.type) {
    case MERCHANT_LIST.GET.REQUEST:
      return {
        isRequestingList: true,
        categories: state.categories,
        stores: state.stores,
        categoryId: state.categoryId
      };

    case MERCHANT_LIST.GET.SUCCESS:
      const { categoryId = 0, data = {} } = action;
      const { categories, stores } = data;
      
      const categoriesSorted = lodashSort(categories, function(item) {
        return item.id === categoryId ? 0 : 1;
      });
      
      const storeFiltered = stores.filter(item => item.categoryId === categoryId);

      cookiesHelper.setCookie('favorite', categoryId, 12);

      return {
        ...initState,
        isRequestingList: false,
        categories: categoriesSorted,
        stores: storeFiltered,
        selectedCategory: categoryId
      };

    case MERCHANT_LIST.GET.FAILURE:
      return {
        isRequestingList: false,
        error: action.error
      };
    default:
      return {
        ...state
      };
  }
}

export default merchantReducer;
