import { init, RFGRequest, RFGResponse } from 'rfg-api';

const rfg = init();

export function generateFaviconAsync(request: RFGRequest, dest: string) {
  return new Promise<RFGResponse>((res, rej) => {
    rfg.generateFavicon(request, dest, (error, success) => {
      if (error) {
        rej(error);
      } else {
        res(success);
      }
    });
  });
}

const createRequest = rfg.createRequest

export { createRequest }
