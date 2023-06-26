import { fetcher } from '../lib/fetcher';
import { useQuery } from '@tanstack/react-query';

export const TEAM_LIST_KEY = 'TEAM_LIST_KEY';
export const useTeamList = (companyId: number | undefined) => {
  const { data, isLoading, error } = useQuery(
    [TEAM_LIST_KEY, companyId],
    () =>
      fetcher({
        url: `/company/${companyId}/teams`,
      }),
    {
      enabled: !!companyId,
    },
  );
  return {
    teamList: data,
    isLoading,
    isError: error,
  };
};
