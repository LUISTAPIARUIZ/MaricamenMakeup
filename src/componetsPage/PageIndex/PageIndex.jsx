import Slidermain from '../../components/SliderMain/Slidermain.jsx';
import Worlinfo from '../../components/workInfo/Workinfo.jsx';
import PersonInfo from '../../components/PersonInfo/Personinfo.jsx';
import WorkGalery from "../../components/WorkGalery/Workgalery.jsx";
import MarkInfo from "../../components/MarkInfo/Markinfo.jsx";
import './style.css';


const Pageindex =(props)=>{
    return(
        <div className='pageIndex'>
          <Slidermain/>
          <Worlinfo selectPage={props.selectPage}/>
          <PersonInfo selectPage={props.selectPage}/>
          <WorkGalery/> 
          <MarkInfo/>
        </div>
    )
}
export default Pageindex
