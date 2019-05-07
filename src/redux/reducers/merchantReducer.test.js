import { MERCHANT_LIST } from '../actionTypes';
import reducer, { initState } from './merchantReducer';

test('Should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(initState);
});

test('Should handle GET_REQUEST', () => {
  expect(reducer(undefined, {
    type: MERCHANT_LIST.GET.REQUEST
  })).toEqual({
    isRequestingList: true,
    categories: [],
    stores: [],
    categoryId: 0
  });
});

test('Should handle GET_SUCCESS', () => {
  const categories = [{
    href: "/dinner",
    iconUrl: "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg",
    id: 12,
    name: "Dinner"
  }, {
    href: "/all-stores",
    iconUrl: "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg",
    id: 0,
    name: "Popular"
  }];

  const stores = [{
    alt: "Qoo10 Coupons & Promo Codes",
    categoryId: 12,
    id: 917,
    logoUrl: "https://static.shopback.com/uploads/ci/143830/logo-qoo10.gif",
    name: "Qoo10"
  }, {
    alt: "Nike",
    categoryId: 13,
    id: 918,
    logoUrl: "https://static.shopback.com/uploads/ci/143830/logo-qoo10.gif",
    name: "Nike"
  }];

  const storeFiltered = [{
    alt: "Qoo10 Coupons & Promo Codes",
    categoryId: 12,
    id: 917,
    logoUrl: "https://static.shopback.com/uploads/ci/143830/logo-qoo10.gif",
    name: "Qoo10"
  }];

  expect(reducer({
    isRequestingList: true,
    categories: [],
    stores: [],
    categoryId: 0
  }, {
    type: MERCHANT_LIST.GET.SUCCESS,
    data: {
      categories,
      stores
    },
    categoryId: 12
  })).toEqual({
    ...initState,
    isRequestingList: false,
    categories,
    stores: storeFiltered,
    selectedCategory: 12
  });
});

test('Should handle GET_FAILURE', () => {
  expect(reducer({
    isRequestingList: true,
    categories: [],
    stores: [],
    categoryId: 0
  }, {
    type: MERCHANT_LIST.GET.FAILURE,
    error: 'Error when get data'
  })).toEqual({
    isRequestingList: false,
    error: 'Error when get data'
  });
});
