import { Container } from "./styled"
import { Instagram } from "../../assets/images";

export default function Cabeçario() {
    return (
        <Container>
            <header>
               
                <a href="/" className="logo">R<span>D</span>W</a>

                <div >
                    <a href="https://instagram.com/lamarcareidowin?igshid=YmMyMTA2M2Y=" target="_blank"><img className="insta" src={Instagram} alt="" /></a>
                </div>

            </header>
        </Container>

    )
}