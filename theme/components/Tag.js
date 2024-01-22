const Tag = {

        baseStyle: {
            bg:'purple',
            backgroundColor:'red',
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
                px: '20px',
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
            gray:{
                bg:"purple",
                textColor:"#FFF",
                fontFamily:"Gordita-Regular",
                letterSpacing:'0.5px',
                _hover:{
                    bg:'#584CB6'
                },
                borderRadius:'7px',
            },
        },

        defaultProps: {
            size: 'md', 
            variant:"gray"
          
    },
}
export default Tag