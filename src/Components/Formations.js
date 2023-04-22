import { Card } from 'primereact/card';
export default function Formations(){
    return(
        <div>

           <Card title="2ème Année Bac - Année: 2019" style={{width:'70%', margin:'auto'}}>
                <p className="m-0">
                <strong>Ecole : </strong>Lycée le cèdre données. <br/>
                  
               <strong>filière : </strong> Science Physique Chimie            
                 </p>
            </Card>

            <Card title="Cycle Ingénieur (En Cours) - Année: (2019 - 2023)" style={{width:'70%', margin:'auto', marginTop:'20px'}}>
                <p className="m-0">
                <strong>Ecole : </strong> Ecole Marocaine Des Sciences de l'Ingenieur (EMSI MARRAKECH)          
                 </p>
            </Card>
        </div>
    );
}