/**
 * Created by abhiram on 29/1/20.
 */

const getBaseUrl = () => {
    let env = process.env.REACT_APP_STAGE;
    switch (env) {
        case 'dev':
            return 'http://localhost:8000/';
        case 'staging':
            return 'http://api-freshtrak.inapp.com/';
        case 'production':
            return 'http://api-freshtrak.inapp.com/';
        default:
            break;
    }
};

export const BASE_URL = getBaseUrl();
export const API_URL = {
    LOGIN_URL: BASE_URL + 'api/login',
    GET_MENU_LIST_URL: BASE_URL + 'api/menu',
    GET_ROLE_LIST_URL: BASE_URL + 'api/roles',
    MENU_PERMISSION_URL: BASE_URL + 'api/menu/permission',
    LOGOUT_URL: BASE_URL + 'api/logout',
    CREATE_FAMILY_URL: BASE_URL + 'family/create',
    GET_SUFFIX: BASE_URL + 'family/suffix',
    GET_HOUSINGTYPE: BASE_URL + 'family/housingtype',
    CREATE_USER_URL: BASE_URL + 'user/create',
    GET_USER_LIST_URL: BASE_URL + 'user/list',
    GET_USER_DATA_URL: BASE_URL + 'user/',
    UPDATE_USER_DATA_URL: BASE_URL + 'user/update',
    GET_AGENCY_LIST_URL: BASE_URL + 'agency/list',
    GET_FAMILY_LIST: BASE_URL + 'family/list',
    GET_FAMILY_UPDATE_DATA: BASE_URL + 'family/update',
    PUT_FAMILY_UPDATE: BASE_URL + 'family/update',
    GET_HOUSINGTYPE_DATA: BASE_URL + 'family/housingtypeget',
    AGENCY_URL: BASE_URL + 'agency/create',
    UPDATE_AGENCY_URL: BASE_URL + 'agency/:id/update',
    EDITED_URL : BASE_URL + 'agency',
    GET_MODULE_LIST_URL: BASE_URL + 'module/list',
    GET_MODULE_PERMISSION_URL:BASE_URL + 'module/modulepermission',
    PUT_MODULE_PERMISSION_URL : BASE_URL + 'module/permission',
    GET_AGENCY_FORMS : BASE_URL + 'agency/forms',
    GET_SERVICE_TYPES : BASE_URL + 'api/service/types',
    CREATE_EVENT : BASE_URL + 'event/create',
    GET_EVENT_LIST : BASE_URL + 'event/list',
    EVENT_URL : BASE_URL + 'event',
};

export const RENDER_URL = {
    HOME_URL: '/',
    DASHBOARD_URL: '/dashboard',
    MENU_PERMISSION_URL: '/menu/permission',
    ADD_FAMILY_URL: '/family/create',
    MANAGE_USERS: '/user/list',
    CREATE_USERS: '/user/create',
    EDIT_USERS: '/user/:id/update',
    AGENCY_URL: '/agency/create',
    GET_AGENCY_LIST_URL: '/agency/list',
    UPDATE_AGENCY_URL: '/agency/:id/update',
    FAMILY_AREA_URL: '/family/view',
    FAMILY_LIST_URL: '/family/list',
    FAMILY_UPDATE_URL: '/family/:id/update',
    MODULE_PERMISSION_URL:'/module/permission',
    EVENT_DASHBOARD_URL:'/events/dashboard',
    EVENT_CREATE_URL:'/events/create',
    EVENT_LIST_URL:'/events/list',
    EVENT_EDIT_URL:'/events/:id/edit',
};