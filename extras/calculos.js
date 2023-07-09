function calcular() {
    document.getElementById('retextearTitulo').innerHTML=''
    document.getElementById('retextearMensaje').innerHTML= ''
    document.getElementById('musica').innerHTML=''
    let verificar = document.getElementById("EdadElla").value
    let Mujer = parseInt(document.getElementById("EdadElla").value)
    let Hombre = parseInt(document.getElementById("EdadEl").value)

    if (!verificar){
        document.getElementById('retextearTitulo').innerHTML='<h1>completa los datos geni@</h1>'
        return ""
    }
    else {
    if (Mujer <= 17){
        document.getElementById('retextearTitulo').innerHTML='<h1>ROBACUNAS!!! ROBACUNAS!!!</h1>'
        document.getElementById('retextearMensaje').innerHTML= '<img src="./extras/Policia.jpg" class="img-fluid">'
        document.getElementById('musica').innerHTML='<audio controls autoplay> \
                                                    <source src="./extras/Policia.mp3" type="audio/mpeg"> \
                                                    </audio>'
        return console.log("ROBACUNAS")

    }
    
    let edadTeorica = (Hombre/2)+7
    if (Mujer <= edadTeorica){
        document.getElementById('retextearTitulo').innerHTML='<h1>ROBACUNAS!!! ROBACUNAS!!!</h1>'
        document.getElementById('retextearMensaje').innerHTML= '<img src="./extras/Policia.jpg" class="img-fluid">'
        document.getElementById('musica').innerHTML='<audio controls autoplay> \
                                                    <source src="./extras/Policia.mp3" type="audio/mpeg"> \
                                                    </audio>'
        return console.log("ROBACUNAS")
    }
    document.getElementById('retextearTitulo').innerHTML='<h3>Todo en orden capo</h3>'
    document.getElementById('retextearMensaje').innerHTML='<img src="./extras/Feliz.jpg" class="img-fluid">'
    return console.log("proceda")
    }
}
