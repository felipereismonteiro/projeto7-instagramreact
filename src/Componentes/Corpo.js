import SideBar from "./SideBar"
import Esquerda from "./Esquerda"

export default function Corpo() {
    return (
        <>
            <div className="corpo">
                <Esquerda />
                <SideBar />
            </div>
        </>
    )
}