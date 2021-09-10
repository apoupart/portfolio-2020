/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

export const useGraphQLQuery = (QUERY, options = {}) => {
  const router = useRouter();
  const locale = { locale: router.locale || 'fr' };
  console.log('obj to send', { ...options, ...locale });
  const useQueryReturn = useQuery(QUERY, {
    variables: { ...options, ...locale },
  });
  console.log('obj to send useQuery', useQueryReturn);
  return useQueryReturn;
};
