import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import DashboardReducer from './DashboardReducer';
import AppSettingReducer from './AppSettingReducer';

//4.Index.js pada reducer ini akan mengumpulkan semua reducer untuk dapat di wrap sehingga
//lebih sederhana
//combine reducer berfungsi untuk membungkus semua reducer yg ada di folder reducer
//talentState adalah nama alias yang nantinya dipanggil di layer view

const rootReducer = combineReducers({
  userState : userReducer,
  dashboardState : DashboardReducer,
  talentState : AppSettingReducer
});

export default rootReducer;