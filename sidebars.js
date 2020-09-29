module.exports = {
  someSidebar: {
    Introduction: [
      "introduction/getting-started",
      "introduction/browser-support",
      "introduction/architecture",
      "introduction/faq",
    ],
    "Main Concepts": [
      "concepts/loading-medical-data",
      "concepts/visualize-tomography",
      "concepts/loading-geometry",
      "concepts/visualize-geometry",
      "concepts/sharing-data",
    ],
    Modules: [
      "modules/auth",
      "modules/volume",
      "modules/geometry",
      "modules/workspace",
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
          "components/set-control-models",
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
