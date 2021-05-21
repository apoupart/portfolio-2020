import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './languageSwitcher.module.scss';

const LanguageSwitcherComponent = () => {
  const { asPath, locale, locales } = useRouter();
  const getOtherLocal = locales.filter((local) => local !== locale);

  console.log('router!!-', asPath);

  return (
    <Link href={asPath} locale={getOtherLocal[0]}>
      <a>{getOtherLocal}</a>
    </Link>
  );
};

LanguageSwitcherComponent.propTypes = {};

export default LanguageSwitcherComponent;
