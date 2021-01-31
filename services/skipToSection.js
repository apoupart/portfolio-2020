import { hasWindowAvailable } from './utils';

export const getCordinateById = (id) => {
  if (hasWindowAvailable) {
    const element = window.document.getElementById(id);
    return element?.offsetTop || 0;
  }
  return 0;
};

export const skipToSection = (sectionName) => {
  if (hasWindowAvailable) {
    window?.scrollTo({
      top: getCordinateById(sectionName),
      behavior: 'smooth',
    });
  }
};
