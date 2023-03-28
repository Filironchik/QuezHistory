import './Style.css';
import CardQuiz from '../../components/CardQuiz'

//import imglight from './temp/imgLight.png'
//import imgDark from './temp/imgDark.png'

const lightDescription = "This is a description of a light card of an interesting quiz";
const darkDescription = "This is a description of a dark card of an interesting quiz";

export default function Catalog() {
  return (
    <div className="wrapper__catalog">
      {/* <CardQuiz id='card1' img={imglight} title='Title light' description={lightDescription} tag='quiz' />
      <CardQuiz id='card2' img={imgDark} title='Title dark' description={darkDescription} tag='quiz' />*/}
    </div>
  );
}
