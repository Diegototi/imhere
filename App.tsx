import {Home} from './src/screens/Home'; //por padrao inicia no arquivo index
import { StatusBar } from 'react-native' 

export default function App() {
  return (
    <>
    <StatusBar
     barStyle= "light-content"
     backgroundColor= 'transparent'
     translucent
     
     />
    <Home />
    </>
   );
}