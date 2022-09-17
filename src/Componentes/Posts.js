import React from "react"

export default function Posts() {
    let clickedLike = false
    let clickedSaved = false

    const array = [
        {
            src: "assets/img/meowed.svg",
            name: "meowed",
            content: "assets/img/gato-telefone.svg",
            likedSrc: "assets/img/respondeai.svg",
            people: "respondeai",
            number: 101523
        },
        {
            src: "assets/img/barked.svg",
            name: "barked",
            content: "assets/img/dog.svg",
            likedSrc: "assets/img/adorable_animals.svg",
            people: "adorable_animals",
            number: 99159
        }
    ]

    function Acoes(props) {     
        const [saved, setSaved] = React.useState("bookmark-outline")
        const [number, setNumber] = React.useState(props.number)
        const [heart, setHeart] = React.useState(("heart-outline"))
        

        function like() {
            if (clickedLike === false) {
                clickedLike = true
                setNumber(props.number + 1)
                setHeart("heart")
            } else{
                clickedLike = false
                setNumber(props.number)
                setHeart("heart-outline")
            }
        }

        function save() {
            if (clickedSaved === false) {
                clickedSaved = true
                setSaved("bookmark")
            } else{
                clickedSaved = false
                setSaved("bookmark-outline")
            }
            
        }

        return (
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={heart} onClick={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={saved} onClick={save} ></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.likedSrc} />
                    <div class="texto">
                        Curtido por <strong>{props.people}</strong> e <strong>outras {number.toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>
            </div>
        )
    }

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

            <Acoes likedSrc={props.likedSrc} people={props.people} number={props.number} />
        </div>)

    return (
        <>
            {post}
        </>
    )
}