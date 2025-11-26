import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, Download } from "lucide-react";

interface ContractFormProps {
  onGeneratePDF: (data: ContractData) => void;
}

export interface ContractData {
  playerName: string;
  profilePicture: string;
  playerDate: string;
  parentDate: string;
}

export const ContractForm = ({ onGeneratePDF }: ContractFormProps) => {
  const [playerName, setPlayerName] = useState("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [playerDate, setPlayerDate] = useState(new Date().toISOString().split('T')[0]);
  const [parentDate, setParentDate] = useState(new Date().toISOString().split('T')[0]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5000000) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeneratePDF = () => {
    if (!playerName.trim()) {
      toast.error("Please enter player name");
      return;
    }

    const data: ContractData = {
      playerName,
      profilePicture,
      playerDate,
      parentDate,
    };

    onGeneratePDF(data);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Player Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="playerName">Player Full Name *</Label>
            <Input
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter full name"
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="profilePic">Profile Picture (Optional)</Label>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('profilePic')?.click()}
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
              </Button>
              <input
                id="profilePic"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            {profilePicture && (
              <div className="mt-4 flex justify-center">
                <img
                  src={profilePicture}
                  alt="Profile preview"
                  className="h-32 w-32 rounded-full object-cover border-4 border-primary"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">Signature Dates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="playerDate">Player Signature Date</Label>
            <Input
              id="playerDate"
              type="date"
              value={playerDate}
              onChange={(e) => setPlayerDate(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              ✍️ Player will sign the printed contract manually
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentDate">Parent/Guardian Signature Date</Label>
            <Input
              id="parentDate"
              type="date"
              value={parentDate}
              onChange={(e) => setParentDate(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              ✍️ Parent/Guardian will sign the printed contract manually
            </p>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={handleGeneratePDF}
        className="w-full h-12 text-lg font-semibold"
        size="lg"
      >
        <Download className="mr-2 h-5 w-5" />
        Generate PDF Contract
      </Button>
    </div>
  );
};
