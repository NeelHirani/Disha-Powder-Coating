import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Quote() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    quantity: "",
    material: "",
    timeline: "",
    specifications: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground text-lg">
            Get a detailed quote for your powder coating project
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                  data-testid={`step-${s}`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Service</span>
            <span>Details</span>
            <span>Specs</span>
            <span>Contact</span>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Select Service Type</h2>
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger data-testid="select-service-type">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-coating">Custom Powder Coating</SelectItem>
                      <SelectItem value="color-matching">Color Matching</SelectItem>
                      <SelectItem value="special-finishes">Special Finishes</SelectItem>
                      <SelectItem value="protective-coating">Protective Coating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep} data-testid="button-next-1">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g., 100 pieces"
                    data-testid="input-quantity"
                  />
                </div>
                <div>
                  <Label htmlFor="material">Material Type</Label>
                  <Select
                    value={formData.material}
                    onValueChange={(value) => setFormData({ ...formData, material: value })}
                  >
                    <SelectTrigger data-testid="select-material">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="steel">Steel</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="stainless">Stainless Steel</SelectItem>
                      <SelectItem value="galvanized">Galvanized Metal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  >
                    <SelectTrigger data-testid="select-timeline">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
                      <SelectItem value="standard">Standard (1 week)</SelectItem>
                      <SelectItem value="flexible">Flexible (2+ weeks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between gap-4">
                  <Button type="button" variant="outline" onClick={prevStep} data-testid="button-back-2">
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep} data-testid="button-next-2">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Specifications</h2>
                <div>
                  <Label htmlFor="specifications">Additional Details</Label>
                  <Textarea
                    id="specifications"
                    value={formData.specifications}
                    onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                    placeholder="Describe your project requirements, preferred colors, finishes, etc."
                    rows={5}
                    data-testid="textarea-specifications"
                  />
                </div>
                <div>
                  <Label>Upload Drawings/Images (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover-elevate active-elevate-2 cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG up to 10MB</p>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <Button type="button" variant="outline" onClick={prevStep} data-testid="button-back-3">
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep} data-testid="button-next-3">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="input-contact-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    data-testid="input-company"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <Button type="button" variant="outline" onClick={prevStep} data-testid="button-back-4">
                    Back
                  </Button>
                  <Button type="submit" data-testid="button-submit-quote">
                    Submit Quote Request
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}
