import React from "react";
import { useLocation } from "@docusaurus/router";
import { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { mergeSearchStrings, useHistorySelector } from "@docusaurus/theme-common";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import IconLanguage from "@theme/Icon/Language";

import styles from "./styles.module.css";

function ensureTrailingSlash(value) {
  if (!value) {
    return "/";
  }

  return value.endsWith("/") ? value : `${value}/`;
}

function stripBaseUrl(pathname, currentBaseUrl) {
  if (pathname.startsWith(currentBaseUrl)) {
    return pathname.slice(currentBaseUrl.length);
  }

  return pathname.replace(/^\/+/, "");
}

function useLocaleDropdownUtils() {
  const {
    siteConfig,
    i18n: { currentLocale, defaultLocale, localeConfigs }
  } = useDocusaurusContext();
  const { pathname } = useLocation();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const getLocaleConfig = (locale) => {
    const localeConfig = localeConfigs[locale];

    if (!localeConfig) {
      throw new Error(`No locale config found for locale=${locale}`);
    }

    return localeConfig;
  };

  const getLocaleBaseUrl = (locale) => {
    const localeConfig = getLocaleConfig(locale);

    if (localeConfig.baseUrl) {
      return ensureTrailingSlash(localeConfig.baseUrl);
    }

    const rootBaseUrl = ensureTrailingSlash(siteConfig.baseUrl);

    return locale === defaultLocale ? rootBaseUrl : `${rootBaseUrl}${locale}/`;
  };

  // Docusaurus' default locale dropdown can re-append the locale segment
  // under GitHub Pages-style base URLs when users switch languages repeatedly.
  const currentBaseUrl = getLocaleBaseUrl(currentLocale);
  const normalizedPathname = ensureTrailingSlash(pathname);
  const pathnameSuffix = stripBaseUrl(normalizedPathname, currentBaseUrl);

  const buildLocalePath = (locale) => `${getLocaleBaseUrl(locale)}${pathnameSuffix}`;

  return {
    getURL: (locale, options) => {
      const localeConfig = getLocaleConfig(locale);
      const localeUrl = localeConfig.url ?? siteConfig.url;
      const isSameDomain = localeUrl === siteConfig.url;
      const targetPath = buildLocalePath(locale);
      const finalSearch = mergeSearchStrings([search, options.queryString], "append");
      const baseTarget = isSameDomain ? `pathname://${targetPath}` : `${localeUrl}${targetPath}`;

      return `${baseTarget}${finalSearch}${hash}`;
    },
    getLabel: (locale) => getLocaleConfig(locale).label,
    getLang: (locale) => getLocaleConfig(locale).htmlLang
  };
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString,
  ...props
}) {
  const utils = useLocaleDropdownUtils();
  const {
    i18n: { currentLocale, locales }
  } = useDocusaurusContext();

  const localeItems = locales.map((locale) => ({
    label: utils.getLabel(locale),
    lang: utils.getLang(locale),
    to: utils.getURL(locale, { queryString }),
    target: "_self",
    autoAddBaseUrl: false,
    className:
      locale === currentLocale
        ? mobile
          ? "menu__link--active"
          : "dropdown__link--active"
        : ""
  }));

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  const dropdownLabel = mobile
    ? translate({
        message: "Languages",
        id: "theme.navbar.mobileLanguageDropdown.label",
        description: "The label for the mobile language switcher dropdown"
      })
    : utils.getLabel(currentLocale);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
