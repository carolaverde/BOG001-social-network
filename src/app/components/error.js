export function error (){
    const $error = document.createElement("img");
    $error.alt = "imagen error";
    $error.src = "./app/assets/img/error404.png";
    $error.classList.add("error");
    
  

    return $error;
};