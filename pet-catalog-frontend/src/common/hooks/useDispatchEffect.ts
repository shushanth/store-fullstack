import { apiService, HttpVerbs } from '../services/apiService';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

interface EffectsActionWithPayload {
  actions: {
    loading: ActionCreatorWithPayload<any, string>;
    success: ActionCreatorWithPayload<any, string>;
    failure: ActionCreatorWithPayload<any, string>;
  };
  httpMethod: HttpVerbs.GET;
  endPoint: string;
}

export const useDispatchEffect = () => {
  const http = apiService();
  const dispatch = useDispatch();
  const dispatchEffect = ({
    actions: { loading, success, failure },
    httpMethod,
    endPoint,
  }: EffectsActionWithPayload) => {
    dispatch(loading(true));
    const onSuccess = (result: any) => dispatch(success(result));
    const onFailure = (error: any) => dispatch(failure(error));
    http[httpMethod](endPoint, onSuccess, onFailure);
  };
  return dispatchEffect;
};
