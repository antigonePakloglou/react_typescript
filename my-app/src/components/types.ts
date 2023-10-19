type Personne = {
    age: number
    prenom: string
    nom: string
}

type Vaccin = {
    nom: string
    dateDelivrance: string
}

type Animal = {
    nom: string
    espece: Espece
    vaccins: Vaccin[]
}

enum Espece {
    CHIEN = "chien",
    CHAT  = "chat",
    OISEAU = "oiseau",
    POISSON = "poisson",
  }

type Maitre =  Personne & { animal : Animal}

type Dossier = Partial<Animal> &
 Pick<Animal, "espece"> & 
 Partial<Personne> &
 Pick<Personne, "nom" | "prenom">

 //T represente un type de donnée
type DataElement<T> = null | T
let test : DataElement<string> = null
