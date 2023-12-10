import Image from 'next/image';
import imageBgLeads from 'public/images/background/Grupo-107.svg';

function Background(props: any) {
  // TODO: tentar passar props para o background
  console.log(props?.props);
  return (
    <Image
      alt="backgroundLeads"
      src={imageBgLeads}
      quality={100}
      objectFit="cover"
      className="z-0"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}

export default Background;
