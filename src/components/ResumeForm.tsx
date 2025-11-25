import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

interface ResumeFormProps {
  onDataChange: (data: ResumeData) => void;
}

export interface ResumeData {
  name: string;
  position: string;
  dateOfBirth: string;
  education: string;
  languages: string;
  phone: string;
  email: string;
  skills: string;
  photo: string;
}

const ResumeForm = ({ onDataChange }: ResumeFormProps) => {
  const [formData, setFormData] = useState<ResumeData>({
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

  const handleChange = (field: keyof ResumeData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange(newData);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("photo", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-foreground">Footballer Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="photo" className="text-foreground">Profile Photo</Label>
          <div className="mt-2">
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="cursor-pointer"
            />
            {formData.photo && (
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={formData.photo}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-border"
                />
                <span className="text-sm text-muted-foreground">Photo uploaded</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="name" className="text-foreground">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter player's full name"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="position" className="text-foreground">Position</Label>
          <Input
            id="position"
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
            placeholder="e.g., Forward, Midfielder, Defender"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="dob" className="text-foreground">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="education" className="text-foreground">Education</Label>
          <Textarea
            id="education"
            value={formData.education}
            onChange={(e) => handleChange("education", e.target.value)}
            placeholder="Academic qualifications and football academies"
            className="mt-2 min-h-[80px]"
          />
        </div>

        <div>
          <Label htmlFor="languages" className="text-foreground">Languages</Label>
          <Input
            id="languages"
            value={formData.languages}
            onChange={(e) => handleChange("languages", e.target.value)}
            placeholder="e.g., English, Spanish, French"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="player@example.com"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="skills" className="text-foreground">Skills & Abilities</Label>
          <Textarea
            id="skills"
            value={formData.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            placeholder="Technical skills, physical attributes, specializations"
            className="mt-2 min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
