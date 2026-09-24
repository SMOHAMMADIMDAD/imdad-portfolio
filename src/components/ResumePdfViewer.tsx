"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

/*
 * PDF.js worker
 *
 * This file is loaded only in the browser because
 * ResumePdfViewer itself is dynamically imported with SSR disabled.
 */
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type ResumePdfViewerProps = {
  pageNumber: number;
  pdfWidth: number;
  onLoadSuccess: (data: { numPages: number }) => void;
  onLoadError: () => void;
  error: boolean;
};

export default function ResumePdfViewer({
  pageNumber,
  pdfWidth,
  onLoadSuccess,
  onLoadError,
  error,
}: ResumePdfViewerProps) {
  return (
    <Document
      file="/resume.pdf?v=2"
      onLoadSuccess={onLoadSuccess}
      onLoadError={onLoadError}
      loading={null}
      error={null}
    >
      <div className="relative">
        {error && (
          <div className="flex min-h-[400px] min-w-[300px] items-center justify-center rounded-lg bg-white px-8 text-center shadow-xl">
            <div>
              <div className="text-[11px] font-medium text-black/70">
                Unable to preview the resume
              </div>

              <div className="mt-2 text-[9px] leading-5 text-black/40">
                You can still download the PDF below.
              </div>
            </div>
          </div>
        )}

        {!error && (
          <Page
            pageNumber={pageNumber}
            width={pdfWidth}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
          />
        )}
      </div>
    </Document>
  );
}