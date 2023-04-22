import { Avatar } from 'primereact/avatar';
import { TabView, TabPanel } from 'primereact/tabview';
        
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import './App.css';
import Accueil from './Components/Accueil';
import Formations from './Components/Formations';
import Experiences from './Components/Experiences';
import Projets from './Components/Projets';
import Certifications from './Components/Certifications';

import image from './image/PortfolioProfile.png'

function App() {
  return (
    <div className="card">
  <Avatar size="xlarge" shape="circle"  style={{width:250,height:250, display:'block',marginLeft:'auto', marginRight: 'auto'}}>
      <img src={image} alt='testing'/>
    </Avatar>
    <h1 style={{textAlign:'center'}}>Abdelhak Akram</h1>
    <h2 style={{textAlign:'center'}}>ingénieur informatique et réseaux</h2>

      <TabView>
    <TabPanel header="Accueil" leftIcon="pi pi-home mr-2">

         <Accueil />

    </TabPanel>

    <TabPanel header="Formations" leftIcon="pi pi-file ml-2">

      <Formations />
    </TabPanel>

    <TabPanel header="Expériences" leftIcon="pi pi-search mr-2">
      <Experiences />
    </TabPanel>

    <TabPanel header="Projets" leftIcon="pi pi-user mr-2">
      <Projets />
    </TabPanel>

    <TabPanel header="Certifications" leftIcon="pi pi-file mr-2">
      <Certifications />
    </TabPanel>
</TabView>   

<footer style={{textAlign: 'center', marginBottom:'15px'}}>

  <p>Contactez-moi : <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'> abdelhakakram79@gmail.com</a></p>
  
  <span className='pi pi-github'> 
  
  <a href='https://github.com/AB-Akram' target='_blank'>AB-Akram</a>
  <span className='pi pi-linkedin'><a href='https://www.linkedin.com/in/akram-abdelhak-ba13b4238/' target='_blank'>akram abdelhak</a></span>
  
  </span>

</footer>

 </div>
  );
}

export default App;
