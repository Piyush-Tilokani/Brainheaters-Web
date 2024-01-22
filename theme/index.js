import { extendTheme } from '@chakra-ui/react'
import Button from '../theme/components/Button'
import Input from '../theme/components/Input'
import Textarea from '../theme/components/Textarea'
import Select from '../theme/components/Select'
import colors from './colors'


const overrides = {
  colors,

  components: {
    Button,
    Input,
    Textarea,
    
  },

  config:{
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
}

export default extendTheme(overrides)
