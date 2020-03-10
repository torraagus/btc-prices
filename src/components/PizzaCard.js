import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap';

export function PizzaCard({ data, setOrdered}) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-contnt-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className="mb-1" variant="warning">
                        ${data.price}
                    </Badge>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    onClick={() => setOrdered()}
                    className="mt-auto font-weight-bold"
                    varian="success"
                    block
                >
                    Pedir Pizza
                </Button>
            </Card.Body>
        </Card>
    )
}

