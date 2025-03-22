import { Title } from '@mantine/core';
import Image from 'next/image';

const NotFoundScreen = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-8 mx-auto my-8">
      <Image
        src="/construction.png"
        alt="construction"
        width={600}
        height={450}
      />
      <Title>
        This page is still under construction! Please come back soon...
      </Title>
    </div>
  );
};

export default NotFoundScreen;
