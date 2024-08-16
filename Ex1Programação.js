function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15

    msg.innerHTML = `Agora são ${hora}h`
    if (hora >= 6 && hora < 12)
    {
        img.src = 'Morning.png'
        document.body.style.background = '#52acd9'
    } 
    else if (hora >= 12 && hora < 18)
    {
        img.src = 'Afternoon.png'
        document.body.style.background = '#ff9e42'
    } 
    else
    {
        img.src = 'Night.png'
        document.body.style.background = '#0f0f1c'
    }
}
