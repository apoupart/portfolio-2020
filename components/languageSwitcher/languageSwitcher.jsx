import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './languageSwitcher.module.scss';

const LanguageSwitcherComponent = () => {
  const router = useRouter();
  const getOtherLocal = router.locales.filter(
    (local) => local !== router.locale
  );

  return (
    <Link href={getOtherLocal[0]} locale={getOtherLocal[0]}>
      <a>{getOtherLocal}</a>
    </Link>
  );
};

LanguageSwitcherComponent.propTypes = {};

export default LanguageSwitcherComponent;
