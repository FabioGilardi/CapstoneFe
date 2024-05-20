import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ContactPage = () => {
  // COMPONENT UPDATE/MOUNT
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="back-to-top shadow-lg">
        <a href="#top">
          <i
            className="bi bi-chevron-up fs-2 rounded-2 p-2 border border-primary"
            style={{ backgroundColor: "#FFEFE5" }}
          ></i>
        </a>
      </div>
      <Container fluid className="py-4" style={{ backgroundColor: "#FFEFE5" }}>
        <h2 className="fw-bold mb-0 text-center text-primary">
          <i className="bi bi-telephone-fill text-primary"></i> CONTACT
        </h2>
      </Container>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={11} md={10} lg={8}>
            <Row className="justify-content-between">
              <Col xs={12} lg={5}>
                <h4 className="text-center fw-bold">INFORMATIONS</h4>
                <div className="py-3">
                  <p className="fw-bold border-bottom border-secondary mb-2">
                    WHERE TO FIND US?
                  </p>
                  <p className="mb-0">23900</p>
                  <p className="mb-0">Lecco (LC)</p>
                  <p className="mb-0">Via delle Vie 4</p>
                </div>
                <div className="py-3">
                  <p className="fw-bold border-bottom border-secondary mb-2">
                    CONTACTS
                  </p>
                  <p className="mb-0">+39 123456789</p>
                  <p className="mb-0">D&GMotors@info.com</p>
                </div>
                <div className="py-3">
                  <p className="fw-bold border-bottom border-secondary mb-2">
                    OPENING TIME
                  </p>
                  <p className="mb-0">
                    Monday - Sunday: 9.00-13.00 / 14.00-18.00
                  </p>
                  <p className="mb-0">During the weekend only sellers</p>
                </div>
                <div className="py-3">
                  <p className="fw-bold border-bottom border-secondary mb-2">
                    SOCIAL MEDIA
                  </p>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/fabio-gilardi-599b022a0/"
                  >
                    <i className="bi bi-linkedin linkedin fs-3 me-2"></i>
                  </Link>
                  <Link target="_blank" to="https://github.com/FabioGilardi">
                    <i className="bi bi-github github fs-3 text-black"></i>
                  </Link>
                </div>
              </Col>
              <Col xs={12} lg={5}>
                <h4 className="text-center fw-bold">F.A.Q.</h4>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What types of cars do you sell?
                    </Accordion.Header>
                    <Accordion.Body>
                      We sell a wide range of vehicles, including new cars, used
                      cars, commercial vehicles, and zero mileage cars. We offer
                      renowned brands and models to suit every need and budget.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Can I book a test drive?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, you can book a test drive online through our website
                      or by contacting us directly by phone. Simply choose the
                      model you are interested in and schedule an appointment.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Do you offer financing for car purchases?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we collaborate with various financial institutions to
                      offer customized financing solutions. You can request a
                      quote directly on our website or visit our dealership to
                      discuss the available options.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Do you accept trade-ins?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we accept trade-ins. You can bring your current
                      vehicle for a free evaluation, and if accepted, its value
                      will be deducted from the price of the new car you intend
                      to purchase.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Do you offer warranties on used cars?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, all our used cars come with a warranty that varies
                      based on the model and age of the vehicle. Our warranty
                      includes the inspection and certification of the vehicle
                      to ensure maximum peace of mind.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Do you provide maintenance and repair services?
                    </Accordion.Header>
                    <Accordion.Body>
                      No, we do not offer maintenance and repair services
                      directly. However, we can recommend trusted service
                      centers in the area that specialize in the brands we sell.
                      You can contact us for a list of these recommended
                      providers.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      What documents are required to buy a car?
                    </Accordion.Header>
                    <Accordion.Body>
                      To purchase a car, you need a valid ID, tax code, and, in
                      the case of financing, income-related documents. For more
                      details, you can contact us directly.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Can I buy a car online?</Accordion.Header>
                    <Accordion.Body>
                      No, we do not offer the option to buy cars online.
                      However, you can browse our catalog on our website, and
                      then visit our dealership to complete the purchase process
                      in person. Our team will be happy to assist you with any
                      inquiries and help you find the perfect car.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
