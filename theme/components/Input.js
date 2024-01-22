const Input = {
        baseStyle: {},
        variants:{
            primary: (props) => ({
                field:{
                    bg:props.colorMode === 'dark' ? 'dark.background' : 'light.background',
                    focusBorderColor:'accents.purple',
                    fontFamily:"Gordita-Medium",
                    height:'42px',
                    outline: 0,
                    _focus:{
                        border:'2px solid accents.purple',
                        transition: 'all ease-in .0.1s',
                        "box-shadow": '0 0 2px accents.purple',
                    },
                    fontSize:'12px',
                    borderRadius:'7px',
                    color:props.colorMode === 'dark' ? 'dark.color1' : 'light.color1',
                    border:'1px solid #8E8E8E',
                    padding:'14px',
                    _placeholder:{
                        fontSize:'12px',
                        color:props.colorMode === 'dark' ? 'dark.color1' : 'light.color1',
                    }
                },
                element:{
                    h:'500px',
                    height:'55px'
                }
            }),
        },

        sizes: {
            md: {
                h: '67px',
                fontSize: '30px',
                px: '67px',
            },
            xl: {
                h: '60px',
                fontSize: '20px',
                px: '67px',
            },

        },

        defaultProps: {
            size: 'xl',
            variant:'primary' 
            
    },
}
export default Input