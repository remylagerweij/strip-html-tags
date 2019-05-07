const stripHtmlTags = (str) => {
  let content = str;
  if (content === null || content === '') return false;
  content = content.toString();
  return content.replace(/<[^>]*>/g, '');
};

export default stripHtmlTags;
