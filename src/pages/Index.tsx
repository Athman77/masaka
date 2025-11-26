import { useState } from "react";
import { ContractForm, ContractData } from "@/components/ContractForm";
import { generatePDF } from "@/components/ContractPDF";
import { toast } from "sonner";
import { FileText } from "lucide-react";
import masakaLogo from "@/assets/masaka-logo.jpg";

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async (data: ContractData) => {
    setIsGenerating(true);
    try {
      const blob = await generatePDF(data);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.playerName.replace(/\s+/g, "_")}_Contract.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      toast.success("PDF generated successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-muted relative">
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${masakaLogo})`,
          backgroundSize: '400px',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <header className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Masaka Youth Football Team
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Official Player Contract & Rules Agreement Generator
          </p>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </header>

        <main>
          {isGenerating ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center space-y-4">
                <div className="animate-spin h-16 w-16 border-4 border-primary border-t-transparent rounded-full mx-auto" />
                <p className="text-lg text-muted-foreground">Generating your contract PDF...</p>
              </div>
            </div>
          ) : (
            <ContractForm onGeneratePDF={handleGeneratePDF} />
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>© 2024 Masaka Youth Football Team. All rights reserved.</p>
          <p className="mt-2">
            This contract is legally binding. Please read all terms carefully before signing.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
