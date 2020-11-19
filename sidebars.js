module.exports = {
  someSidebar: {
    Introduction: [
      "introduction/getting-started",
      "introduction/browser-support",
      "introduction/architecture",
      "introduction/react",
      "introduction/angular",
    ],
    "Dashboard": [
      "dashboard/service-account",
      "dashboard/bucket",
      "dashboard/dataset",
    ],
    "Guides": [
      "guides/loading-medical-data",
      "guides/visualize-tomography",
      "guides/loading-geometry",
      "guides/visualize-geometry",
      "guides/sharing-data",
      "guides/custom-shaders",
    ],
    Modules: [
      "modules/auth",
      "modules/med",
      "modules/geometry",
      "modules/workspace",
      "modules/dataset",
      "modules/storage",
      "modules/utils",
    ],
    Components: [
      {
        type: "category",
        label: "Data loading",
        collapsed: false,
        items: ["components/set-browser", "components/set-file-loader"],
      },
      {
        type: "category",
        label: "Views",
        collapsed: false,
        items: [
          "components/set-view-volumetric",
          "components/set-view-geometry",
          "components/set-view-slices",
        ],
      },
      {
        type: "category",
        label: "Controls",
        collapsed: false,
        items: [
          "components/set-control-colormap",
          "components/set-control-toolbar",
          "components/set-control-geometries",
        ],
      },
      {
        type: "category",
        label: "Panels",
        collapsed: false,
        items: ["components/set-grid-panel", "components/set-pane"],
      },
      {
        type: "category",
        label: "Inputs",
        collapsed: true,
        items: [
          "components/set-input-color",
          "components/set-input-range",
          "components/set-input-select",
        ],
      },
      {
        type: "category",
        label: "Misc",
        collapsed: true,
        items: ["components/set-progress-bar", "components/set-icon"],
      },
    ],
  },
};
