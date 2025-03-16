export const initialState = {
    laralelUrl: "/products",
    url: "",
    page: 1,
    loading: false,
    status: "",
    products: [],
    categories: [],
    filters: {
        category: "",
        search: "",
        line: "",
        min: "",
        max: "",
        sort: "",
        display: "",
    },
    filterMobile: "",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, loading: true };
        case 'STOP_LOADING':
            return { ...state, loading: false };
    
        case 'SET_INFO':
            return { ...state, products: action.products, categories: action.categories, url: action.url };
        case 'SET_PRODUCTS':
            return { ...state, products: action.products, url: action.url };

        case 'Remove_FILTER':
            return { ...state, filters: action.data, status: "Remove" };
        case 'SET_FILTER':
            return { ...state, filters: {...state.filters, ...action.data}, status: "FIRST" };
        case 'SET_SEARCH':
            return { ...state, filters: {...state.filters, search: action.filter}, status: "NEXT" };
        case 'SET_LINE':
            return { ...state, filters: {...state.filters, line: action.filter, category: ""}, status: "NEXT" };
        case 'SET_CATEGORY':
            return { ...state, filters: {...state.filters, category: action.filter, line: ""}, status: "NEXT" };
        case 'SET_MIN':
            return { ...state, filters: {...state.filters, min: action.filter}, status: "NEXT" };
        case 'SET_MAX':
            return { ...state, filters: {...state.filters, max: action.filter}, status: "NEXT" };
        case 'SET_SORT':
            return { ...state, filters: {...state.filters, sort: action.filter}, status: "NEXT" };
        case 'SET_DISPLAY':
            return { ...state, filters: {...state.filters, display: action.filter}, status: "NEXT" };

        case 'ACTIVE_FILTER_MOBILE':
            return { ...state, filterMobile: " active" };
        case 'DEACTIVE_FILTER_MOBILE':
            return { ...state, filterMobile: "" };
            
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};