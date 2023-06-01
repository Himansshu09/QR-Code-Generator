let imgbox = document.getElementById('imgbox');
let qr = document.getElementById('qr');
let input = document.getElementById('url');

function generateQR(){
    if(input.value.length>0){
    qr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    imgBox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000)
    }
}

// let submit = document.getElementById("submit");
// let qr = document.getElementById("qr");
// let qrimg = document.querySelector('#url').value;
// if(qrimg.length>0){
// submit.addEventListener("click", ()=>{
//     qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrimg}`;
//     imgBox.classList.add("show-img");
// })
// }