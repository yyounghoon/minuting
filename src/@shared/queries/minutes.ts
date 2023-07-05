import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

type TMinutesListParams = {
  spaceId: number;
  boardId: number;
};

export const MINUTES_LIST_KEY = 'MINUTES_LIST_KEY';
export const useMinutesList = ({ spaceId, boardId }: TMinutesListParams) => {
  const { data, isLoading, isError } = useQuery(
    [MINUTES_LIST_KEY],
    () =>
      fetcher({
        url: `/spaces/${spaceId}/boards/${boardId}/minutes`,
      }),
    {
      enabled: !!spaceId && !!boardId,
    },
  );

  return {
    minutesList: data,
    isLoading,
    isError,
  };
};
