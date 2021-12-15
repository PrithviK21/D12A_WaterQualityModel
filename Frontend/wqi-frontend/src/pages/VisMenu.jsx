import React from "react";
import { Card, Button } from "react-bootstrap";

function VisMenu() {
  return (
    <div>
      <div className="menu-container">
        <div className="menu-item">
          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </Card.Subtitle>
              <Button>Button</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="menu-item">
          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </Card.Subtitle>
              <Button>Button</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="menu-item">
          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </Card.Subtitle>
              <Button>Button</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="menu-item">
          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </Card.Subtitle>
              <Button>Button</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default VisMenu;
