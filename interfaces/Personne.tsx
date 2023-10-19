
/* var personne1: Personne = {
    age: 28,
    prenom : "Anti" } */


    type Props = {
        name : string;
        species: string;
        }
    type Props2 = {
        size: number;
        }
    // cet objet a les props des 2 précedents  
    type Props3 = Props & Props2

    let maVariable : Props3;

    interface InterfaceProp {
        planet : string
        explode(): void
    }

    interface InterfaceProp2 extends InterfaceProp {
        gravity : number
    }

    let earth : InterfaceProp2