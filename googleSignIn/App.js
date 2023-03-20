
import React from 'react';
import { View , Text , Button , StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

function App() {

 const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
     console.log("--------------------userInfo" , userInfo.user.email)
    } catch (error) {
     console.log(error.message)
    }
  };





  return(
     <View style={{flex:1 , justifyContent:'center' , alignItems:'center' }}>
   
     <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}
  //disabled={this.state.isSigninInProgress}
/>

     </View>
  ); 

}



export default App;
