'use client';

import { useEffect } from 'react';

export const useSetPersistedFormData = <T>(
  key: string,
  set: (_data: T) => void
) => {
  useEffect(() => {
    const data = localStorage.getItem(key);

    if (data) {
      try {
        set(JSON.parse(data));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);
};
