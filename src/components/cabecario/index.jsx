import { Container } from "./styled"
import { InstagramV } from "../../assets/images";

export default function Cabeçario() {
    return (
        <Container>
            <header>

                <a href="#" className="logo">R<span>D</span>W</a>

                <div >
                    <a href="https://instagram.com/lamarcareidowin?igshid=YmMyMTA2M2Y="><img className="insta" src={InstagramV} alt="" /></a>
                </div>

            </header>
        </Container>

    )
}