import React from "react"

export default function Posts() {
    const array = [
        {
            src: "assets/img/meowed.svg",
            name: "meowed",
            content: "assets/img/gato-telefone.svg",
            likedSrc: "assets/img/respondeai.svg",
            people: "respondeai",
            number: "101.523",
            liked: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"
        },
        {
            src: "assets/img/barked.svg",
            name: "barked",
            content: "assets/img/dog.svg",
            likedSrc: "assets/img/adorable_animals.svg",
            people: "adorable_animals",
            number: "99.159",
            liked: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"
        }
    ]

    const post = array.map((props) =>
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.src} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.content} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedSrc} />
                    <div class="texto">
                        Curtido por <strong>{props.people}</strong> e <strong>outras {props.number} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)

    return (
        <>
            {post}
        </>
    )
}