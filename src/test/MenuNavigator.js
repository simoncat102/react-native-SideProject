const MenuNavigator = createDrawerNavigator({
    HomeView: {
      screen: HomeView,
      
    },
    // SecondScreen: {
    //   screen: SecondScreen,
    // }  
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'HomeView',
    drawerBackgroundColor: 'white',
    drawerWidth: 200,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#2EB6AE',
      inactiveTintColor: '#939393',
    }
    
  });