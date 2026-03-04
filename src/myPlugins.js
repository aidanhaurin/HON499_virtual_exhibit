//Photo Sphere Viewer plugins
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

export const getPlugins = () => [
    [MarkersPlugin, {
      markers: [
        {
          id: "travelers",
          polygonPixels: [
            [180,855],[446,885],[449,1104],[181,1132]
          ],
          tooltip: {
            content: "Tired Travelers",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_tiredtravelers')?.innerHTML ?? ''
        },
          
        {
          id: "ruedelasante",
          polygonPixels: [
            [640,921],[736,919],[737,1067],[638,1065]
          ],
          tooltip: {
            content: "Rue De La Sante",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_ruedelasante')?.innerHTML ?? ''
        },

        {
          id: "moredistant",
          polygonPixels: [
            [870,837],[1128,838],[1131,1150],[869,1149]
          ],
          tooltip: {
            content: "More Distant Part of the Sea",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_moredistant')?.innerHTML ?? ''
        },

        {
          id: "whistler",
          polygonPixels: [
            [1275,892],[1413,906],[1412,1076],[1276,1086]
          ],
          tooltip: {
            content: "Whistler by the Thames",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_whistler')?.innerHTML ?? ''
        },

        {
          id: "lager",
          polygonPixels: [
            [1575,925],[1728,917],[1727,1072],[1578,1061]
          ],
          tooltip: {
            content: "Lager Beer Saloon",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_lager')?.innerHTML ?? ''
        },

        {
          id: "mary",
          polygonPixels: [
            [1827,842],[2172,841],[2173,1142],[1831,1142]
          ],
          tooltip: {
            content: "Mary (La Sainte-Marie)",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_mary')?.innerHTML ?? ''
        },

        {
          id: "camelid",
          polygonPixels: [
            [2396,1013],[2562,1016],[2555,1371],[2392,1375]
          ],
          tooltip: {
            content: "Camelid Vessel",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_camelid')?.innerHTML ?? ''
        },

        {
          id: "americana",
          polygonPixels: [
            [2604,946],[2708,941],[2709,1043],[2603,1039]
          ],
          tooltip: {
            content: "Americana",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_americana')?.innerHTML ?? ''
        },

        {
          id: "doorofjustice",
          polygonPixels: [
            [2856,883],[3144,885],[3139,1102],[2861,1105]
          ],
          tooltip: {
            content: "The Door of Justice",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_doorofjustice')?.innerHTML ?? ''
        },

        {
          id: "gloucester",
          polygonPixels: [
            [3285,935],[3400,939],[3398,1040],[3288,1043]
          ],
          tooltip: {
            content: "Gloucester Harbor",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_gloucester')?.innerHTML ?? ''
        },

        {
          id: "thequest",
          polygonPixels: [
            [3628,892],[3794,877],[3789,1108],[3632,1099]
          ],
          tooltip: {
            content: "The Quest, from Don Quixote",
            position: "top"
          },
          style: {
            fill: "transparent",
            stroke: "transparent"
          },
          content: document.getElementById('template_thequest')?.innerHTML ?? ''
        }
      ]
    }]
  ]