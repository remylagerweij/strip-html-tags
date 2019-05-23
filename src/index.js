const stripHtmlTags = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.replace(/<[^>]*>/g, '');
};

export default stripHtmlTags;
