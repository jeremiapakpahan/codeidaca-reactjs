import * as ActionType from '../constants/AppSettingConstant'

//3.pada reducer akan di import action type yg dibuat di constant 
//INIT_STATE bisa dianggap sebagai template data dari reducer
//Reducer bisa dianggap sebagai template untuk menampung data dari backend api

const INIT_STATE = {
    talent: [],
    isLoading: false,
    isRefresh: false
}


const AppSettingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_TALENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.GET_TALENT_SUCCEED:
            return applyGetTalentSucceed(state, action)

        case ActionType.UPDATE_TALENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.UPDATE_TALENT_SUCCEED:
            return applyUpdateTalentSucceed(state, action)

        case ActionType.UPDATE_TALENTNOFILE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.UPDATE_TALENTNOFILE_SUCCEED:
            return applyUpdateTalentNoFileSucceed(state, action)

        default:
            return state;
    }
}

const applyGetTalentSucceed = (state, action) => {
    return {
        ...state,
        talent: { ...action.payload },
        isLoading: false,
        isRefresh: false
    }
}

const applyUpdateTalentSucceed = (state, action) => {
    // let { payload } = action;
    const { payload } = action;
    return {
        ...state,
        // talent: action.payload,
        talent: payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyUpdateTalentNoFileSucceed = (state, action) => {
    // let { payload } = action;
    const { payload } = action;
    return {
        ...state,
        // talent: action.payload,
        talent: payload,
        isLoading: false,
        isRefresh: false
    }
}

export default AppSettingReducer