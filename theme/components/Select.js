
const Select = {

        baseStyle: {
            
            bg:"accents.purple",
            textColor:"#FFF",
            fontFamily:"Gordita-Regular",
            letterSpacing:'0.5px',
            _hover:{
                bg:'accents.purple1'
            },
            borderRadius:'7px',
          
        },

        sizes: {
            sm: {
                h: '35px',
                fontSize: '14px',
                px: '28px',
          },
            md: {
                h: '55px',
                fontSize: '16px',
                px: '30px',
            },
            lg: {
                h: '75px',
                fontSize: '32px',
                px: '32px',
            },
            icon: {
                h: '30px',
                px: '30px',
            },
        },

        variants: {
            filled:{
                bg:"accents.purple",
                textColor:"#FFF",
                fontFamily:"Gordita-Regular",
                letterSpacing:'0.5px',
                _hover:{
                    bg:'accents.purple1'
                },
                borderRadius:'7px',
            
            
            },
        },

        defaultProps: {
            size: 'md', 
   
    },
}
export default Select