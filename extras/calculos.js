function calcular() {
    // verificacion
    let verificar = document.getElementById("EdadElla").value
    let verificar2 = document.getElementById("EdadEl").value
    let Mujer = parseInt(document.getElementById("EdadElla").value)
    let Hombre = parseInt(document.getElementById("EdadEl").value)
    
    // Con Esto limpia el formulario si ingresa todo mal o le faltan cosas
    document.getElementById('retextearTitulo').innerHTML=''
    document.getElementById('retextearMensaje').innerHTML= ''
    document.getElementById('musica').innerHTML=''

    // Si se olvida uno de los campos o ambos decirle que los complete vivo de mierda.
    if (!verificar || !verificar2){
        document.getElementById('retextearTitulo').innerHTML='<h1>completa los datos geni@</h1>'
        return ""
    }
    // Si pones una edad muy chica
    if ((Hombre <=12) || (Mujer <=12) ){
        document.getElementById('retextearTitulo').innerHTML='<h1>demasiado menor! Retirese Padre/Madre Grassi. Nada justifica sus pecados</h1>'
        return ""
    }
    // Si estan completos vienen los casos
    else {
    // Mujer muy menor FBI OPEN UP
    if (Mujer <=15){
        document.getElementById('musica').innerHTML='<video src="./extras/FBI.mp4" autoplay />'
        return null
    }
    // Mujer en edad cuasi legal ver respecto de la edad del otro
    // Estaria bueno agregarle el "width: 100% height:auto" para un video responsive pero ya fue
    if (Mujer <= 17 && Hombre <=17){
        document.getElementById('musica').innerHTML='<video src="./extras/cuidadito.mp4" autoplay/>'
        return null
    }
    // bardeaste capo tenes mas de 18
    if (Mujer <= 17){
        document.getElementById('retextearTitulo').innerHTML='<h1>ROBACUNAS!!! ROBACUNAS!!!</h1>'
        document.getElementById('retextearMensaje').innerHTML= '<img src="./extras/policia.jpg" class="img-fluid">'
        document.getElementById('musica').innerHTML='<audio controls autoplay> \
                                                    <source src="./extras/policia.mp3" type="audio/mpeg"> \
                                                    </audio>'
        return console.log("ROBACUNAS")
    }
    // Si ella es mayor
    if (Mujer>= (Hombre+10) ) {
        document.getElementById('retextearTitulo').innerHTML='<h1>O vos buscas una madre o Ella busca un hijo</h1>'
        return null
    }
    // Los casos no especiales se calculan con la formula
    let edadTeorica = (Hombre/2)+7
    if (Mujer <= edadTeorica){
        document.getElementById('retextearTitulo').innerHTML='<h1>ROBACUNAS!!! ROBACUNAS!!!</h1>'
        document.getElementById('retextearMensaje').innerHTML= '<img src="./extras/policia.jpg" class="img-fluid">'
        document.getElementById('musica').innerHTML='<audio controls autoplay> \
                                                    <source src="./extras/policia.mp3" type="audio/mpeg"> \
                                                    </audio>'
        return console.log("ROBACUNAS")
    }
    document.getElementById('retextearTitulo').innerHTML='<h3>Todo en orden capo</h3>'
    document.getElementById('retextearMensaje').innerHTML='<img src="./extras/Feliz.jpg" class="img-fluid">'
    return console.log("proceda")
    }
}