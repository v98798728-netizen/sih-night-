import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna as Dna2, Search, Map, Database, BookOpen, Waves, Microscope, Thermometer, Droplets, Wind, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <path d="M0,200 Q200,100 400,200 T800,200" stroke="url(#oceanGradient)" strokeWidth="2" />
            <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#oceanGradient)" strokeWidth="1" />
            <path d="M0,400 Q200,300 400,400 T800,400" stroke="url(#oceanGradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-ocean-800 mb-8 leading-tight animate-float">
            Shark - AI-Driven Marine Insights
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unifying ocean, fisheries, otolith, and DNA data for sustainable marine management 
            through advanced AI-powered analytics and visualization.
          </p>
          <Link to="/ai" className="glass-ocean text-white px-8 py-4 rounded-md font-medium text-lg glow-hover transition-all duration-200 inline-flex items-center space-x-2">
            <span>Try AI Assistant</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Oceanography and Marine Science Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-ocean-800 text-center mb-16">Oceanography & Marine Science</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-ocean-700 mb-6">Understanding Our Oceans</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Oceanography is the scientific study of the ocean, encompassing its physical, chemical, biological, and geological aspects. 
                Our platform integrates cutting-edge marine science research to provide comprehensive insights into ocean ecosystems, 
                climate patterns, and marine biodiversity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Indian Ocean, covering approximately 70.6 million square kilometers, is home to diverse marine ecosystems. 
                From coral reefs in the Maldives to deep-sea trenches, this ocean supports over 3,000 fish species and countless 
                other marine organisms crucial for global biodiversity and climate regulation.
              </p>
            </div>
            <div className="relative">
              <div className="glass-ocean rounded-2xl p-6 h-80 relative overflow-hidden glow-soft">
                {/* Ocean waves background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                    <path d="M0,150 Q100,100 200,150 T400,150" stroke="url(#waveGradient)" strokeWidth="2" />
                    <path d="M0,180 Q100,130 200,180 T400,180" stroke="url(#waveGradient)" strokeWidth="1.5" />
                    <path d="M0,210 Q100,160 200,210 T400,210" stroke="url(#waveGradient)" strokeWidth="1" />
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass rounded-lg p-3 glow-hover">
                      <Thermometer className="w-8 h-8 text-ocean-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-ocean-700">Temperature</div>
                      <div className="text-xs text-gray-600">5°C - 30°C</div>
                    </div>
                    <div className="glass rounded-lg p-3 glow-hover">
                      <Droplets className="w-8 h-8 text-aqua-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-ocean-700">Salinity</div>
                      <div className="text-xs text-gray-600">33-37 PSU</div>
                    </div>
                  </div>
                  <Waves className="w-16 h-16 text-ocean-500 mb-3 animate-pulse-soft" />
                  <div className="text-ocean-800 font-semibold text-lg">Indian Ocean</div>
                  <div className="text-sm text-gray-700">70.6M km² • 3,000+ Species</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ocean Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-ocean rounded-2xl p-6 text-center glow-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-200 to-ocean-300 rounded-full flex items-center justify-center mx-auto mb-4 glow-soft">
                <Thermometer className="w-8 h-8 text-ocean-700" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-2">Physical Oceanography</h4>
              <p className="text-gray-600 text-sm">Study of ocean temperature, salinity, currents, and water masses that drive global climate patterns.</p>
            </div>
            
            <div className="glass-aqua rounded-2xl p-6 text-center glow-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-aqua-200 to-aqua-300 rounded-full flex items-center justify-center mx-auto mb-4 glow-soft">
                <Fish className="w-8 h-8 text-aqua-700" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-2">Biological Oceanography</h4>
              <p className="text-gray-600 text-sm">Research on marine life, from microscopic plankton to large marine mammals and their ecosystems.</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center glow-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-deepBlue-200 to-deepBlue-300 rounded-full flex items-center justify-center mx-auto mb-4 glow-soft">
                <Microscope className="w-8 h-8 text-deepBlue-700" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-2">Chemical Oceanography</h4>
              <p className="text-gray-600 text-sm">Analysis of ocean chemistry, nutrient cycles, and chemical processes affecting marine environments.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Our Idea Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-ocean-800 text-center mb-16">Our Idea</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Globe className="w-12 h-12 text-ocean-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-xl font-medium text-ocean-800 mb-3">Oceanographic Data</h3>
              <p className="text-gray-600">Ocean currents, salinity levels, and climate patterns for comprehensive marine analysis</p>
            </div>
            <div className="glass p-8 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Fish className="w-12 h-12 text-aqua-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-xl font-medium text-ocean-800 mb-3">Fisheries Data</h3>
              <p className="text-gray-600">Stock health monitoring, catch trends, and sustainable fishing practices</p>
            </div>
            <div className="glass p-8 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Dna2 className="w-12 h-12 text-deepBlue-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-xl font-medium text-ocean-800 mb-3">Biodiversity Data</h3>
              <p className="text-gray-600">Environmental DNA analysis, species taxonomy, and biodiversity mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientists Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-ocean-800 text-center mb-8">Our Indian Marine Scientists</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Leading researchers from premier Indian institutions contributing to marine science and ocean conservation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-full mx-auto mb-4 flex items-center justify-center relative glow-soft">
                <Users className="w-12 h-12 text-ocean-700" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-gray-600 mb-1">CSIR-National Institute of Oceanography</p>
              <p className="text-xs text-ocean-600 mb-3">Physical Oceanography</p>
              <div className="text-xs text-gray-500">
                <div>• Ocean Circulation Modeling</div>
                <div>• Climate Change Impact</div>
                <div>• Monsoon Dynamics</div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-aqua-100 to-aqua-200 rounded-full mx-auto mb-4 flex items-center justify-center relative glow-soft">
                <Fish className="w-12 h-12 text-aqua-700" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800 mb-2">Dr. Priya Nair</h3>
              <p className="text-sm text-gray-600 mb-1">Central Marine Fisheries Research Institute</p>
              <p className="text-xs text-aqua-600 mb-3">Marine Biology & Fisheries</p>
              <div className="text-xs text-gray-500">
                <div>• Fish Stock Assessment</div>
                <div>• Biodiversity Conservation</div>
                <div>• Sustainable Fisheries</div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-deepBlue-100 to-deepBlue-200 rounded-full mx-auto mb-4 flex items-center justify-center relative glow-soft">
                <Dna2 className="w-12 h-12 text-deepBlue-700" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800 mb-2">Dr. Arjun Menon</h3>
              <p className="text-sm text-gray-600 mb-1">Indian Institute of Science</p>
              <p className="text-xs text-deepBlue-600 mb-3">Marine Biotechnology</p>
              <div className="text-xs text-gray-500">
                <div>• Environmental DNA</div>
                <div>• Marine Genomics</div>
                <div>• Coral Reef Genetics</div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-ocean-100 to-aqua-200 rounded-full mx-auto mb-4 flex items-center justify-center relative glow-soft">
                <Waves className="w-12 h-12 text-ocean-700" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800 mb-2">Dr. Kavitha Reddy</h3>
              <p className="text-sm text-gray-600 mb-1">National Centre for Coastal Research</p>
              <p className="text-xs text-ocean-600 mb-3">Coastal & Marine Geology</p>
              <div className="text-xs text-gray-500">
                <div>• Coastal Erosion Studies</div>
                <div>• Sediment Analysis</div>
                <div>• Sea Level Rise Research</div>
              </div>
            </div>
          </div>
          
          {/* Research Institutions */}
          <div className="mt-16 glass-ocean rounded-2xl p-8 glow-soft">
            <h3 className="text-2xl font-semibold text-ocean-800 text-center mb-8">Collaborating Institutions</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="glass rounded-lg p-4 glow-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-full flex items-center justify-center mx-auto mb-3 glow-soft">
                  <Database className="w-6 h-6 text-ocean-700" />
                </div>
                <h4 className="font-semibold text-ocean-800 mb-1">CSIR-NIO</h4>
                <p className="text-xs text-gray-600">National Institute of Oceanography</p>
              </div>
              
              <div className="glass rounded-lg p-4 glow-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-aqua-100 to-aqua-200 rounded-full flex items-center justify-center mx-auto mb-3 glow-soft">
                  <Fish className="w-6 h-6 text-aqua-700" />
                </div>
                <h4 className="font-semibold text-ocean-800 mb-1">CMFRI</h4>
                <p className="text-xs text-gray-600">Central Marine Fisheries Research Institute</p>
              </div>
              
              <div className="glass rounded-lg p-4 glow-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-deepBlue-100 to-deepBlue-200 rounded-full flex items-center justify-center mx-auto mb-3 glow-soft">
                  <Microscope className="w-6 h-6 text-deepBlue-700" />
                </div>
                <h4 className="font-semibold text-ocean-800 mb-1">NCCR</h4>
                <p className="text-xs text-gray-600">National Centre for Coastal Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-ocean-800 text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Search className="w-10 h-10 text-ocean-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-lg font-medium text-ocean-800 mb-2">AI Search</h3>
              <p className="text-sm text-gray-600">Intelligent query processing for marine data</p>
            </div>
            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Map className="w-10 h-10 text-aqua-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-lg font-medium text-ocean-800 mb-2">Interactive Maps</h3>
              <p className="text-sm text-gray-600">Real-time visualization of marine ecosystems</p>
            </div>
            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <Database className="w-10 h-10 text-deepBlue-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-lg font-medium text-ocean-800 mb-2">Biodiversity Data</h3>
              <p className="text-sm text-gray-600">Comprehensive species and habitat information</p>
            </div>
            <div className="glass p-6 rounded-2xl glow-hover transition-all duration-300 text-center">
              <BookOpen className="w-10 h-10 text-ocean-600 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-lg font-medium text-ocean-800 mb-2">API Access</h3>
              <p className="text-sm text-gray-600">Programmatic access to all platform data</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;