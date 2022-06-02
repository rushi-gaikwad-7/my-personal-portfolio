import{useState,useEffect} from "react"
import {Container,Row} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai"
import Particle from "./Partical";
import styles  from "../css/resume.module.css";
import pdf from "./cv.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNew() {
    const resumeLink=pdf;
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
  
    return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Row className={styles.btn} style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className={styles.resume}>
            <Document file={resumeLink} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default ResumeNew;