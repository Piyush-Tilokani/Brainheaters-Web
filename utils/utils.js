import Papers from '../public/svgs/Papers'
import Blueprints from '../public/svgs/Blueprints'
import Plans from '../public/svgs/Plans'
import Banks from '../public/svgs/Banks'
import Viva from '../public/svgs/Viva'
import Notes from '../public/svgs/Notes'
import DocumentSignedIcon from '../public/svgs/PaperSolutions'
export function Abbrivate(text){
    try{
        var matches = text.match(/\b(\w)/g); // ['J','S','O','N']
        var acronym = matches.join(''); // JSON
        return String(acronym).toUpperCase()
    }
    catch{
        return ''
    }
    
}

export const formatCurrency = (text) =>{
    let x = String(text)
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
}

export const getStudyRoomIcon = (type,color) =>{
    if(type === 'Bh.Papers & Analysis') return <Papers  size={15} color={color}/>
    else if(type === 'Bh.Blueprints') return <Blueprints   size={15} color={color}/>
    else if(type === 'Bh.Banks') return <Banks   size={15} color={color}/>
    else if(type === 'Bh.Notes') return <Notes   size={15} color={color}/>
    else if(type === 'Bh.Plans') return <Plans size={15} color={color}/>
    else if(type === 'Bh.MCQs') return <Plans size={15} color={color}/>
    else if(type === 'Bh.Viva') return <Viva size={15} color={color}/>
    if(type === 'Bh.Paper Solutions') return (<DocumentSignedIcon  width={15} height={15} color={color}/>)
    else return <Papers  size={15} color={color}/>
}

export const getDBCategoryName = (name) =>{
    const data = {
        'Bh.Notes':'notes',
        'Bh.Papers & Analysis':'papers',
        'Bh.Plans':'plans',
        'Bh.QuestionBanks':'banks',
        'Bh.VIVA':'viva',
        'Bh.Blueprints':'blueprints',
        'Bh.MCQs':'mcqs',
        'Bh.Paper Solutions':'solutions'
    }
    return data[name]
}
export const detectMobile = () =>{
    const isAndroid = navigator.userAgent.match(/Android/i);
    const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);

    if(isAndroid) return {mobile:true,os:'android'}
    if(isIOS) return {mobile:true,os:'ios'}

    return {mobile:false,os:null}
}
