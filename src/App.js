import React, {PureComponent} from 'react';
import {Container} from "reactstrap";

import ItemsList from "./ItemsList";

class App extends PureComponent {
  render () {
     return (
       <Container>
         <ItemsList/>
       </Container>
     );
  }
}

export default App;
