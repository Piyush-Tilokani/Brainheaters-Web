
const Button = {

        baseStyle: {
            
        },

        sizes: {
            sm: {
                h: '35px',
                fontSize: '14px',
                px: '28px',
            },
            md: {
                h: '45px',
                fontSize: '14px',
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
            light: (props) => ({

                fontFamily:"Gordita-Regular",
                letterSpacing:'0.5px',
                borderRadius:'7px',
                fontSize:'12px',
                bg: props.colorMode === 'dark' ? 'dark.grey1' : 'light.grey1',
                textColor:props.colorMode === 'dark' ? 'dark.color1' : 'light.color1',
            }),
            primary:{
                bg:"accents.purple",
                textColor:"#FFF",
                fontFamily:"Gordita-Regular",
                letterSpacing:'0.5px',
                fontSize:'12px',
                _hover:{
                    bg:'accents.purple1'
                },
                borderRadius:'7px',
            },
            icon:{
                bg:"#E0E0E0",
                height:'30px',
                width:'30px',
                _hover:{
                    bg:'#D9D9D9'
                },
                borderRadius:'100px'
                
            }
        },

        defaultProps: {
            size: 'md', 
            variant: 'primary', 
    },
}
export default Button