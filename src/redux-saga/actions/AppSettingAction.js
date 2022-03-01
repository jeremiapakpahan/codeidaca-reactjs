import * as ActionType from '../constants/AppSettingConstant';

//2.untuk membuat function creator yg akan dipanggil dari view layer 
//parameter payload akan menampung data yg didapat dari backend

export const doUpdateTalentRequest = (payload) => ({
    type: ActionType.UPDATE_TALENT_REQUEST,
    payload
})

export const doUpdateTalentSucceed = (payload) => ({
    type: ActionType.UPDATE_TALENT_SUCCEED,
    payload
})

export const doUpdateTalentFailed = (payload) => ({
    type: ActionType.UPDATE_TALENT_FAILED,
    payload
})

export const doUpdateTalentNoFileRequest = (payload) => ({
    type: ActionType.UPDATE_TALENTNOFILE_REQUEST,
    payload
})

export const doUpdateTalentNoFileSucceed = (payload) => ({
    type: ActionType.UPDATE_TALENTNOFILE_SUCCEED,
    payload
})

export const doUpdateTalentNoFileFailed = (payload) => ({
    type: ActionType.UPDATE_TALENTNOFILE_FAILED,
    payload
})

export const doGetTalentRequest =(payload)=>({
    type : ActionType.GET_TALENT_REQUEST,
    payload
})

export const doGetTalentSucceed =(payload)=>({
    type : ActionType.GET_TALENT_SUCCEED,
    payload
})

export const doGetTalentFailed =(payload)=>({
    type : ActionType.GET_TALENT_FAILED,
    payload
})