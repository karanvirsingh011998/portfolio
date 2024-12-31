
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:karanvir@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                        karanvir01998@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                        +91 8437333427
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-400">Chandigarh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
                <h2 className="text-2xl font-semibold mb-8">Office Hours</h2>
                <div className="space-y-4 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday - Sunday: By appointment only</p>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}