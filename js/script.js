const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=>{
    const li = item.parentElement;
    item.addEventListener('click', function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    })
});


//TOGGLE BAR

const menuBar = document.querySelector('#content nav .bx.bx-menu-alt-left');
const sidebar = document.getElementById('sidebar')

menuBar.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
});

//TOGGLE BAR

// SCREEN SCALE
if(window.innerWidth < 870){
    sidebar.classList.add('hide');
}else{
    sidebar.classList.remove('hide')
};

// Check sidebar state on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth < 870) {
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.remove('hide');
    }
});

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');


searchButton.addEventListener('click', function(e){
    if(window.innerWidth < 523){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchButtonIcon.classList.replace('bx-search-alt-2','bx-x');
        }else{
            searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
        }
    }
});

// searchButton.addEventListener('click', function(e){
//     if(window.innerWidth < 523){
//         e.preventDefault();
//         searchForm.classList.toggle('show');
//         if(searchForm.classList.contains('show')){
//             searchButtonIcon.classList.replace('bx-search-alt-2', 'bx-x');
//         }else{
//             searchButtonIcon.classList.replace('bx-x', 'bx-search-alt-2');
//         }
// });

// SCREEN SCALE

document.getElementById('downloadBtn').addEventListener('click', function () {
    downloadPDF();
  });
  
function downloadPDF() {
const element = document.getElementById('dashboardContent'); // Thay 'dashboardContent' bằng ID của container dashboard

html2pdf(element, {
    margin: 10,
    filename: 'dashboard.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
});
}










































