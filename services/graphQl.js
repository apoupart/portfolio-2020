/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

export const useGraphQLQuery = (QUERY, options = {}) => {
  const router = useRouter();
  const locale = { locale: router.locale || 'fr' };
  console.log('obj to send', { ...options, ...locale });
  return useQuery(QUERY, {
    variables: { ...options, ...locale },
  });
};
