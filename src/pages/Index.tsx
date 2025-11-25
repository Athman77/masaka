import { useState, useRef } from "react";
import ResumeForm, { ResumeData } from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    position: "",
    dateOfBirth: "",
    education: "",
    languages: "",
    phone: "",
    email: "",
    skills: "",
    photo: "",
  });

  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      toast.loading("Generating PDF...");
      
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      
      // Use landscape orientation for wider layout
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      const fileName = resumeData.name
        ? `${resumeData.name.replace(/\s+/g, "_")}_Football_Resume.pdf`
        : "Footballer_Resume.pdf";

      pdf.save(fileName);
      toast.dismiss();
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to generate PDF. Please try again.");
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">
            Footballer Resume Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Create a professional contract resume for football players
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="space-y-6">
            <ResumeForm onDataChange={setResumeData} />
            <Button
              onClick={handleDownloadPDF}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download as PDF
            </Button>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                Resume Preview
              </h2>
              <div className="overflow-auto max-h-[800px]">
                <ResumePreview ref={resumeRef} data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
