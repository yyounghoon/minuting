import { fetcher } from '../lib/fetcher';
import { TPublicSpace } from '../types';
import { useQuery } from '@tanstack/react-query';

export const PUBLIC_SPACE_KEY = 'PUBLIC_SPACE_KEY';
export const usePublicSpaces = () => {
  return useQuery([PUBLIC_SPACE_KEY], () =>
    fetcher<TPublicSpace>({
      url: '/spaces?view=public',
    }),
  );
};

export const CREATE_SPACE_KEY = 'CREATE_SPACE_KEY';

type TCreateSpacePayload = {
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
