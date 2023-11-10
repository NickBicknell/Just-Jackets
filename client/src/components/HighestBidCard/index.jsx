import Card from "react-bootstrap/Card";


const HighestBidCard = ({ productData }) => {

    return (
        <Card style={{ width: "13rem" }}>
          <Card.Header as="h5" className="text-center">Higest Bidder</Card.Header>
            <Card.Body>
              <Card.Text className="text-center fs-5">
                {productData?.price}
              </Card.Text>
            </Card.Body>
          </Card>
    )
}

export default HighestBidCard