import { fetcher } from '../lib/fetcher';
import { TPublicSpace } from '../types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const PUBLIC_SPACE_KEY = 'PUBLIC_SPACE_KEY';
export const usePublicSpaces = () => {
  const { data } = useQuery([PUBLIC_SPACE_KEY], () =>
    fetcher<TPublicSpace>({
      url: '/spaces?view=public',
    }),
  );

  return {
    publicSpaceList: data?.list,
  };
};

export type TCreateSpacePayload = {
  description: string;
  icon: string;
  isPublic: boolean;
  name: string;
  permissionList: {
    memberId: string;
    type: 'EDIT' | 'READ' | 'WRITE';
  }[];
  tagIdList: number[];
};
export const CREATE_SPACE_KEY = 'CREATE_SPACE_KEY';
export const useCreateSpace = () => {
  return useMutation<unknown, AxiosError<unknown>, TCreateSpacePayload>(
    (payload) =>
      fetcher({
        url: '/spaces',
        method: 'post',
        data: payload,
      }),
  );
};

export const useJoinSpace = () => {
  return useMutation((spaceId: number) =>
    fetcher({
      url: `/spaces/${spaceId}/join`,
      method: 'post',
    }),
  );
};
