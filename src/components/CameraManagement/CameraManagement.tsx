import { useState } from "react";
import Header from "../Header";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import ModulesSelection from "./ModulesSelection";


const CameraManagement = () => {
  const [formData, setFormData] = useState({
    streamUrl: '',
    cameraLocation: '',
    cameraName: '',
    modules: [] as string[],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Create payload matching backend
      const payload = {
        camera_name: formData.cameraName,
        module_names: formData.modules,
        location: formData.cameraLocation,
        stream_url: formData.streamUrl,
      };

      const response = await fetch('http://localhost:8000/save-camera', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success('Camera added successfully!');
        setFormData({
          streamUrl: '',
          cameraLocation: '',
          cameraName: '',
          modules: [],
        });
      } else {
        toast.error('Failed to submit. Try again.');
      }
    } catch (error) {
      toast.error('Camera not added.');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header title="Camera Management" />

      <div className="flex items-center justify-center px-4 py-10 lg:py-20">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-1xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 border border-[#F92609]">

          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#F92609]">Add New Camera</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Stream URL */}
            <div>
              <Label htmlFor="streamUrl" style={{ color: '#F92609' }}>Stream URL</Label>
              <Input
                id="streamUrl"
                name="streamUrl"
                type="text"
                placeholder="Enter stream URL"
                value={formData.streamUrl}
                onChange={handleChange}
                className="mt-2"
                required
              />
            </div>

            {/* Camera Location */}
            <div>
              <Label htmlFor="cameraLocation" style={{ color: '#F92609' }}>Camera Location</Label>
              <Input
                id="cameraLocation"
                name="cameraLocation"
                type="text"
                placeholder="Enter camera location"
                value={formData.cameraLocation}
                onChange={handleChange}
                className="mt-2"
                required
              />
            </div>

            {/* Camera Name */}
            <div>
              <Label htmlFor="cameraName" style={{ color: '#F92609' }}>Camera Name</Label>
              <Input
                id="cameraName"
                name="cameraName"
                type="text"
                placeholder="Enter camera name"
                value={formData.cameraName}
                onChange={handleChange}
                className="mt-2"
                required
              />
            </div>

            {/* Modules Selection */}
            <ModulesSelection formData={formData} setFormData={setFormData} />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Saving..." : "Save Camera"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CameraManagement;
