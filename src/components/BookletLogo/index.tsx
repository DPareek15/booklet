import { IconBrandBooking } from '@tabler/icons-react';
import React from 'react';

type Props = {
  size: number;
  stroke: number;
  color: string;
  hidden: boolean;
};

const BookletLogo = ({ size, stroke, color, hidden }: Props) => {
  return (
    <div
      className={`flex items-center justify-center p-1 w-[50px] h-[50px] rounded-lg bg-blue-500 z-10 ${
        hidden && 'hidden'
      }`}
    >
      <IconBrandBooking stroke={stroke} size={size} color={color} />
    </div>
  );
};

export default BookletLogo;
