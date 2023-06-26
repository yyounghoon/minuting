import { fetcher } from '../lib/fetcher';
import { GetMeInfoType, TSearchUserList } from '../types';
import { useMutation, useQuery } from '@tanstack/react-query';

export const USER_INFO_KEY = 'USER_INFO_KEY';
export const useUserInfo = () => {
  return useQuery([USER_INFO_KEY], () => {
    return fetcher<GetMeInfoType>({
      url: '/me',
    });
  });
};

export const SEARCH_USER_KEY = 'SEARCH_USER_KEY';
export const useSearchUser = () => {
  const { data, error, mutate } = useMutation(
    [SEARCH_USER_KEY],
    (name?: string) =>
      fetcher<TSearchUserList>({
        url: `/users?name=${name}`,
      }),
  );

  return {
    searchUserList: data?.list,
    mutate,
    isError: error,
  };
};
