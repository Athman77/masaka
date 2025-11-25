import { ResumeData } from "./ResumeForm";
import { forwardRef } from "react";
import { Sparkles, Award, BookOpen, Languages, Phone, Mail, Globe, Briefcase, Calendar, Heart } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ data }, ref) => {
  return (
    <div ref={ref} className="bg-white p-16 rounded-2xl shadow-2xl max-w-[1000px] mx-auto relative overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-resume-border/20 via-transparent to-resume-accent/20 pointer-events-none"></div>
      
      {/* Premium Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-4 border-t-4 border-resume-border/40 rounded-tr-3xl opacity-50"></div>
      <div className="absolute top-0 right-0 w-40 h-40 border-r-4 border-t-4 border-resume-border/40 rounded-tl-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l-4 border-b-4 border-resume-border/40 rounded-tr-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 border-resume-border/40 rounded-tl-3xl opacity-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-6 left-6">
        <Sparkles className="w-7 h-7 text-resume-border/60 animate-pulse" strokeWidth={1.5} />
      </div>
      <div className="absolute top-6 right-6">
        <Sparkles className="w-7 h-7 text-resume-border/60 animate-pulse" strokeWidth={1.5} />
      </div>
      
      {/* Football Elements */}
      <div className="absolute top-20 left-12 text-3xl opacity-15">⚽</div>
      <div className="absolute bottom-20 right-12 text-3xl opacity-15">🏆</div>
      
      <div className="space-y-12 relative z-10">
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
        <div className="grid grid-cols-2 gap-8 mt-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <Award className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Skills
                </h2>
                <span className="text-lg ml-auto">💪</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed whitespace-pre-line font-medium">
                {data.skills || "Player skills and abilities"}
              </p>
            </div>

            {/* Education */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <BookOpen className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Education
                </h2>
                <span className="text-lg ml-auto">🎓</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed whitespace-pre-line font-medium">
                {data.education || "Educational background"}
              </p>
            </div>

            {/* Languages */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <Languages className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Languages
                </h2>
                <span className="text-lg ml-auto">🌍</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed font-medium">
                {data.languages || "Languages spoken"}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Work Experience / Position */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <Briefcase className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Work Experience
                </h2>
                <span className="text-lg ml-auto">💼</span>
              </div>
              <p className="text-sm text-resume-text leading-relaxed font-medium">
                Professional {data.position || "Football Player"}
                <br />
                <span className="text-xs opacity-70 font-normal">Career highlights and achievements</span>
              </p>
            </div>

            {/* Date of Birth */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <Calendar className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Date of Birth
                </h2>
                <span className="text-lg ml-auto">🎂</span>
              </div>
              <p className="text-sm text-resume-text font-medium">
                {data.dateOfBirth || "DD/MM/YYYY"}
              </p>
            </div>

            {/* Hobby & Interest */}
            <div className="border-2 border-resume-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-resume-accent/15 to-transparent rounded-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-resume-border">
                <Heart className="w-5 h-5 text-resume-border font-bold" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-resume-text">
                  Hobby & Interest
                </h2>
                <span className="text-lg ml-auto">❤️</span>
              </div>
              <div className="text-sm text-resume-text leading-relaxed space-y-1 font-medium">
                <div className="flex items-center gap-2">⚽ Football</div>
                <div className="flex items-center gap-2">📸 Photography</div>
                <div className="flex items-center gap-2">🍳 Cooking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t-4 border-resume-border pt-10 mt-12 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full shadow-lg">
            <span className="text-2xl">📞</span>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border-3 border-resume-border p-5 rounded-2xl bg-gradient-to-br from-resume-accent/20 to-transparent shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-6 h-6 mx-auto mb-3 text-resume-border font-bold" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-2">
                Phone <span>📱</span>
              </h3>
              <p className="text-sm text-resume-text font-medium">
                {data.phone || "+000 000 000"}
              </p>
            </div>
            <div className="border-3 border-resume-border p-5 rounded-2xl bg-gradient-to-br from-resume-accent/20 to-transparent shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-6 h-6 mx-auto mb-3 text-resume-border font-bold" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-2">
                Email <span>✉️</span>
              </h3>
              <p className="text-sm text-resume-text break-all font-medium">
                {data.email || "email@example.com"}
              </p>
            </div>
            <div className="border-3 border-resume-border p-5 rounded-2xl bg-gradient-to-br from-resume-accent/20 to-transparent shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="w-6 h-6 mx-auto mb-3 text-resume-border font-bold" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-resume-text mb-2 flex items-center justify-center gap-2">
                Website <span>🌐</span>
              </h3>
              <p className="text-sm text-resume-text font-medium">
                {data.name ? `${data.name.toLowerCase().replace(/\s+/g, '')}.com` : "portfolio.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-16 pt-10 border-t-4 border-resume-border relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full shadow-lg">
            <span className="text-2xl">✍️</span>
          </div>
          <div className="flex justify-between items-end gap-12">
            <div className="flex-1">
              <p className="text-sm text-resume-text uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <span>✒️</span> Player Signature
              </p>
              <div className="border-b-4 border-resume-border w-full h-24 relative bg-gradient-to-br from-resume-accent/10 to-transparent rounded-t-2xl shadow-inner">
                <span className="absolute bottom-2 right-3 text-xs text-resume-text opacity-40 font-medium">Sign here</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <p className="text-sm text-resume-text uppercase tracking-widest mb-4 font-bold flex items-center justify-end gap-2">
                Date <span>📅</span>
              </p>
              <div className="border-b-4 border-resume-border w-full h-24 relative bg-gradient-to-br from-resume-accent/10 to-transparent rounded-t-2xl shadow-inner">
                <span className="absolute bottom-2 left-3 text-xs text-resume-text opacity-40 font-medium">DD/MM/YYYY</span>
              </div>
            </div>
          </div>
          
          {/* Official Seal */}
          <div className="mt-12 text-center">
            <div className="flex border-4 border-resume-border rounded-full w-28 h-28 mx-auto items-center justify-center relative bg-gradient-to-br from-resume-accent/30 to-resume-accent/10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-1">🏆</div>
                <div className="text-[9px] font-bold uppercase text-resume-text leading-tight">Official</div>
                <div className="text-[9px] font-bold uppercase text-resume-text leading-tight">Contract</div>
              </div>
              <div className="absolute inset-0 border-2 border-resume-border rounded-full m-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
