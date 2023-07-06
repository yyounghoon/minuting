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

type TRecentMeetingRes = {
  error: {
    code: number;
    reason: string;
  };
  list: {
    boardId: number;
    contents: string;
    createdAt: string;
    id: number;
    tagList: [
      {
        color: string;
        name: string;
      },
    ];
    title: string;
    updatedAt: string;
  }[];
};

export const RECENT_MINUTES_LIST = 'RECENT_MINUTES_LIST';
export const useRecentMeetingList = (spaceId: number) => {
  const { data, isLoading, isError } = useQuery<TRecentMeetingRes>(
    [RECENT_MINUTES_LIST],
    () =>
      fetcher({
        url: `/spaces/${spaceId}/minutes/type=recent`,
      }),
    { enabled: !!spaceId },
  );

  return {
    recentMeetingList: data?.list,
    isLoading,
    isError,
  };
};

// /spaces/{spaceId}/minutes/type=week // 이번주 회의록
