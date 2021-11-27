/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

export const useGraphQLQuery = (QUERY, options = {}) => {
  const router = useRouter();
  const locale = { locale: router.locale || 'fr' };
  const useQueryReturn = useQuery(QUERY, {
    variables: { ...options, ...locale },
  });
  return useQueryReturn;
};
