# 📌 Flowbit AOI Creation Interface
This project is a complete, pixel-perfect implementation of the AOI (Area of Interest) Creation Interface, built as part of the Flowbit Frontend Engineer Internship Assignment.
The goal of this project is to translate the provided Figma design into a functional, responsive, and interactive single-page application using modern frontend technologies.

The application enables users to explore a real-world map, view high-resolution WMS satellite imagery, toggle map layers, and interact with a clean, Figma-accurate UI. It is built using React, TypeScript, Vite, Tailwind CSS, and Leaflet, with client-side state management handled using React Context. Automated UI testing is implemented using Playwright, ensuring the correctness of key map interactions.

-- This project demonstrates strong skills in:
  • Converting Figma prototypes into real UI
  • Integrating WMS-based satellite imagery
  • Building custom map controls
  • Structuring components cleanly
  • Implementing lightweight global state
  • Ensuring stability with automated testing
  • Writing clean, maintainable, production-ready code
  
## 🚀 Features

 🎨 Pixel-perfect UI
  • Follows Figma design exactly
  • Responsive layout
  • Clean Tailwind styling
  
 🗺️ Map Integration
   • Leaflet-powered interactive map
   • Base map + WMS satellite imagery
   • Labels-only layer for clarity
   • Custom zoom + reset controls
   • Scale bar included
   
 🎛️ AOI Panel
  • WMS toggle
  • Search placeholder
  • Shapefile upload placeholder
  
 🧭 Sidebar
  • Minimal fixed-width design
  • Icon-only interface with tooltips
  
 🧪 Testing
  •  Playwright tests for UI and WMS layer behavior
  
## 📘 README Documentation
 
    # 🗺️ Map Library Choice
      I selected Leaflet (react-leaflet) as the map library because it provides native support for WMS layers,   
      which was essential for rendering the required satellite imagery. It is lightweight, simple, and     
      integrates smoothly with React.
   
     ✖ Alternatives Considered:
      | Library                   | Why Not Selected                             |
      |---------------------------|----------------------------------------------|
      | MapLibre GL               |Best for vector tiles, limited WMS support    |
      | OpenLayers                | Very powerful but too complex for this scope |
      | react-map-gl / Mapbox     | Vector-first, not suited for WMS             |


  📌 Leaflet provided the best balance of power, simplicity, and WMS support.
    
## 🏗️ Architecture Decisions

    The app uses a clean, modular structure:
  
    📁 Component Breakdown  
      1. Sidebar – app navigation
      2. AOIPanel – WMS toggle + AOI actions
      3. MapView – base map, WMS layer, labels layer, custom map controls
      4. AppContext – global state management
      5. Tests folder – Playwright tests
      
    ## 📁 Folder Structure
           src/
            ├─ Components/
            │   ├─ Sidebar.tsx
            │   ├─ AOIPanel.tsx
            │   └─ MapView.tsx
            ├─ context/
            │   └─ AppContext.tsx
            ├─ tests/
            │   └─ app.spec.ts
            ├─ App.tsx
            └─ main.tsx
            
     -- Why this structure?
       • Clear separation of concerns
       •  Easy to extend in the future
       • Keeps map logic isolated for performance
       • Avoids prop drilling using React Context
 

 ## ⚡ Performance Considerations
     ✔ Current optimizations:
        • Leaflet tile-based rendering
        • Minimal global state to reduce re-renders
        • Map instance created only once
        • Labels-only layer on top of satellite WMS
        • Conditional rendering of WMS layer

     ✔ Future enhancements:
         • Marker clustering
         • Canvas/WebGL rendering for large datasets
         • Debounced pan/zoom events
         • Lazy loading AOI data
## 🧪Testing Strategy
     ✔ Implemented Tests
       1. App Load Test
          Ensures Sidebar, AOIPanel, and Map render correctly
      2. WMS Toggle Test
         Verifies tile count changes when toggled
         Below 2 tests are performed
          Running 2 tests using 1 worker
          ✓  1 src\tests\app.spec.ts:4:1 › App loads correctly with sidebar, AOI panel, and map (646ms)
          ✓  2 src\tests\app.spec.ts:28:1 › Layer toggle hides and shows WMS overlay tiles (1.1s)

     ✔ Why these tests?
          They validate the core acceptance criteria:
           • UI loads
           • Map loads
           • WMS visibility works
       ➕ Additional tests with more time:
           • AOI drawing tools
           • Search/geocoding behavior
           • File upload interactions
           • Component unit tests
           • Accessibility tests (keyboard navigation, ARIA roles)
           • Visual regression screenshot testing
          
  ## 🔄 Tradeoffs Made
        • Used React Context instead of Zustand/Redux because state requirements were small.
        • Added a labels-only tile layer instead of custom text rendering for clarity.
        • Did not implement drawing tools due to time limitations.
        • Kept UI minimal and strictly matched to Figma without extra features.
        
## 🚀 Production Readiness
    To prepare this project for production:
        • Add LocalStorage/state persistence for AOIs
        • Add WMS tile error handling
        • Add loading indicators for map tiles
        • Optimize caching for faster WMS loading
        • Improve accessibility (keyboard + ARIA)
        • Add authentication if needed
        • Expand Playwright test suite
        
## ⏱️ Time Spent (Approx Breakdown)
      | Task                                 | Time       |
      | ------------------------------------ | ---------- |
      | Figma-to-UI (Sidebar + AOI Panel)    | **3 hrs**  |
      | Map Setup (Leaflet + WMS + Controls) | **3 hrs**  |
      | Labels-only layer + clarity fixes    | **1 hr**   |
      | State Management (React Context)     | **30 min** |
      | Playwright Tests                     | **2 hrs**  |
      | Debugging + Pixel-Perfect Updates    | **2 hrs**  |
      | Final Documentation (README)         | **1 hr**   |
  Total Time: ~12.5–13 hours
## 📡 API Documentation
    This project is frontend-only, so there are no internal API routes.
    However, the assignment requires API documentation, so we document the external map service and client-     side actions that behave like API calls.
    🌍 External WMS API (Used by MapView)
    ]      | Feature          | Details                                      |
           | ---------------- | -------------------------------------------- |
           |   Name           | NRW Digital Orthophotos (WMS)                |
           |   Base URL       | `https://www.wms.nrw.de/geobasis/wms_nw_dop` |
           |   Type           | WMS (Web Map Service)                        |
           |   Layer Used     | `nw_dop_rgb`                                 |
           |   Format         | `image/png`                                  |
           |   Projection     | `EPSG:3857`                                  |
           |   Transparency   | Supported (`transparent=true`)               |
           |   Rendered By    | Leaflet `WMSTileLayer`                       |
 
  ## 🔧 Setup Steps
     Follow these steps to run the project locally:
      # 1. Clone the repository
        git clone https://github.com/AnishaSurywanashi/Flowbit-aoi.git
        cd Flowbit-aoi

      # 2. Install dependencies
        npm install

     # 3. Start development server
        npm run dev

     # 4. Run Playwright tests
        npx playwright test




