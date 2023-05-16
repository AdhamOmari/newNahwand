import { Card, Carousel, Container, Row, Col } from 'react-bootstrap'

const Offers = () => {
  const data = [
    { id: 1, title: 'Card 1', description: 'Card 1 description' },
    { id: 2, title: 'Card 2', description: 'Card 2 description' },
    { id: 3, title: 'Card 3', description: 'Card 3 description' },
    { id: 4, title: 'Card 4', description: 'Card 4 description' },
    { id: 5, title: 'Card 5', description: 'Card 5 description' },
    { id: 6, title: 'Card 6', description: 'Card 6 description' },
    { id: 7, title: 'Card 7', description: 'Card 7 description' },
    { id: 8, title: 'Card 8', description: 'Card 8 description' }
    // Add more card objects as needed
  ]

  const getCardsPerSlide = () => {
    const screenWidth = window.innerWidth
    if (screenWidth >= 1200) {
      return 6
    } else if (screenWidth >= 992) {
      return 5
    } else if (screenWidth >= 768) {
      return 4
    } else if (screenWidth >= 576) {
      return 3
    } else {
      return 2
    }
  }

  const cardsPerSlide = getCardsPerSlide()
  const slides = Math.ceil(data.length / cardsPerSlide)

  const renderCards = () => {
    const cardRows = []
    for (let slideIndex = 0; slideIndex < slides; slideIndex++) {
      const start = slideIndex * cardsPerSlide
      const end = start + cardsPerSlide
      const cardRow = (
        <Carousel.Item key={slideIndex}>
          <Container>
            <Row>
              {data.slice(start, end).map(item => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <Card.Link href={`#${item.id}`}>Learn More</Card.Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      )
      cardRows.push(cardRow)
    }
    return cardRows
  }

  return (
    <Carousel>
      <Carousel.Item>
        <Container>
          <Row>{renderCards()}</Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  )
}

export default Offers
