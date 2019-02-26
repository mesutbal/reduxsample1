import { YER_EKLE, YER_SIL } from './types';

export const yerEkle = yerAdi => {
    return {
        type: YER_EKLE,
        payload: yerAdi
    };
};
export const yerSil = () => {
    return {
        type: YER_SIL
    };
};

