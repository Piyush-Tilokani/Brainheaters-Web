const Textarea = {

        baseStyle: {},
        variants:{
            primary: (props) => ({
    
                bg:props.colorMode === 'dark' ? 'dark.background' : 'light.background',
                focusBorderColor:'accents.purple',
                fontFamily:"Gordita-Medium",
                outline: 0,
                padding:'12px 0px 0px 12px',
                _focus:{
                    border:'2px solid accents.purple',
                    transition: 'all ease-in .0.1s',
                    "box-shadow": '0 0 2px accents.purple',
                },
                fontSize:'12px',
       
                color:props.colorMode === 'dark' ? 'dark.color1' : 'light.color1',
                border:'1px solid #8E8E8E',
                
                _placeholder:{
                    fontSize:'12px',
                    color:props.colorMode === 'dark' ? 'dark.color1' : 'light.color1',
                }

            }),
        },

        sizes: {
            md: {
                h: '67px',
                fontSize: '30px',
                px: '67px',
            },
        

        },

        defaultProps: {
      
            variant:'primary' 
            
    },
}
export default Textarea