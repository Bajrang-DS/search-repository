import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import PlansPage from '../pages/PlansPage';

import SwitchPage from '../pages/SwitchPage';
import MenuPage from '../pages/MenuPage';



export const routeConfig = [
  
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/locations',
    page: <LocationsPage verticalKey="locations" />
  },
  // {
  //   path: '/plans',
  //   page: <PlansPage verticalKey='cf-plans' />
  // },
  // {
  //   path: '/switch',
  //   page: <SwitchPage verticalKey='switch' />
  // },
  {
    path: '/menu_items',
    page: <MenuPage verticalKey='menu_items' />
  },
  
  {
    
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
   
  },
   
];
