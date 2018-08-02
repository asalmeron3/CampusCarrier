import React from 'react';
import { Menu, Icon, Responsive, Image} from 'semantic-ui-react';

var NavComponent = (props) => 
<div id = "topOfPage">
  <Responsive minWidth = {Responsive.onlyMobileinWidth}>
    <Menu borderless pointing >
      <Menu.Item style = {{"margin":"auto"}}>

        <Icon.Group size='huge'> 
          <Image src = "%PUBLIC_URL%/CampusCarriersLogo.png" size ="small" href ="/" />
        </Icon.Group>

      </Menu.Item>
     
    </Menu>
  </Responsive>

</div>



export default NavComponent;
      