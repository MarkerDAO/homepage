import { Image, Typography } from '@douyinfe/semi-ui';
import LinearGradientText from '../LinearGradientText';
import { SectionWrap } from './styled';
import banner from '@/assets/imgs/banner.png';

function Section1() {
  return (
    <SectionWrap className="flex items-center" id="home">
      <div className="nmd:w-3/5 relative z-2 xmd:backdrop-blur-[10px] xmd:py-20">
        <div>
          <LinearGradientText
            textClassName="text-[128px] leading-none xmd:text-4xl"
            text={<>Collaboration <br />  On-Chain.</>}
          />
        </div>
        <Typography.Paragraph className="text-2xl mt-11">A multi-chain DAO platform to facilitate completion of exceptional AI annotation work and other data services.</Typography.Paragraph>
        <button className="mt-16 bg-button w-[200px] h-[56px] rounded-md hover:opacity-80">
          Get Started
        </button>
      </div>
      <div className="max-w-[560px] xmd:absolute -z-10 xmd:top-20 xmd:left-0">
        <Image preview={false} src={banner} alt="" />
      </div>
    </SectionWrap>
  );
}

export default Section1;
