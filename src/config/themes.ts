export interface Theme {
  id: string;
  name: string;
  colors: {
    background: {
      dark: string;
    };
    text: {
      light: string;
      gray: string;
    };
    code: {
      keyword: string;
      variable: string;
      string: string;
      comment: string;
      number: string;
      tag: string;
    };
  };
}

export const themes: Theme[] = [
  {
    id: "night-owl",
    name: "Night Owl",
    colors: {
      background: {
        dark: "#011627",
      },
      text: {
        light: "#D6DEEB",
        gray: "#637777",
      },
      code: {
        keyword: "#C792EA",
        variable: "#7FDBCA",
        string: "#ECC48D",
        comment: "#637777",
        number: "#F78C6C",
        tag: "#7FDBCA",
      },
    },
  },
  {
    id: "dracula",
    name: "Dracula",
    colors: {
      background: {
        dark: "#282A36",
      },
      text: {
        light: "#F8F8F2",
        gray: "#6272A4",
      },
      code: {
        keyword: "#FF79C6",
        variable: "#BD93F9",
        string: "#F1FA8C",
        comment: "#6272A4",
        number: "#BD93F9",
        tag: "#8BE9FD",
      },
    },
  },
  {
    id: "vscode-dark",
    name: "VSCode Dark",
    colors: {
      background: {
        dark: "#011727",
      },
      text: {
        light: "#E5E9EF",
        gray: "#405870",
      },
      code: {
        keyword: "#4C5ACC",
        variable: "#42D9AD",
        string: "#FDA55E",
        comment: "#9ca7b5",
        number: "#FF6B6B",
        tag: "#e48bc1",
      },
    },
  },
  {
    id: "one-dark-pro",
    name: "One Dark Pro",
    colors: {
      background: {
        dark: "#282C34",
      },
      text: {
        light: "#ABB2BF",
        gray: "#5C6370",
      },
      code: {
        keyword: "#C678DD",
        variable: "#E06C75",
        string: "#98C379",
        comment: "#7F848E",
        number: "#D19A66",
        tag: "#E06C75",
      },
    },
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    colors: {
      background: {
        dark: "#0D1117",
      },
      text: {
        light: "#C9D1D9",
        gray: "#8B949E",
      },
      code: {
        keyword: "#FF7B72",
        variable: "#79C0FF",
        string: "#A5D6FF",
        comment: "#8B949E",
        number: "#79C0FF",
        tag: "#7EE787",
      },
    },
  },

  {
    id: "monokai",
    name: "Monokai",
    colors: {
      background: {
        dark: "#272822",
      },
      text: {
        light: "#F8F8F2",
        gray: "#75715E",
      },
      code: {
        keyword: "#F92672",
        variable: "#FD971F",
        string: "#E6DB74",
        comment: "#75715E",
        number: "#AE81FF",
        tag: "#66D9EF",
      },
    },
  },
  {
    id: "material-darker",
    name: "Material Darker",
    colors: {
      background: {
        dark: "#212121",
      },
      text: {
        light: "#EEFFFF",
        gray: "#4A4A4A",
      },
      code: {
        keyword: "#C792EA",
        variable: "#FF5370",
        string: "#C3E88D",
        comment: "#545454",
        number: "#F78C6C",
        tag: "#89DDFF",
      },
    },
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    colors: {
      background: {
        dark: "#1A1B26",
      },
      text: {
        light: "#A9B1D6",
        gray: "#565F89",
      },
      code: {
        keyword: "#BB9AF7",
        variable: "#7AA2F7",
        string: "#9ECE6A",
        comment: "#565F89",
        number: "#FF9E64",
        tag: "#2AC3DE",
      },
    },
  },
  {
    id: "synthwave-84",
    name: "SynthWave '84",
    colors: {
      background: {
        dark: "#242936",
      },
      text: {
        light: "#F8F8F2",
        gray: "#626483",
      },
      code: {
        keyword: "#F92A72",
        variable: "#FF8B39",
        string: "#72F1B8",
        comment: "#626483",
        number: "#B381C5",
        tag: "#36F9F6",
      },
    },
  },
  {
    id: "nord",
    name: "Nord",
    colors: {
      background: {
        dark: "#2E3440",
      },
      text: {
        light: "#D8DEE9",
        gray: "#4C566A",
      },
      code: {
        keyword: "#81A1C1",
        variable: "#8FBCBB",
        string: "#A3BE8C",
        comment: "#4C566A",
        number: "#B48EAD",
        tag: "#88C0D0",
      },
    },
  },
];

export const defaultTheme = themes[0];
