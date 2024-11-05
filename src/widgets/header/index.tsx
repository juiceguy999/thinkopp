import { Heading } from '@/shared/ui/heading';
import { Button } from '@/shared/ui/button';

export const Header = () => (
  <header>
    <div className="container mt-16 md:mt-20 flex gap-y-4 items-start justify-between md:flex-row flex-col-reverse">
      <Heading>Производственные параметры фильма</Heading>

      <Button className={'w-full md:w-[225px] md:mt-[22px]'}>
        Отменить заполнение
      </Button>
    </div>
  </header>
);
