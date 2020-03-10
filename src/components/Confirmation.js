import React from 'react'
import { Toast } from 'react-bootstrap';
/*export default class Confirmation extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}*/

export function Confirmation({ toggle }) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Tu pedido está en el horno</strong>
                <small>Hace unos segundos</small>
            </Toast.Header>
            <Toast.Body>
                Tu pizza estará lista en 30 minutos!
            </Toast.Body>
        </Toast>
    )
}
