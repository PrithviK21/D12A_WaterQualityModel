import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
function VisMenu() {
  return (
    <div>
      <div className="menu-container">
        <div className="menu-item">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="menu-item">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="menu-item">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="menu-item">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default VisMenu;
