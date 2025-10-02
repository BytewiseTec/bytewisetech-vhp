import Image from 'next/image'

import IconHead from '../../public/assets/images/icons/icon_head.svg'
import IconCheck from '../../public/assets/images/icons/icon_check.svg'
import IconLike from '../../public/assets/images/icons/icon_like.svg'
import IconDartBoard from '../../public/assets/images/icons/icon_dart_board.svg'
import TaglineBg from '../../public/assets/images/about/funfacts_tagline_bg.jpg'


export default function AboutFunFacts() {
  return (
    <div className="row funfact_wrapper">
      <div className="col-lg-8 ">
        <div className="row">
          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <Image src={IconHead} alt="Icon Head" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <span>10+</span>
                </div>
                <h3 className="funfact_title mb-0">Years of experience</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <Image src={IconCheck} alt="Icon Check" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <span>100+</span>
                </div>
                <h3 className="funfact_title mb-0">Success Stories</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <Image src={IconLike} alt="Icon Like" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <span>50+</span>
                </div>
                <h3 className="funfact_title mb-0">Companies Trust Us</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <Image src={IconDartBoard} alt="Icon Dartboard" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <span>100%</span>
                </div>
                <h3 className="funfact_title mb-0">Results Guaranteed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="our_world_employees">
          <div className="image_wrap">
            <Image src={TaglineBg} alt="Artificial intelligence tagline background" />
          </div>
          <div className="content_wrap">
            <h3 className="title_text mb-0">
              Building the Intelligent Future, <b className="d-block">Byte by Byte.</b>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}