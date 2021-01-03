import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { KNOWLEDGES_LIST } from '../../gql/knowledgesList';
import KnowledgeDetailComponent from '../knowledgeDetail/knowledgeDetail';
import style from './knowledgeList.module.scss';

const KnowledgeListComponent = ({ slug }) => {
  const { loading, error, data } = useQuery(KNOWLEDGES_LIST, {
    variables: { slug: slug || undefined },
  });
  if (loading) return <h1>Loading via KnowledgeListComponent...</h1>;
  if (error) return <h1>-Error loading data on KnowledgeListComponent</h1>;

  return (
    data &&
    data.knowledges.map((knowledge) => (
      <>
        <KnowledgeDetailComponent knowledge={knowledge} />
      </>
    ))
  );
};

KnowledgeListComponent.defaultProps = {
  slug: '',
};

KnowledgeListComponent.propTypes = {
  slug: PropTypes.string,
};

export default KnowledgeListComponent;
