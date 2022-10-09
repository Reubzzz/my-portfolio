
import "./resumereader.css";

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import pdfFile from './Files/CV.pdf';

import React, { Component } from 'react';

import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class ResumePage extends Component {
    state = {
        file: pdfFile,
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { file, pageNumber } = this.state;
        return (
            <div id="ResumeContainer">
                <Document className={"PDFDocument"} file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page className={"PDFPage PDFPageOne"} pageNumber={pageNumber} renderTextLayer={false} renderInteractiveForms={false} />
                    <Page className={"PDFPage"} pageNumber={pageNumber + 1} renderTextLayer={false} renderInteractiveForms={false} />
                    <Page className={"PDFPage"} pageNumber={pageNumber + 2} renderTextLayer={false} renderInteractiveForms={false} />
                </Document>
            </div>
        );
    }
}

export default ResumePage;