import { Body } from "../../contactes/body/Body";
import Footer from "../../contactes/footer/Footer";
import {News} from "../../pages/MainPage/sercise/Hews"

function MainPage(){
    const news = ["React","batching","batching,","concurrent,"] 
    return(
        <> 
  <Footer/>
  <Body  />
   <News news ={news}/> 
  </>
    )
}
export default MainPage 