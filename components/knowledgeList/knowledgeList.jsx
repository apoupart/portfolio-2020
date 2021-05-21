import React from 'react';
import PropTypes from 'prop-types';
import { KNOWLEDGES_LIST } from '../../gql/knowledgesList';
import KnowledgeDetailComponent from '../knowledgeDetail/knowledgeDetail';
import style from './knowledgeList.module.scss';
import { useGraphQLQuery } from '../../services/graphQl';

const KnowledgeListComponent = ({ slug }) => {
  const { loading, error, data } = useGraphQLQuery(KNOWLEDGES_LIST, {
    slug: slug || undefined,
  });
  if (loading) return <h1>Loading via KnowledgeListComponent...</h1>;
  if (error) return <h1>-Error loading data on KnowledgeListComponent</h1>;

  const sectionArray =
    data &&
    data.knowledges.map((knowledge) => (
      <div key={knowledge.slug} className={style['knowledge__single-section']}>
        <KnowledgeDetailComponent knowledge={knowledge} />
      </div>
    ));

  return (
    <section className={style['knowledge__section']} id="knowledge">
      {sectionArray}
    </section>
  );
};

KnowledgeListComponent.defaultProps = {
  slug: '',
};

KnowledgeListComponent.propTypes = {
  slug: PropTypes.string,
};

export default KnowledgeListComponent;
