'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import Flagf from './icon/Flagf';
import Flag from './icon/Flag';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="border-2 rounded">
      <div className="flex items-center">
        {localActive === "fr" ? <Flagf /> : <Flag />}
        {/* Assuming Flagf and FlagEn are your icon components */}
        <p className="sr-only">change language</p>
        <select
          defaultValue={localActive}
          className="bg-transparent py-2"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="fr">french </option>
          <option value="en">englais </option>
        </select>
      </div>
    </label>
  );
}
