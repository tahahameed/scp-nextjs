import $ from 'jquery';

var showLoading = () => {
    $('.loadding').show();
}

var hideLoading = () => {
    $('.loadding').hide();
}

// var toggleSidebar = () => {
//   return !sideBar;
// }

export {showLoading, hideLoading};