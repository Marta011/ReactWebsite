import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Cards extends React.Component {
   render() {
      return (
         <div className="row mt-5">
            <Card title="Psy" content="Udomowiona forma wilka szarego, ssaka drapieżnego z rodziny psowatych, uznawana przez niektórych za podgatunek wilka, a przez innych za odrębny gatunek, opisywany pod synonimicznymi nazwami Canis lupus familiaris lub Canis familiaris."/>
            <Card title="Koty" content="Udomowiony gatunek ssaka z rzędu drapieżnych z rodziny kotowatych. Koty zostały udomowione około 9500 lat temu i są obecnie najpopularniejszymi zwierzętami domowymi na świecie. Gatunek ten prawdopodobnie pochodzi od kota nubijskiego, przy czym w Europie krzyżował się ze żbikiem." />
            <Card title="Papugi" content="Papuga długoogonowa to jeden z wielu małych i średnich gatunków papugi, w wielu rodzajach, które zwykle mają długie ogony. Starsze pisowni, które wciąż występują, to parkiet lub parkiet. W amerykańskim angielskim słowo papuga zwykle oznacza papużkę falistą." />
         </div>
      );
   }
}
class Card extends React.Component {
   render() {
      return (
        <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
                <h4 className="card-header">{this.props.title}</h4>
                <div className="card-body">
                  <p className="card-text">{this.props.content}</p>
                </div>
                <div className="card-footer">
                  <Button variant="btn btn-primary">Zobacz więcej</Button>
                </div>
            </div>
        </div>
      );
   }
}
export default Cards;