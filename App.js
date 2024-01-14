import {createStackNavigator} from 'react-navigation-stack' ;
import {createAppContainer} from 'react-navigation' ;
import IndexScreen from './src/screens/IndexScreen';
import React  from 'react' ;
import { BlogProvider } from './src/screens/context/BlogContext'; 
const navigator = createStackNavigator(
  {
    Index : IndexScreen
  },
  {
    initialRouteName : 'Index',
    defaultNavigationOptions: {
      title : 'Blogs'
    }
  }
)  ;

//export default createAppContainer(navigator) ;
 const App =createAppContainer(navigator) ;
 //export default App ;
 //app is a child for BlogProvider, which contains  stack navigator and all App COMPONENTS
 export default ( ) =>
 {
  return ( 
     <BlogProvider>
           <App/>
    </BlogProvider> 
    ) ;
 } ;


 