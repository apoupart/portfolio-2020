class SkipToSectionService {
  getCordinateById(id) {
    if (this.hasWindowAvailable) {
      const element = window.document.getElementById(id);
      return element?.offsetTop || 0;
    }
    return 0;
  }

  skipToSection(sectionName) {
    if (this.hasWindowAvailable()) {
      window?.scrollTo({
        top: this.getCordinateById(sectionName),
        behavior: 'smooth',
      });
    }
  }

  hasWindowAvailable = () => typeof window !== 'undefined' && window;
}

export default new SkipToSectionService();
