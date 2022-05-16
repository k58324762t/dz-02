import { FooterContact } from "./FooterContact"
import c from './Footer.module.css'

function Footer(){
    return(
    <div className={c.background}>
    <h1 className={'c.marginr-50px'}>News.kg</h1>
    <FooterContact/>
    </div>
    )
}

export default Footer
