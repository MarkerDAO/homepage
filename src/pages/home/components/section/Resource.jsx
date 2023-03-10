import {
  Col, Image, Row, Typography,
} from '@douyinfe/semi-ui';
import LinearGradientText from '../LinearGradientText';
import { SectionWrap } from './styled';
import resourcePrice from '@/assets/imgs/home/resource-price.png';
import resourceWhitePaper from '@/assets/imgs/home/resource-whitepaper.png';
import resourceDocument from '@/assets/imgs/home/resource-document.png';
import LinearGradientBox from '@/components/comm/LinearGradientBox';
import { heightToTop } from '@/utils/utils';

const cardData = [{
  img: resourcePrice,
  title: 'Pricing',
  onClick: () => {
    window.scrollTo(0, heightToTop(document.querySelector('._fq2')) - 200);
  },
}, {
  img: resourceWhitePaper,
  title: 'White Paper',
  onClick: () => {
    window.open('https://www.markerdao.io/whitepaper.pdf');
  },
}, {
  img: resourceDocument,
  title: 'Dev Documentation',
  onClick: () => {
    window.open('https://github.com/MarkerDAO');
  },
}];

function Resource() {
  // const [activeCard] = useState('White Paper');

  return (
    <SectionWrap id="resources">

      <div className="text-center mb-10 xmd:text-left">
        <LinearGradientText
          textClassName="text-[48px] leading-none"
          text="Resources"
          showIcon
        />
      </div>

      <Row gutter={[24, 24]} type="flex">
        {cardData.map((item) => (
          <Col xl={8} lg={12} span={24} className="text-center" key={item.title}>
            <LinearGradientBox
              onClick={() => item.onClick && item.onClick()}
              nolinear
              linear="var(--linear-gradient-border-green)"
              className="rounded-[10px] py-4 border-2 border-[#4E4E4E] hover:border-[transparent] cursor-pointer"
              borderWidth={4}
              hover
            >
              <Image src={item.img} preview={false} width="80px" />
              <Typography.Text className="text-lg block">{item.title}</Typography.Text>
            </LinearGradientBox>
          </Col>
        ))}
      </Row>

    </SectionWrap>
  );
}

export default Resource;
