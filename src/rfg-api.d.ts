declare module 'rfg-api' {
  export interface RFGRequest {
    $$type: symbol;
  }
  export interface RFGDesign {
    ios: {
      pictureAspect: 'noChange';
      assets: {
        ios6AndPriorIcons: boolean;
        ios7AndLaterIcons: boolean;
        precomposedIcons: boolean;
        declareOnlyDefaultIcon: boolean;
      };
    };
    desktopBrowser: {
      design: 'raw';
    };
    windows: {
      pictureAspect: 'noChange';
      backgroundColor: string;
      onConflict: 'override';
      assets: {
        windows80Ie10Tile: boolean;
        windows10Ie11EdgeTiles: {
          small: boolean;
          medium: boolean;
          big: boolean;
          rectangle: boolean;
        };
      };
    };
    androidChrome: {
      pictureAspect: 'noChange';
      themeColor: string;
      backgroundColor: string;
      manifest: {
        display: 'standalone';
        orientation: 'notSet';
        onConflict: 'override';
        declared: boolean;
        name: string;
      };
      assets: {
        legacyIcon: boolean;
        lowResolutionIcons: boolean;
      };
    };
    safariPinnedTab: {
      pictureAspect: 'silhouette';
      themeColor: string;
    };
  }
  export interface RFGResponse {
    favicon: {
      html_code: string;
    };
  }
  export interface RFGSettings {
    scalingAlgorithm: 'Mitchell';
    errorOnImageTooSmall: boolean;
    readmeFile: boolean;
    htmlCodeFile: boolean;
    usePathAsIs: boolean;
  }
  export interface CreateRequestParams {
    apiKey: string;
    iconsPath: string;
    masterPicture: string;
    design: RFGDesign;
    settings: RFGSettings;
  }
  export interface RFG {
    generateFavicon(
      request: RFGRequest,
      dest: string,
      callback: (error: Error | undefined, success: RFGResponse) => void
    );
    createRequest(params: CreateRequestParams): RFGRequest;
  }
  export function init(): RFG;
}
