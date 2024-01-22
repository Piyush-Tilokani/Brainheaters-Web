import { Button, LightMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './css/ContentNotAvailable.module.css'
import { BsDot } from 'react-icons/bs'
import Arc1 from '../public/svgs/Arc1'
import * as utils from '../utils/utils'
import Arc2 from '../public/svgs/Arc2'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAxios from './useAxios'

function ContentNotAvailable() {
    const router = useRouter()
    const axios = useAxios()
    const [count, setcount] = useState(0)

    useEffect(() => {
        fetchCount()
    }, [])
    
    const fetchCount = async() =>{
        const response = await axios.post('/extra/stats')
        console.log(response.data)
        setcount(response.data)
    }

  return (
    <LightMode>
        <div className={styles.container}>
            <div/>
            <div className={styles.content}>
                <img className={styles.logo} src='/images/bhapplogo.png'/>
                <div className='bold f24 lcb'>Check in our App</div>
                <div style={{marginTop:'5px'}} className='medium f12 lg2'>The Page/Content/Features you’re looking is currently visible in App</div>
                <Button
                    onClick={{}}
                    backgroundColor='#FFF'
                    _hover={{backgrounColor:'#FFF'}}
                    style={{marginTop:'20px',marginTop:'25px',alignSelf:'left',borderRadius:100,minWidth:'180px',height:'40px'}}
                    variant={'primary'}>
                        <div className='regular f12 purple'>Open Brainheaters App</div>
                </Button>  
                <div style={{marginTop:'12px'}} className='flex align-c'>
                    <BsDot color='#FF9971' size={30}/>
                    <div  className='medium f12 lg2'>{utils.formatCurrency(count)} Students Active!</div>
                </div>
            </div>
            <div className='flex align-c'>
                <img onClick={()=>router.replace('https://play.google.com/store/apps/details?id=com.brainheaters&hl=en_IN&gl=US')} className={styles.store_icons} src='/images/googleplay.png'/>
                <img onClick={()=>router.replace('https://apps.apple.com/in/app/brainheaters/id1599667059')} className={styles.store_icons} src='/images/appstore.png'/>
            </div>

            <div className={styles.box}/>
            <div className={styles.box2}/>
            <div className={styles.box3}/>
            <Arc1 color={'#8579DC'} className={styles.arc1}/>
            <Arc2 color={'#8579DC'} className={styles.arc2}/>
        </div>

    </LightMode>
  )
}

export default ContentNotAvailable