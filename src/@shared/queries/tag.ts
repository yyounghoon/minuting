import { fetcher } from '../lib/fetcher';
import { TTagList } from '../types';
import { useQuery } from '@tanstack/react-query';

export const TAG_LIST_KEY = 'TAG_LIST_KEY';
export const useTagList = (type: 'SPACE' | 'MINUTES') => {
  const { data, isLoading, error } = useQuery([TAG_LIST_KEY], () =>
    fetcher<TTagList>({
      url: `tags/${type}`,
    }),
  );

  return {
    tagList: data?.list,
    isLoading,
    isError: error,
  };
};
