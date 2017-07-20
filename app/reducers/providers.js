const initialState = {categories: null};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHED_CATEGORIES':
      console.log('Fetched Categories Reducer');
      //console.log(payload);
      return {
        categories: payload,
        categoriesFetched: true
      }
  }
  return state;
}