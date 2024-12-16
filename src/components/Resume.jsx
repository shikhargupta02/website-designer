// import React, { useState, useEffect } from "react";
// import pdf from "../assets/123.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "./resume.scss";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// This line is important to link the worker for rendering PDFs
// pdfjs.GlobalWorkerOptions.workerSrc = `/node_modules/pdfjs-dist/build/pdf.worker.min.js`;

// export const Resume = () => {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     // <div className="resume-section">
//     //   <div style={{ justifyContent: "center", position: "relative" }}>
//     //     <button
//     //       className="resume-button"
//     //       href={pdf}
//     //       target="_blank"
//     //       style={{ maxWidth: "250px" }}
//     //     >
//     //       <AiOutlineDownload />
//     //       &nbsp;Download CV
//     //     </button>
//     //   </div>

//     //   <div className="resume">
//     //     <Document file={pdf} className="d-flex justify-content-center">
//     //       <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//     //     </Document>
//     //   </div>

//     //   <div style={{ justifyContent: "center", position: "relative" }}>
//     //     <button
//     //       className="resume-button"
//     //       href={pdf}
//     //       target="_blank"
//     //       style={{ maxWidth: "250px" }}
//     //     >
//     //       <AiOutlineDownload />
//     //       &nbsp;Download CV
//     //     </button>
//     //   </div>
//     // </div>
//     <div className="resume-wrapper">
//       <h2>PDF Viewer</h2>
//       {/* <embed
//         src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
//         width="100%"
//         height="600px"
//         type="application/pdf"
//         style={{ border: "none" }}
//       /> */}
//       <iframe
//         className="resume-pdf"
//         src={`https://drive.google.com/file/d/1b4z4QFKpR8tgargrrcWrjiMDMhDNFY3k/view?usp=sharing`} // Replace with your PDF path
//         style={{ width: "100%", height: "100vh", border: "none" }}
//         title="PDF Viewer"
//       />
//     </div>
//   );
// };
// App.js

// export consimport React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Document, Page, pdfjs } from "react-pdf";

export const Resume = () => {
  const pdfUrl = "/dummy.pdf"; // Ensure this path is correct

  // Use the local worker
  pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Worker workerUrl={`/pdf.worker.mjs`}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};
