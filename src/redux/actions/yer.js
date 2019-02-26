import { YER_EKLE } from './types';

export const yerEkle = yerAdi => {
    return {
        type: YER_EKLE,
        payload: yerAdi
    };
};

