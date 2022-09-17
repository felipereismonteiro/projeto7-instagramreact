import React from "react"



export default function Usuario() {

    const [nomeUser, setNomeUser] = React.useState("Catana")
    const [imgUser, setImgUser] = React.useState("assets/img/catanacomics.svg")

    return (
        <>
            <div class="usuario">
                <img src={imgUser} onClick={() => setImgUser(prompt("Digite o url da imagem desejada:")) } />
                <div class="texto">
                    <strong>{nomeUser}</strong>
                    <span>
                        {nomeUser}
                        <ion-icon onClick={() => setNomeUser(prompt("Digite o nome desejado:")) } name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        </>
    )
}