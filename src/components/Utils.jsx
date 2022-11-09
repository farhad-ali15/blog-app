export    function makeTitle(slug) {
    var words = slug.split('-');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    return words.join(' ');
  }

  export function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

  export function convertToSlug(Text) {
    return Text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
  }
