class BinBaum{
    BinBaum() {
        this.wurzel = new Abschluss;
    }

    istVorhanden(suchSchluessel){
        return this.wurzel.istVorhanden(suchSchluessel);
    }

    suchen(suchSchluessel){
        return this.wurzel.suchen(suchSchluessel);
    }
}

class Baumelement{
    istVorhanden(suchSchluessel){};
    suchen(suchSchluessel){};
}

class Abschluss extends Baumelement{
    Abschluss(){};
    istVorhanden(suchSchluessel){
        return null;
    }

    suchen(suchSchluessel){
        return null;
    }
}

class Knoten extends Baumelement{
    Knoten(datenNeu){
        this.daten = datenNeu;
        this.linkerNachfolger = new Abschluss;
        this.recherNachfolger = new Abschluss;
    }

    datenGeben(){
        return this.daten;
    }

    datenSetzen(datenNeu){
        this.daten = datenNeu;
    }
}