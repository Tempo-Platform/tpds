'use strict';

var tokens = {
  text: {
    fontSize: {
      'text-sm': '0.875rem',
      'text-4xl': '2.25rem',
      'text-6xl': '3.75rem',
      'text-xxs': '0.6875rem',
      'text-lg': '1.125rem',
      'text-2xl': '1.5rem',
      'text-5xl': '3rem',
      'text-7xl': '4.5rem',
      'text-8xl': '6rem',
      'text-xl': '1.25rem',
      'text-xs': '0.75rem',
      'text-3xl': '1.875rem',
      'text-9xl': '8rem',
      'text-2-xxs': '0.625rem',
      'text-base': '1rem'
    }
  },
  spacing: {
    xxl: '80px',
    xxxl: '120px',
    xl: '64px',
    lg: '48px',
    md: '32px',
    sm: '24px',
    xs: '16px',
    xxs: '8px'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  shadows: {
    light: {
      'shadow-sm': '0px 1px 2px 0px rgba(0,0,0,0.05)',
      'shadow-xl': '0px 8px 10px -6px rgba(0,0,0,0.10),0px 20px 25px -5px rgba(0,0,0,0.10)',
      'shadow-2xl': '0px 25px 50px -12px rgba(0,0,0,0.25)',
      shadow: '0px 1px 3px 0px rgba(0,0,0,0.10)',
      'shadow-md': '0px 4px 6px -1px rgba(0,0,0,0.10)',
      'shadow-lg': '0px 10px 15px -3px rgba(0,0,0,0.10)'
    },
    dark: {
      shadow: '0px 3px 12px 6px rgba(1,1,1,0.25),0px 4px 4px 0px rgba(0,0,0,0.25)',
      'shadow-xl': '0px 6px 30px 10px rgba(1,1,1,0.25),0px 4px 17px 4px rgba(1,1,1,0.25),0px 4px 4px 0px rgba(0,0,0,0.25)',
      'shadow-md': '0px 4px 13px 7px rgba(1,1,1,0.25),0px 4px 4px 0px rgba(0,0,0,0.25)',
      'shadow-sm': '0px 4px 6px 3px rgba(1,1,1,0.24),0px 2px 6px 1px rgba(0,0,0,0.15)',
      'shadow-lg': '0px 8px 15px 5px rgba(1,1,1,0.25),0px 4px 4px 0px rgba(0,0,0,0.25)',
      'shadow-2xl': '0px 15px 50px 0px rgba(1,1,1,0.45),0px 10px 20px 0px rgba(1,1,1,0.30),0px 4px 4px 0px rgba(0,0,0,0.25)'
    }
  },
  colors: {
    light: {
      buttons: {
        danger: {
          text: {
            enabled: '#FDEEEE',
            hover: '#FFFFFF',
            "default": '#EB5757',
            active: '#F9CBCB'
          },
          bg: {
            "default": '#EB5757',
            enabled: '#EB5757',
            hover: '#D64F4F',
            active: '#A73E3E'
          },
          border: {
            enabled: '#EB5757',
            hover: '#D64F4F',
            active: '#A73E3E',
            "default": '#EB5757'
          }
        },
        "default": {
          bg: {
            enabled: '#F1F3F3',
            active: '#C9CDCF',
            hover: '#DFE1E2',
            "default": '#939B9F'
          },
          text: {
            "default": '#323639',
            active: '#323639',
            hover: '#1E2224',
            enabled: '#323639'
          },
          border: {
            active: '#C9CDCF',
            enabled: '#F1F3F3',
            hover: '#DFE1E2'
          }
        },
        success: {
          text: {
            hover: '#FFFFFF',
            enabled: '#E6F9FA',
            active: '#B0ECF0',
            "default": '#00C2CE'
          },
          border: {
            hover: '#00B1BB',
            active: '#008A92',
            enabled: '#00C2CE',
            "default": '#00C2CE'
          },
          bg: {
            active: '#008A92',
            enabled: '#00C2CE',
            "default": '#00C2CE',
            hover: '#00B1BB'
          }
        },
        warning: {
          text: {
            "default": '#F08727',
            enabled: '#FEF3E9',
            hover: '#FFFFFF',
            active: '#FADABC'
          },
          border: {
            "default": '#F08727',
            enabled: '#F08727',
            active: '#AA601C',
            hover: '#DA7B23'
          },
          bg: {
            enabled: '#F08727',
            "default": '#F08727',
            active: '#AA601C',
            hover: '#DA7B23'
          }
        },
        secondary: {
          bg: {
            active: '#FAFAFA',
            hover: '#FFFFFF',
            enabled: '#FFFFFF'
          },
          border: {
            active: '#AEB3B6',
            hover: '#C9CDCF',
            enabled: '#DFE1E2'
          },
          text: {
            hover: '#1E2224',
            active: '#323639',
            enabled: '#323639'
          }
        },
        info: {
          bg: {
            enabled: '#318DFF',
            active: '#2364B5',
            hover: '#2D80E8',
            "default": '#318DFF'
          },
          text: {
            enabled: '#EAF4FF',
            hover: '#FFFFFF',
            active: '#BFDCFF',
            "default": '#318DFF'
          },
          border: {
            enabled: '#318DFF',
            hover: '#2D80E8',
            "default": '#318DFF',
            active: '#2364B5'
          }
        }
      },
      input: {
        bg: {
          enabled: '#FAFAFA',
          focus: '#FFFFFF',
          hover: '#FAFAFA'
        },
        text: {
          prefix: '#989FA3',
          hover: '#484D51',
          focus: '#282C2F',
          enabled: '#788187',
          field_label: '#3E4347'
        },
        border: {
          focus: '#282C2F',
          "default": '#C9CDCF'
        }
      },
      checkbox: {
        selected: {
          border: {
            active: '#008A92',
            hover: '#00B1BB',
            enabled: '#00C2CE'
          },
          text: {
            hover: '#E6F9FA',
            active: '#E6F9FA',
            enabled: '#F1F3F3'
          },
          bg: {
            hover: '#00B1BB',
            active: '#008A92',
            enabled: '#00C2CE'
          }
        },
        unselected: {
          bg: {
            enabled: '#F1F3F3',
            hover: '#E6F9FA',
            active: '#E6F9FA'
          },
          border: {
            hover: '#00C2CE',
            active: '#00B1BB',
            enabled: '#323639'
          },
          text: {
            enabled: '#323639',
            active: '#323639',
            hover: '#1E2224'
          }
        }
      },
      radio_group: {
        bg: {
          active: '#00C2CE',
          enabled: '#FAFAFA',
          press: '#E9EBEC',
          hover: '#F1F3F3'
        },
        text: {
          hover: '#323639',
          enabled: '#484D51',
          press: '#788187',
          active: '#FFFFFF'
        }
      },
      text_link: {
        active: '#2D80E8',
        enabled: '#318DFF',
        hover: '#2364B5',
        press: '#2D80E8',
        visited: '#6200EE'
      },
      nav_bar: {
        text: {
          press: '#788187',
          active: '#151819',
          hover: '#323639',
          enabled: '#484D51'
        },
        bg: '#FAFAFA'
      },
      window_bg: '#FFFFFF',
      text_primary: '#151819',
      text_tertiary: '#B1BDC5',
      text_secondary: '#7F888E',
      body_bg: '#FDFDFD',
      window_border: '#EEF0F1'
    },
    dark: {
      radio_group: {
        text: {
          enabled: '#DFE1E2',
          active: '#1E2224',
          hover: '#FCFCFC',
          press: '#AEB3B6'
        },
        bg: {
          hover: '#1E2224',
          active: '#00C2CE',
          enabled: '#282C2F',
          press: '#151819'
        }
      },
      checkbox: {
        selected: {
          border: {
            active: '#00B1BB',
            hover: '#54D6DE',
            enabled: '#00C2CE'
          },
          text: {
            active: '#02292C',
            hover: '#02292C',
            enabled: '#02292C'
          },
          bg: {
            hover: '#54D6DE',
            active: '#00B1BB',
            enabled: '#00C2CE'
          }
        },
        unselected: {
          text: {
            enabled: '#3E4347',
            active: '#155257',
            hover: '#155257'
          },
          bg: {
            active: '#155257',
            hover: '#155257',
            enabled: '#3E4347'
          },
          border: {
            active: '#00C2CE',
            hover: '#54D6DE',
            enabled: '#60676C'
          }
        }
      },
      buttons: {
        warning: {
          border: {
            enabled: '#F08727',
            hover: '#F5AF6E',
            active: '#AA601C'
          },
          text: {
            active: '#653910',
            hover: '#37210C',
            enabled: '#37210C'
          },
          bg: {
            hover: '#F5AF6E',
            active: '#AA601C',
            enabled: '#F08727'
          }
        },
        secondary: {
          bg: {
            hover: '#1E2224',
            active: '#282C2F',
            enabled: '#1E2224'
          },
          border: {
            active: '#AEB3B6',
            enabled: '#484D51',
            hover: '#989FA4'
          },
          text: {
            enabled: '#DFE1E2',
            hover: '#F1F3F3',
            active: '#DFE1E2'
          }
        },
        info: {
          bg: {
            enabled: '#318DFF',
            hover: '#75B3FF',
            active: '#2364B5'
          },
          border: {
            enabled: '#318DFF',
            hover: '#75B3FF',
            active: '#2364B5'
          },
          text: {
            enabled: '#0D223D',
            active: '#153B6B',
            hover: '#0D223D'
          }
        },
        success: {
          border: {
            active: '#00B1BB',
            hover: '#54D6DE',
            enabled: '#00C2CE'
          },
          text: {
            active: '#005157',
            hover: '#02282B',
            enabled: '#02282B'
          },
          bg: {
            hover: '#54D6DE',
            active: '#00B1BB',
            enabled: '#00C2CE'
          }
        },
        "default": {
          border: {
            enabled: '#282C2F',
            active: '#484D51',
            hover: '#3E4347'
          },
          bg: {
            enabled: '#282C2F',
            hover: '#3E4347',
            active: '#484D51'
          },
          text: {
            active: '#DFE1E2',
            enabled: '#DFE1E2',
            hover: '#F1F3F3'
          }
        },
        danger: {
          border: {
            enabled: '#EB5757',
            hover: '#EF7979',
            active: '#D64F4F'
          },
          bg: {
            enabled: '#EB5757',
            active: '#D64F4F',
            hover: '#EF7979'
          },
          text: {
            active: '#632525',
            hover: '#3B1515',
            enabled: '#3B1515'
          }
        }
      },
      text_link: {
        press: '#2D80E8',
        visited: '#6200EE',
        enabled: '#318DFF',
        active: '#2D80E8',
        hover: '#75B3FF'
      },
      input: {
        bg: {
          hover: '#31373B',
          focus: '#1E2224',
          enabled: '#2C3135'
        },
        text: {
          field_label: '#86949F',
          focus: '#FFFFFF',
          hover: '#DFE1E2',
          enabled: '#9DA1A4',
          prefix: '#788289'
        },
        border: {
          "default": '#57636B',
          focus: '#B9C5CD'
        }
      },
      nav_bar: {
        text: {
          enabled: '#DFE1E2',
          press: '#AEB3B6',
          active: '#FCFCFC',
          hover: '#FCFCFC'
        },
        bg: '#151819'
      },
      text_secondary: '#AEB3B6',
      text_tertiary: '#757E84',
      text_primary: '#F7F7F7',
      window_bg: '#1D1E20',
      window_border: '#2D3033',
      body_bg: '#17181A'
    },
    color_palettes: {
      red: {
        '50': '#FDEEEE',
        '100': '#F9CBCB',
        '200': '#F6B2B2',
        '300': '#F28E8E',
        '400': '#EF7979',
        '500': '#EB5757',
        '600': '#D64F4F',
        '700': '#A73E3E',
        '800': '#813030',
        '900': '#632525',
        '950': '#3B1515'
      },
      brand: {
        '50': '#E6F9FA',
        '100': '#B0ECF0',
        '200': '#8AE3E8',
        '300': '#54D6DE',
        '400': '#33CED8',
        '500': '#00C2CE',
        '600': '#00B1BB',
        '800': '#006B71',
        '900': '#005157'
      },
      orange: {
        '50': '#FEF3E9',
        '100': '#FADABC',
        '200': '#F8C89C',
        '300': '#F5AF6E',
        '400': '#F39F52',
        '500': '#F08727',
        '600': '#DA7B23',
        '700': '#AA601C',
        '800': '#844A15',
        '900': '#653910',
        '950': '#37210C'
      },
      yellow: {
        '50': '#FFFBE8',
        '100': '#FEF4B7',
        '200': '#FEEE94',
        '300': '#FDE764',
        '400': '#FDE245',
        '500': '#FCDB17',
        '600': '#E5C715',
        '700': '#B39B10',
        '800': '#8B780D',
        '900': '#6A5C0A'
      },
      purple: {
        '50': '#EFE6FD',
        '100': '#CEB0FA',
        '200': '#B78AF7',
        '300': '#9654F4',
        '400': '#8133F1',
        '500': '#6200EE',
        '600': '#5900D9',
        '700': '#4600A9',
        '800': '#360083',
        '900': '#290064'
      },
      magenta: {
        '50': '#FCEDFF',
        '100': '#F7C7FF',
        '200': '#F3ABFF',
        '300': '#EE85FF',
        '400': '#EA6DFF',
        '500': '#E549FF',
        '600': '#D042E8',
        '700': '#A334B5',
        '800': '#7E288C',
        '900': '#601F6B'
      },
      blue: {
        '50': '#E8F1FE',
        '100': '#D1E3FD',
        '200': '#A3C7FB',
        '300': '#75AAF9',
        '400': '#478EF7',
        '500': '#1972F5',
        '600': '#1561D0',
        '700': '#1250AB',
        '800': '#0E3F87',
        '900': '#0A2E62',
        '950': '#061D3D'
      },
      green: {
        '50': '#EBFAEB',
        '100': '#C1F0C1',
        '200': '#99E699',
        '300': '#84E184',
        '400': '#32CD32',
        '500': '#2DB92D',
        '600': '#28A428',
        '700': '#1E7B1E',
        '800': '#145214',
        '900': '#0F3E0F',
        '950': '#0B2E0B'
      },
      grey_dark: {
        '50': '#717980',
        '100': '#666D73',
        '200': '#5A6166',
        '300': '#4F555A',
        '400': '#44494D',
        '500': '#393D40',
        '600': '#2D3033',
        '700': '#222426',
        '800': '#1D1E20',
        '900': '#17181A'
      },
      grey_light: {
        '50': '#FDFDFD',
        '100': '#F9F9FA',
        '200': '#F6F7F7',
        '300': '#EEEFF1',
        '400': '#D7DEE5',
        '500': '#C6D0D9',
        '600': '#AEB9C4',
        '700': '#9DA6AE',
        '800': '#88929A',
        '900': '#717980'
      }
    },
    black: '#000000',
    white: '#FFFFFF'
  }
};

module.exports = tokens;
