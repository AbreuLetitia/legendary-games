import instance from '../../../../services';

export const checkHasRegisterApi = async () => {
  try {
    const response = await instance.get('200/200');
    return response;
  } catch (error) {
    return error;
  }
};
