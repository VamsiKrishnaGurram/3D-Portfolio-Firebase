import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadResumeButton = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Trigger file download
    const link = document.createElement("a");
    link.href = "/assets/Gurram_Vamsi_Resume.pdf";
    link.download = "Gurram_Vamsi_Resume.pdf";
    link.click();

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            key="downloading"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/logos/download-done.svg" className="w-5" alt="done icon" />
            Downloaded!
          </motion.p>
        ) : (
          <motion.p
            key="download"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/logos/done.svg" className="w-5" alt="download icon" />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadResumeButton;
