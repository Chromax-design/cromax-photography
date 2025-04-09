import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description, url, image, author="Godskey" }) => {
  const fullTitle = title ? `${title} | Cromax` : 'Cromax';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Cromax" />
      <meta name="robots" content="index, follow" />
      <meta name='author' content={author}/>
    </Helmet>
  );
};

export default Seo;
