import { Card } from 'primereact/card';
export default function Projets (){
    return(
        <div>
             <Card title="Projet PFA - Année : 2022" style={{width:'70%', margin:'auto'}}>
                    <p className="m-0">
                        <ul>
                            <li>Le projet JDM c'est un site web qui gère la location de voitures en ligne</li>
                            <li><strong>Technologie : </strong>Django, MySQL</li>
                        </ul>        
                    </p>
            </Card>

            <Card title="Projet JAVA - Année : 2023" style={{width:'70%', margin:'auto',  marginTop:'20px'}}>
                    <p className="m-0">
                        <ul>
                            <li>la mise en place d'une application desktop pour la gestion des patients</li>
                            <li><strong>Technologie : </strong>JAVA SE, MySQL, Swing</li>
                        </ul>        
                    </p>
            </Card>

            <Card title="Projet PFA - Année : 2023" style={{width:'70%', margin:'auto',  marginTop:'20px'}}>
                    <p className="m-0">
                        <ul>
                            <li>Le projet FFRM c'est un site web qui gère la reservation des terrains en ligne</li>
                            <li><strong>Technologie : </strong>Django, SQLite, React</li>
                        </ul>        
                    </p>
            </Card>
          
        </div>
    );
}