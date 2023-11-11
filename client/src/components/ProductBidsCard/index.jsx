import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductBidsCard = ({ productData, user }) => {
    return (
        <Card style={{ width: "25rem" }}>
          <Card.Header as="h5" className="text-center cardTopper">Bid History</Card.Header>
            <Card.Body>
              <Card.Text className="d-flex flex-wrap justify-content-evenly">
                {productData?.bids && productData?.bids.map((bid, index) => {
                  return <span key={index} className="p-4 border-start border-end">${bid?.amount} <span className="bidName">by {bid?.user.username}</span></span>
                })}
              </Card.Text>
            </Card.Body>
          </Card>
    )
}

export default ProductBidsCard