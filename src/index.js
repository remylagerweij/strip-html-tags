const stripHtmlTags = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.toString().replace(/<[^>]*>/g, '');
};

export default stripHtmlTags;
