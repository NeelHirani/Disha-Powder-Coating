import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, Send, CheckCircle, ArrowRight, FileUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  serviceType: string;
  quantity: string;
  material: string;
  timeline: string;
  colorPreference: string;
  specifications: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

export default function Quote() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceType: "",
    quantity: "",
    material: "",
    timeline: "",
    colorPreference: "",
    specifications: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      setFormData({
        serviceType: "",
        quantity: "",
        material: "",
        timeline: "",
        colorPreference: "",
        specifications: "",
        name: "",
        email: "",
        phone: "",
        company: ""
      });
      setFiles([]);
      setIsSubmitting(false);
      setStep(1);
    }, 1500);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Quote"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Request Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Free Quote
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Fill out a simple form and receive a detailed quote within 24 hours
          </p>
        </motion.div>
      </section>

      {/* PROGRESS INDICATOR */}
      <section className="bg-white border-b sticky top-20 z-40 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Details" },
              { num: 3, label: "Attachments" },
              { num: 4, label: "Contact" }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center flex-1 relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all mb-3 ${
                    item.num <= step 
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg' 
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  data-testid={`step-${item.num}`}
                >
                  {item.num < step ? <CheckCircle size={24} /> : item.num}
                </motion.div>
                <span className={`text-sm font-semibold whitespace-nowrap ${
                  item.num <= step ? 'text-slate-900' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
                {idx < 3 && (
                  <div
                    className={`absolute h-1 transition-all top-6 ${
                      item.num < step ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gray-300'
                    }`}
                    style={{
                      width: `calc(100% - 24px)`,
                      left: `calc(50% + 24px)`
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 border-0 shadow-2xl bg-white">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* STEP 1: SERVICE TYPE */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Select Service Type</h2>
                        <p className="text-gray-600 mb-8">What service are you interested in?</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { value: "custom-coating", label: "Custom Powder Coating", desc: "Professional coating tailored to your specs" },
                            { value: "color-matching", label: "Color Matching", desc: "Precision color matching to your samples" },
                            { value: "special-finishes", label: "Special Finishes", desc: "Metallic, textured, and specialty effects" },
                            { value: "protective-coating", label: "Protective Coating", desc: "High-performance protective solutions" }
                          ].map((option) => (
                            <motion.button
                              key={option.value}
                              type="button"
                              whileHover={{ scale: 1.02 }}
                              onClick={() => {
                                handleSelectChange('serviceType', option.value);
                                setTimeout(nextStep, 300);
                              }}
                              className={`p-4 rounded-xl text-left border-2 transition-all ${
                                formData.serviceType === option.value
                                  ? 'border-orange-500 bg-orange-50'
                                  : 'border-gray-200 hover:border-orange-300 bg-white'
                              }`}
                            >
                              <h3 className="font-bold text-slate-900">{option.label}</h3>
                              <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          disabled={!formData.serviceType}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                          data-testid="button-next-1"
                        >
                          Next Step
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: PROJECT DETAILS */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Project Details</h2>
                        <p className="text-gray-600 mb-8">Tell us about your project requirements</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Quantity *</Label>
                          <Input
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 50 parts, 100 pieces"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            data-testid="input-quantity"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Material Type *</Label>
                          <Select value={formData.material} onValueChange={(value) => handleSelectChange('material', value)}>
                            <SelectTrigger className="border-gray-300" data-testid="select-material">
                              <SelectValue placeholder="Select material" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="steel">Steel</SelectItem>
                              <SelectItem value="aluminum">Aluminum</SelectItem>
                              <SelectItem value="stainless">Stainless Steel</SelectItem>
                              <SelectItem value="galvanized">Galvanized Metal</SelectItem>
                              <SelectItem value="brass-copper">Brass & Copper</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Timeline *</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                            <SelectTrigger className="border-gray-300" data-testid="select-timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
                              <SelectItem value="standard">Standard (1 week)</SelectItem>
                              <SelectItem value="flexible">Flexible (2+ weeks)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Color Preference</Label>
                          <Input
                            name="colorPreference"
                            value={formData.colorPreference}
                            onChange={handleChange}
                            placeholder="e.g., Black, RAL 9005"
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-slate-900">Detailed Specifications *</Label>
                        <Textarea
                          name="specifications"
                          value={formData.specifications}
                          onChange={handleChange}
                          placeholder="Describe your project, including dimensions, materials, finish requirements, etc."
                          rows={5}
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          data-testid="textarea-specifications"
                        />
                      </div>

                      <div className="flex justify-between gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="px-8 py-3 border-2 border-gray-300"
                          data-testid="button-back-2"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg"
                          data-testid="button-next-2"
                        >
                          Next Step
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: FILE UPLOADS */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Upload Drawings/Images</h2>
                        <p className="text-gray-600 mb-8">Share your project files (optional but recommended)</p>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition-colors bg-white hover:bg-orange-50">
                        <label className="cursor-pointer block">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                              <FileUp size={32} className="text-white" />
                            </div>
                            <div>
                              <span className="text-orange-600 hover:text-orange-700 font-semibold text-lg">Click to upload</span>
                              <span className="text-gray-600"> or drag and drop</span>
                            </div>
                            <p className="text-sm text-gray-500">PNG, JPG, PDF, DWG, DXF up to 10MB each</p>
                          </div>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*,.pdf,.dwg,.dxf"
                          />
                        </label>
                      </div>

                      {files.length > 0 && (
                        <div className="space-y-3">
                          <p className="font-semibold text-slate-900">Uploaded Files ({files.length})</p>
                          <div className="space-y-2">
                            {files.map((file, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200"
                              >
                                <div className="flex items-center gap-2">
                                  <Upload size={18} className="text-orange-600" />
                                  <span className="text-sm text-gray-700 font-medium truncate">{file.name}</span>
                                  <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                                </div>
                                <motion.button
                                  type="button"
                                  whileHover={{ scale: 1.1 }}
                                  onClick={() => removeFile(index)}
                                  className="p-1 hover:bg-red-200 rounded transition-colors"
                                >
                                  <X size={18} className="text-red-600" />
                                </motion.button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="px-8 py-3 border-2 border-gray-300"
                          data-testid="button-back-3"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg"
                          data-testid="button-next-3"
                        >
                          Next Step
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: CONTACT INFORMATION */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Contact Information</h2>
                        <p className="text-gray-600 mb-8">We'll use this to send you your quote</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Full Name *</Label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            data-testid="input-contact-name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Email *</Label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            data-testid="input-contact-email"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Phone *</Label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            required
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            data-testid="input-contact-phone"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-900">Company (Optional)</Label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            data-testid="input-company"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="px-8 py-3 border-2 border-gray-300"
                          data-testid="button-back-4"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                          data-testid="button-submit-quote"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                          {!isSubmitting && <Send className="ml-2" size={18} />}
                        </Button>
                      </div>

                      <p className="text-center text-sm text-gray-600 pt-4">
                        ✓ We'll review your request and respond within 24 hours
                      </p>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Happens Next?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Simple 4-step process from submission to project start
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Submit Form', description: 'Fill out your project details and submit' },
              { step: '2', title: 'Review', description: 'Our team analyzes your requirements' },
              { step: '3', title: 'Quote', description: 'Receive detailed pricing within 24 hours' },
              { step: '4', title: 'Start', description: 'Approve quote and we begin your project' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-white h-full">
                  <CardContent className="p-0 space-y-4 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-gradient-to-r from-orange-400 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Questions? We're Here to Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Prefer to talk first? Contact us directly or visit our FAQ page for common questions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all duration-300 font-semibold">
                View FAQs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
