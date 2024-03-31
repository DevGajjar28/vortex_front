import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Cover from './Cover'
import Main from './Main'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { theme } from './helper/theme'

const UserProfile = () => {
    return (
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
          {/* <Router> */}
            {/* <Switch> */}
              {/* <Route path="/" exact> */}
                <Cover />
                <Main />
              {/* </Route> */}
            {/* </Switch> */}
          {/* </Router> */}
        </ChakraProvider>
      </SimpleBar>
    );
  };

export default UserProfile;