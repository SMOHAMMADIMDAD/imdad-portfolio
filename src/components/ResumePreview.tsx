"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

/*
 * IMPORTANT:
 * react-pdf / pdf.js is loaded only in the browser.
 *
 * This prevents Next.js from evaluating PDF.js during
 * the server-side production build.
 */
const ResumePdfViewer = dynamic(
  () => import("./ResumePdfViewer"),
  {
    ssr: false,
    loading: () => null,
  }
);

const ease = [0.22, 1, 0.36, 1] as const;

type ResumePreviewProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumePreview({
  isOpen,
  onClose,
}: ResumePreviewProps) {
  const viewerRef = useRef<HTMLDivElement>(null);

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [baseWidth, setBaseWidth] = useState(760);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  /*
   * Responsive PDF width.
   *
   * Desktop:
   * PDF stays large but contained.
   *
   * Mobile:
   * PDF intentionally stays wider than the phone screen.
   * This makes the resume readable and allows horizontal scrolling.
   */
  useEffect(() => {
    if (!isOpen) return;

    const updateWidth = () => {
      const container = viewerRef.current;

      if (!container) return;

      const availableWidth = container.clientWidth;

      if (window.innerWidth < 640) {
        // Keep the resume wider than the phone viewport.
        setBaseWidth(Math.max(520, availableWidth - 20));
      } else {
        setBaseWidth(
          Math.min(820, Math.max(500, availableWidth - 32))
        );
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);

    if (viewerRef.current) {
      resizeObserver.observe(viewerRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [isOpen]);

  /*
   * Lock background scrolling while the modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /*
   * Escape closes the viewer.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  /*
   * Reset viewer state every time it opens.
   */
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setIsLoading(true);
      setError(false);
      setNumPages(0);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const pdfWidth = Math.round(baseWidth * zoom);

  const zoomIn = () => {
    setZoom((current) =>
      Math.min(1.8, Number((current + 0.15).toFixed(2)))
    );
  };

  const zoomOut = () => {
    setZoom((current) =>
      Math.max(0.7, Number((current - 0.15).toFixed(2)))
    );
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-2 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease }}
        className="
          flex
          h-[96vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          bg-[#f4f2ec]
          shadow-[0_30px_100px_rgba(0,0,0,0.3)]
          sm:h-[92vh]
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/70 sm:text-[11px]">
              Resume Preview
            </div>

            <div className="mt-1 truncate text-[9px] text-black/40 sm:text-[10px]">
              S. Mohammad Imdad · Software Developer
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white/50
              text-black/55
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            <X size={17} strokeWidth={1.7} />
          </button>
        </div>

        {/* =====================================================
            TOOLBAR
        ===================================================== */}
        <div className="flex shrink-0 items-center justify-between border-b border-black/10 bg-[#eeece6] px-3 py-2 sm:px-5">
          <div className="text-[9px] uppercase tracking-[0.14em] text-black/40">
            {numPages > 0
              ? `Page ${pageNumber} / ${numPages}`
              : "Loading resume"}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= 0.7}
              aria-label="Zoom out"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                border
                border-black/10
                bg-white/60
                text-black/55
                transition
                hover:bg-white
                hover:text-black
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <ZoomOut size={14} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={resetZoom}
              aria-label="Reset zoom"
              className="
                flex
                h-8
                min-w-[54px]
                items-center
                justify-center
                gap-1
                rounded-md
                border
                border-black/10
                bg-white/60
                px-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-black/55
                transition
                hover:bg-white
                hover:text-black
              "
            >
              <RotateCcw size={11} strokeWidth={1.7} />
              {Math.round(zoom * 100)}%
            </button>

            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= 1.8}
              aria-label="Zoom in"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                border
                border-black/10
                bg-white/60
                text-black/55
                transition
                hover:bg-white
                hover:text-black
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <ZoomIn size={14} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        {/* =====================================================
            PDF VIEWER
        ===================================================== */}
        <div
          ref={viewerRef}
          className="
            min-h-0
            flex-1
            overflow-auto
            bg-[#d7d6d1]
            overscroll-contain
          "
        >
          <div
            className="
              flex
              min-h-full
              min-w-max
              items-start
              justify-center
              p-3
              sm:p-6
            "
          >
            {isLoading && !error && (
              <div
                className="
                  flex
                  min-h-[400px]
                  min-w-[300px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  shadow-xl
                "
              >
                <div className="text-center">
                  <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-black/15 border-t-[#315cff]" />

                  <div className="mt-3 text-[9px] uppercase tracking-[0.15em] text-black/40">
                    Loading resume
                  </div>
                </div>
              </div>
            )}

            <ResumePdfViewer
              pageNumber={pageNumber}
              pdfWidth={pdfWidth}
              onLoadSuccess={({ numPages: loadedPages }) => {
                setNumPages(loadedPages);
                setIsLoading(false);
                setError(false);
              }}
              onLoadError={() => {
                setIsLoading(false);
                setError(true);
              }}
              error={error}
            />
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-black/10 bg-[#f4f2ec] px-4 py-3 sm:px-6 sm:py-4">
          <button
            type="button"
            onClick={onClose}
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-black/45
              transition-colors
              hover:text-black
              sm:text-[10px]
            "
          >
            Close
          </button>

          <a
            href="/resume.pdf?v=2"
            download="S_Mohammad_Imdad_Resume.pdf"
            className="
              group
              inline-flex
              items-center
              gap-2
              bg-[#111111]
              px-4
              py-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-white
              transition-all
              duration-300
              hover:bg-[#315cff]
              sm:px-5
              sm:text-[10px]
            "
          >
            <Download
              size={13}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            <span>Download Resume</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}