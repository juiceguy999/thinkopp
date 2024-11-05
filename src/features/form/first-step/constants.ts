import { SelectOption } from '@/shared/ui/inputs';

export const GENRE_OPTIONS: SelectOption[] = [
  { value: 'blockbuster', label: 'Блокбастер' },
  { value: 'detective', label: 'Детектив' },
  { value: 'thriller', label: 'Триллер' }
];

export const FORMAT_OPTIONS: SelectOption[] = [
  { value: 'online', label: 'Онлайн' },
  { value: 'cinema', label: 'Большой экран' },
  { value: 'web', label: 'Интернет' },
  { value: 'other', label: 'Другое' }
];

export const COUNTRIES_OPTIONS: SelectOption[] = [
  { value: 'russia', label: 'Россия' },
  { value: 'usa', label: 'США' },
  { value: 'china', label: 'Китай' }
];
