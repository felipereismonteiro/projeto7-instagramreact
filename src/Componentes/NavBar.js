export default function NavBar() {
    return (
        <div class="largura">
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="linha"></div>
                <img src="ArquivosUteis/logo.png" alt="instagram" />
            </div>
            <div class="search">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div class="icons">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}