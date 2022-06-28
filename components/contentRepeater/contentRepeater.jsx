import React from 'react';
import PropTypes from 'prop-types';
import HeaderBannerComponent from '../headerBanner/headerBanner';
import AboutMeComponent from '../aboutMe/aboutMe';
import ProjectsSectionComponent from '../../sections/projects/projectSection';
import ItemsList from '../itemsList/itemsList';

const ContentRepeaterComponent = ({ data }) =>
  data?.slices.map((componentData) => {
    let component = <></>;
    switch (componentData.slice_type) {
      case 'primary_header':
        component = <HeaderBannerComponent data={componentData.primary} />;
        break;
      case 'terminal_content':
        component = (
          <AboutMeComponent
            description={componentData.primary.description || ''}
          />
        );
        break;
      case 'project_list':
        component = <ProjectsSectionComponent />;
        break;
      case 'items_list':
        component = (
          <ItemsList
            title={componentData.primary.title}
            icon={componentData.primary.icon}
            items={componentData.items}
          />
        );
        break;
      default:
        console.warn('components not found for', componentData.slice_type);
        break;
    }
    return component;
  });

ContentRepeaterComponent.defaultProps = {
  data: [{}],
};

ContentRepeaterComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default ContentRepeaterComponent;
