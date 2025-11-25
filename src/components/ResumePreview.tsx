import { ResumeData } from "./ResumeForm";
import { forwardRef } from "react";
import { Sparkles, Award, BookOpen, Languages, Phone, Mail, Globe, Briefcase, Calendar, Heart } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ data }, ref) => {
  return (
    <div ref={ref} className="bg-resume-bg p-12 rounded-lg shadow-2xl max-w-[800px] mx-auto relative overflow-hidden">
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-resume-border opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-resume-border opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-resume-border opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-resume-border opacity-30"></div>
       
      {/* Decorative Sparkles */}
      <div className="absolute top-8 left-8">
        <Sparkles className="w-6 h-6 text-resume-border animate-pulse" strokeWidth={1.5} />
      </div>
      <div className="absolute top-8 right-8">
        <Sparkles className="w-6 h-6 text-resume-border animate-pulse" strokeWidth={1.5} />
      </div>
      
      {/* Football Emojis */}
      <div className="absolute top-16 left-1/4 text-2xl opacity-20">⚽</div>
      <div className="absolute bottom-16 right-1/4 text-2xl opacity-20">🏆</div>
      
      <div className="space-y-10">
        {/* Header Section with Photo */}
        <div className="text-center space-y-6">
          {/* Enhanced Photo Card with Arch */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Decorative Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-resume-border text-resume-bg px-4 py-1 rounded-full z-10">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  ⭐ Player Profile ⭐
                </span>
              </div>
              
              {data.photo ? (
                <div className="relative group">
                  <div className="w-44 h-52 overflow-hidden border-4 border-resume-border shadow-2xl relative bg-gradient-to-br from-resume-accent to-resume-bg"
                       style={{
                         borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                         clipPath: 'ellipse(45% 50% at 50% 45%)'
                       }}>
                    <img
                      src={data.photo}
                      alt={data.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 border-2 border-resume-border rounded-full opacity-20 animate-pulse" 
                       style={{ width: '110%', height: '110%', left: '-5%', top: '-5%' }}></div>
                </div>
              ) : (
                <div className="w-44 h-52 bg-gradient-to-br from-resume-accent to-resume-bg border-4 border-resume-border flex flex-col items-center justify-center shadow-2xl relative"
                     style={{
                       borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                     }}>
                  <span className="text-6xl mb-2">📷</span>
                  <span className="text-xs text-resume-text opacity-50">Upload Photo</span>
                </div>
              )}
              
              {/* Player Number Badge */}
              <div className="absolute -bottom-3 -right-3 bg-resume-border text-resume-bg w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-resume-bg">
                <span>10</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">⚡</span>
              <h1 className="text-6xl font-bold text-resume-text tracking-tight leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}>
                HELLO, I'M
              </h1>
              <span className="text-3xl">⚡</span>
            </div>
            <h1 className="text-7xl font-bold text-resume-text tracking-tight leading-tight mb-4"
                style={{ fontFamily: 'Georgia, serif' }}>
              {data.name ? data.name.toUpperCase() : "PLAYER NAME"}
            </h1>
            <div className="inline-block px-10 py-4 border-4 border-resume-border mt-4 shadow-lg bg-resume-accent/30 relative">
              <div className="absolute top-2 left-2 text-xl">⚽</div>
              <div className="absolute bottom-2 right-2 text-xl">🎯</div>
              <p className="text-2xl text-resume-text uppercase tracking-[0.3em] font-light">
                {data.position || "Position"}
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-6 mt-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <Award className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Skills
                </h2>
                <span className="text-sm">💪</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed whitespace-pre-line">
                {data.skills || "Player skills and abilities"}
              </p>
            </div>

            {/* Education */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <BookOpen className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Education
                </h2>
                <span className="text-sm">🎓</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed whitespace-pre-line">
                {data.education || "Educational background"}
              </p>
            </div>

            {/* Languages */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <Languages className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Languages
                </h2>
                <span className="text-sm">🌍</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed">
                {data.languages || "Languages spoken"}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Work Experience / Position */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <Briefcase className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Work Experience
                </h2>
                <span className="text-sm">💼</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed">
                Professional {data.position || "Football Player"}
                <br />
                <span className="text-xs opacity-70">Career highlights and achievements</span>
              </p>
            </div>

            {/* Date of Birth */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <Calendar className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Date of Birth
                </h2>
                <span className="text-sm">🎂</span>
              </div>
              <p className="text-sm text-resume-text">
                {data.dateOfBirth || "DD/MM/YYYY"}
              </p>
            </div>

            {/* Hobby & Interest */}
            <div className="border-2 border-resume-border p-5 shadow-md hover:shadow-lg transition-shadow bg-resume-accent/20">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-resume-border">
                <Heart className="w-4 h-4 text-resume-border" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-resume-text">
                  Hobby & Interest
                </h2>
                <span className="text-sm">❤️</span>
              </div>
              <div className="text-sm text-resume-text leading-relaxed space-y-1">
                <div className="flex items-center gap-2">⚽ Football</div>
                <div className="flex items-center gap-2">📸 Photography</div>
                <div className="flex items-center gap-2">🍳 Cooking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t-4 border-resume-border pt-8 mt-8 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-resume-bg px-4">
            <span className="text-2xl">📞</span>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="border-2 border-resume-border p-4 rounded-lg bg-resume-accent/20 shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-5 h-5 mx-auto mb-2 text-resume-border" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-1">
                Phone <span>📱</span>
              </h3>
              <p className="text-sm text-resume-text">
                {data.phone || "+000 000 000"}
              </p>
            </div>
            <div className="border-2 border-resume-border p-4 rounded-lg bg-resume-accent/20 shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-5 h-5 mx-auto mb-2 text-resume-border" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-1">
                Email <span>✉️</span>
              </h3>
              <p className="text-sm text-resume-text break-all">
                {data.email || "email@example.com"}
              </p>
            </div>
            <div className="border-2 border-resume-border p-4 rounded-lg bg-resume-accent/20 shadow-md hover:shadow-lg transition-shadow">
              <Globe className="w-5 h-5 mx-auto mb-2 text-resume-border" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-1">
                Website <span>🌐</span>
              </h3>
              <p className="text-sm text-resume-text">
                {data.name ? `${data.name.toLowerCase().replace(/\s+/g, '')}.com` : "portfolio.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-12 pt-8 border-t-4 border-resume-border relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-resume-bg px-4">
            <span className="text-2xl">✍️</span>
          </div>
          <div className="flex justify-between items-end gap-8">
            <div className="flex-1">
              <p className="text-xs text-resume-text uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <span>✒️</span> Player Signature
              </p>
              <div className="border-b-4 border-resume-border w-64 h-20 relative bg-resume-accent/10 rounded-t-lg shadow-inner">
                <span className="absolute bottom-1 right-2 text-xs text-resume-text opacity-30">Sign here</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <p className="text-xs text-resume-text uppercase tracking-widest mb-3 font-bold flex items-center justify-end gap-2">
                Date <span>📅</span>
              </p>
              <div className="border-b-4 border-resume-border w-40 h-20 ml-auto relative bg-resume-accent/10 rounded-t-lg shadow-inner">
                <span className="absolute bottom-1 left-2 text-xs text-resume-text opacity-30">DD/MM/YYYY</span>
              </div>
            </div>
          </div>
          
          {/* Official Seal */}
          <div className="mt-8 text-center">
            <div className="inline-block border-4 border-resume-border rounded-full w-24 h-24 flex items-center justify-center relative bg-resume-accent/30 shadow-lg">
              <div className="text-center">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-[8px] font-bold uppercase text-resume-text">Official</div>
                <div className="text-[8px] font-bold uppercase text-resume-text">Contract</div>
              </div>
              <div className="absolute inset-0 border-2 border-resume-border rounded-full m-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
