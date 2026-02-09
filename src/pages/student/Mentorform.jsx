import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from "./footer";

export const Mentorform = () => {
  const [formData, setFormData] = useState({
    category: '',
    skill: '',
    headline: '',
    experience: '',
    linkedin: '',
    portfolio: '',
    video: '',
    cvFile: null,
    idFile: null
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [dragOverCv, setDragOverCv] = useState(false);
  const [dragOverId, setDragOverId] = useState(false);

  const categories = [
    { id: 'programming', name: 'Programming' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'language', name: 'Language' }
  ];

  const skills = {
    programming: ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js'],
    'data-science': ['Data Science', 'Machine Learning', 'Data Analysis', 'Python', 'SQL'],
    'web-dev': ['Frontend Development', 'Backend Development', 'React', 'Vue.js', 'Full Stack'],
    language: ['English', 'Spanish', 'French', 'Japanese', 'German']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setFormData(prev => ({ ...prev, category: categoryId, skill: '' }));
  };

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('File size should be less than 2MB');
        return;
      }
      setFormData(prev => ({ ...prev, [fileType]: file }));
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleReset = () => {
    setFormData({ category: '', skill: '', headline: '', experience: '', linkedin: '', portfolio: '', video: '', cvFile: null, idFile: null });
    setSelectedCategory('');
  };

  const availableSkills = selectedCategory ? skills[selectedCategory] : [];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#333]">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex justify-between items-center">
          <div className="text-xl font-bold text-[#2c3e50]">Mentor Form</div>
          <Link to="/find-mentors" className="flex items-center gap-2 text-gray-500 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-all">
            <span>←</span> Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="py-10 px-5">
        <div className="max-w-[800px] mx-auto bg-white rounded-xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#2c3e50] mb-2.5">Mentor Application Form</h1>
            <p className="text-gray-500 leading-relaxed pb-5 border-b-2 border-[#f0f0f0]">
              Apply to become a mentor and share your expertise with learners worldwide.
              Fill out the form below to prove your qualifications.
            </p>
          </div>

          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* Section 1: Category Selection */}
            <section>
              <h2 className="text-xl font-bold text-[#2c3e50] pb-4 mb-6 border-b border-[#f0f0f0]">Category & Skill Selection</h2>
              
              <div className="mb-6">
                <label className="block font-semibold text-[#2c3e50] text-[15px] mb-4">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`p-4 border-2 rounded-lg text-center font-medium cursor-pointer transition-all ${
                        selectedCategory === cat.id 
                        ? 'border-[#3498db] bg-[#f0f7ff] text-[#3498db] shadow-md -translate-y-0.5' 
                        : 'border-[#e0e0e0] bg-white hover:border-[#3498db] hover:bg-[#f0f7ff]'
                      }`}
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#2c3e50] text-[15px]">
                  Select Skill <span className="text-red-500">*</span>
                </label>
                <select
                  name="skill"
                  value={formData.skill}
                  onChange={handleInputChange}
                  disabled={!selectedCategory}
                  className="w-full p-3.5 border border-[#e0e0e0] rounded-lg text-sm outline-none focus:border-[#3498db] focus:ring-4 focus:ring-[#3498db]/10 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzdmOGM4ZCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOCAxMUwzIDZoMTBsLTUgNXoiLz48L3N2Zz4=')] bg-no-repeat bg-[right_16px_center] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                >
                  <option value="">Select a skill</option>
                  {availableSkills.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
            </section>

            {/* Section 2: Headline */}
            <section>
              <h2 className="text-xl font-bold text-[#2c3e50] pb-4 mb-6 border-b border-[#f0f0f0]">Professional Headline</h2>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#2c3e50] text-[15px]">
                  Headline <span className="text-red-500">*</span>
                  <span className="block text-xs font-normal text-gray-400 mt-1">Share your professional experience in detail</span>
                </label>
                <input
                  type="text"
                  name="headline"
                  value={formData.headline}
                  onChange={handleInputChange}
                  className="p-3.5 border border-[#e0e0e0] rounded-lg outline-none focus:border-[#3498db] focus:ring-4 focus:ring-[#3498db]/10 transition-all"
                  placeholder="e.g., Senior React Developer with 8+ years of experience"
                  required
                />
              </div>
            </section>

            {/* Section 3: Description */}
            <section>
              <h2 className="text-xl font-bold text-[#2c3e50] pb-4 mb-6 border-b border-[#f0f0f0]">Experience Description</h2>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#2c3e50] text-[15px]">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="p-3.5 border border-[#e0e0e0] rounded-lg min-h-[140px] outline-none focus:border-[#3498db] transition-all resize-y"
                  placeholder="Describe your teaching experience, projects, etc."
                  required
                />
              </div>
            </section>

            {/* Section 4: Files & Proof */}
            <section>
              <h2 className="text-xl font-bold text-[#2c3e50] pb-4 mb-6 border-b border-[#f0f0f0]">Proof of Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">LinkedIn URL <span className="text-red-500">*</span></label>
                  <input type="url" name="linkedin" className="p-3 border border-gray-200 rounded-lg outline-none focus:border-[#3498db]" placeholder="https://linkedin.com/..." required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">Portfolio Link</label>
                  <input type="url" name="portfolio" className="p-3 border border-gray-200 rounded-lg outline-none focus:border-[#3498db]" placeholder="https://github.com/..." />
                </div>
              </div>

              {/* CV Upload */}
              <div className="mb-8">
                <label className="block font-semibold text-sm mb-3">Upload CV / Resume (PDF) <span className="text-red-500">*</span></label>
                <div 
                  className={`relative p-10 border-2 border-dashed rounded-lg text-center transition-all cursor-pointer ${dragOverCv ? 'border-[#3498db] bg-blue-50' : 'border-gray-200 bg-gray-50 hover:border-[#3498db] hover:bg-[#f0f7ff]'}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOverCv(true); }}
                  onDragLeave={() => setDragOverCv(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOverCv(false); handleFileUpload({ target: { files: e.dataTransfer.files } }, 'cvFile'); }}
                >
                  <input type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={(e) => handleFileUpload(e, 'cvFile')} />
                  <div className="text-4xl mb-3">📄</div>
                  <p className="font-medium text-gray-700">{formData.cvFile ? formData.cvFile.name : 'Click or Drag CV / Resume'}</p>
                  <p className="text-xs text-gray-400 mt-1">PDF format, max 2MB</p>
                </div>
                {formData.cvFile && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg mt-3">
                    <span className="text-blue-500">📄</span>
                    <div className="flex-1 text-sm font-medium truncate">{formData.cvFile.name} ({formatFileSize(formData.cvFile.size)})</div>
                    <button onClick={() => setFormData(p => ({...p, cvFile: null}))} className="text-red-500 text-sm hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-all">Remove</button>
                  </div>
                )}
              </div>

              {/* ID Upload */}
              <div>
                <label className="block font-semibold text-sm mb-3">Upload ID Document <span className="text-red-500">*</span></label>
                <div 
                  className={`relative p-10 border-2 border-dashed rounded-lg text-center transition-all cursor-pointer ${dragOverId ? 'border-[#3498db] bg-blue-50' : 'border-gray-200 bg-gray-50 hover:border-[#3498db] hover:bg-[#f0f7ff]'}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOverId(true); }}
                  onDragLeave={() => setDragOverId(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOverId(false); handleFileUpload({ target: { files: e.dataTransfer.files } }, 'idFile'); }}
                >
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={(e) => handleFileUpload(e, 'idFile')} />
                  <div className="text-4xl mb-3">🆔</div>
                  <p className="font-medium text-gray-700">{formData.idFile ? formData.idFile.name : 'Click or Drag ID Document'}</p>
                  <p className="text-xs text-gray-400 mt-1">NID, Student ID or Passport</p>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10 pt-8 border-t border-gray-100">
              <button 
                type="button" 
                onClick={handleReset}
                className="flex-1 py-4 border-2 border-red-500 text-red-500 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1"
              >
                Reset Form
              </button>
              <button 
                type="submit" 
                className="flex-1 py-4 bg-[#3498db] text-white rounded-lg font-bold hover:bg-[#2980b9] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
              >
                Submit Application
              </button>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}