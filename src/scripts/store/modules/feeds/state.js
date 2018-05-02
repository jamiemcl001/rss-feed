export default (window.localStorage.getItem('feeds') && JSON.parse(window.localStorage.getItem('feeds'))) 
    || [];
