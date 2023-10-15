btndisplay=(e)=>{
    const pTag = document.getElementById("pTag");
    if (pTag.style.display === 'none' || pTag.style.display === '') {
        pTag.style.display = 'block';
    } else {
        pTag.style.display = 'none';
    }
}